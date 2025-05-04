
import { type NextRequest, NextResponse } from "next/server"

export async function middleware(request: NextRequest) {
    const authCookie = request.cookies.get('better-auth-session');

    if (!authCookie && (request.nextUrl.pathname === '/todos' || request.nextUrl.pathname === '/admin')) {
        return NextResponse.redirect(new URL('/auth/sign-in', request.url));
    }

    return NextResponse.next()
}

export const config = {
    runtime: "nodejs",
    matcher: ["/todos", "/admin"]
}

