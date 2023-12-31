import "./globals.css";
import { Providers } from "./components/providers/providers";
import NavigationBar from "./components/navigationComponents/navigationBar";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";

type Params = {
  params: {
    locale: string;
  };
};

type MetadataTranslationType = {
  Title: string;
  Description: string;
};

export async function generateMetadata({ params: { locale } }: Params) {
  const defaultReturn = {
    title: "Modern library",
    description: "Rent books with ease",
  };
  try {
    const translations = (await import(`../../messages/${locale}.json`)).default
      .Metadata as MetadataTranslationType;
    return {
      title: translations.Title,
      description: translations.Description,
    };
  } catch (err) {
    return defaultReturn;
  }
}

export function generateStaticParams() {
  return [{ locale: "pl" }, { locale: "en" }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${params.locale}.json`)).default;
  } catch (err) {
    notFound();
  }

  return (
    <html lang={params.locale}>
      <body>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <Providers>
            <NavigationBar />
            {children}
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
