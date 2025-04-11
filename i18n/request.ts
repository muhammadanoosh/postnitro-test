import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  const defaultLocale = 'en';
  const currentLocale = locale || defaultLocale;
  
  return {
    messages: (await import(`../messages/${currentLocale}.json`)).default,
    locale: currentLocale
  };
}); 