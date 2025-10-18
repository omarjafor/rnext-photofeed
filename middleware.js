import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse } from "next/server";

let locales = ['en', 'bn'];
let defaultLocale = 'en';

function getLocale(request) {
    const acceptedLanguage = request.headers.get('accept-language');
    const negotiator = new Negotiator({ headers: { 'accept-language': acceptedLanguage } });
    const bestMatch = negotiator.language(locales);
    return match(bestMatch, locales, defaultLocale);
}

export function middleware(request) {
    const pathname = request.nextUrl.pathname;
    const pathnameIsMissingLocale = locales.every(locale => !pathname.startsWith(`/${locale}`) && pathname !== `/${locale}`);
    if(pathnameIsMissingLocale){
        const locale = getLocale(request);
        return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url));
    }
}

export const config = {
    matcher: [
        '/((?!api|_next|.*\\..*).*)',
    ]
}