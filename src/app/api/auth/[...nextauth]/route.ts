import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Adapter } from "next-auth/adapters";
import { compare, hash } from "bcryptjs";
import prisma from "../../../../prisma/prisma";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      type: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log("Credentials: ", credentials);
        if (!credentials || !credentials?.password || !credentials?.username) {
          console.log("No credentials");
          return null;
        }
        if (
          credentials?.password &&
          credentials?.username &&
          !credentials.email
        ) {
          try {
            const user = await prisma.user.findUnique({
              where: {email: credentials.username},
            });
            if(!user || (await compare(user.password, credentials.password))){
              return null;
            }
            return user;
          } catch (err) {
            console.log("Error :", err);
            return null;
          }
        }
        const hashedPassword = await hash(credentials.password, 12);
        try {
          const newUser = await prisma.user.create({
            data: {
              name: credentials?.username,
              email: credentials?.email,
              password: hashedPassword,
              provider: "credentials",
            },
          });
          console.log("New User: ", newUser);
          return newUser;
        } catch (err) {
          console.log("Error :", err);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, trigger, session }) {
      console.log("JWT: ", trigger, session);
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      if (typeof token.accessToken !== "string") return session;
      session.accessToken = token.accessToken;
      return session;
    },
    async signIn({ user, account, profile, email, credentials }) {
      console.log("Sign In: ", user, account, profile, email, credentials);
      return true;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  pages: {
    signIn: "/login",
  },
  adapter: PrismaAdapter(prisma) as Adapter,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
