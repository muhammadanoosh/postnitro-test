import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'zh', 'es', 'fr'],

  // Used when no locale matches
  defaultLocale: 'en',
  
  // Don't use locale prefix for default locale
  localePrefix: 'as-needed'
});

export const config = {
  // Match all paths except static files and API routes
  matcher: ['/((?!api|_next|.*\\..*).*)']
}; 