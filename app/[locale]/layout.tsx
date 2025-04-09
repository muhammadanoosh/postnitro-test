import { NextIntlClientProvider, useMessages } from 'next-intl';
import { notFound } from 'next/navigation';
import "@mantine/core/styles.css";
import "../../src/styles/globals.css";  
import React from "react";
import {
  MantineProvider,
  ColorSchemeScript,
  mantineHtmlProps,
} from "@mantine/core";
import { theme } from "../../theme";
import Navbar from '../../src/components/Navbar';

export const metadata = {
  title: "PostNitro",
  description: "Create beautiful social media content",
};

export default function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();

  // Validate locale
  if (!(locale === 'en' || locale === 'zh' || locale === 'es' || locale === 'fr')) {
    notFound();
  }

  return (
    <html lang={locale} {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body style={{ 
        backgroundImage: 'url(/grid-box.svg)',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
        minHeight: '100vh'
      }}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <MantineProvider theme={theme}>
            <Navbar />
            {children}
          </MantineProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
} 