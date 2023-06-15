import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    CredentialsProvider({
      id: "credentials",
      name: 'Credentials',
      type: 'credentials',
      credentials: {
        username: {label: "Username", type: "text"},
        email: {label: "Email", type: "email"},
        password: {label: "Password", type: "password"},
      },
      async authorize(credentials, req) {
        //TODO Save user in db
        console.log("Credentials: ", credentials);
        return null;
      }
    }),
  ],
  callbacks: {
    async jwt({ token, account, trigger, session}) {
      console.log("JWT: ", trigger, session);
      if(account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({session, token}) {
      if(typeof token.accessToken !== 'string') return session;
      session.accessToken = token.accessToken;
      return session;
    },
    async signIn({user, account, profile, email, credentials}) {
      console.log("Sign In: ", user, account, profile, email, credentials);
      return true;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 *60 * 60,
  },
  pages: {
    signIn: "/login",
  },
  //adapter: {}
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
