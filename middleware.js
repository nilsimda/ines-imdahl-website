import { NextResponse } from 'next/server'; // For Vercel edge/Next.js 12+
import ipRangeCheck from 'ip-range-check'; // Using a library for reliable CIDR matching

export function middleware(req) {
    const requestHeaders = new Headers(req.headers);
    const ip = requestHeaders.get('x-forwarded-for') || requestHeaders.get('x-real-ip'); // Get the client's IP
    const allowedIps = process.env.ALLOWED_IPS ? process.env.ALLOWED_IPS.split(',') : [];
    console.log(allowedIps)

    if (req.nextUrl.pathname === '/secret-login') {
        let isAllowed = false;


        if (ip) {
            isAllowed = allowedIps.some(allowedIp => ipRangeCheck(ip, allowedIp));
        }

        if (!isAllowed) {
            // Option 1: Return a 403 Forbidden response
            return new NextResponse('Forbidden', { status: 403 });

            // Option 2: Redirect to a custom error page (e.g., /forbidden)
            // return NextResponse.redirect(new URL('/forbidden', req.url)); 

            // Option 3: Redirect to the home page or another public page
            // return NextResponse.redirect(new URL('/', req.url));
        }
    }

    return NextResponse.next(); // Proceed to the next handler (your application) if allowed or if it's not /secret-login
}

export const config = {
    matcher: '/secret-login', // This middleware only runs for the /secret-login path
};