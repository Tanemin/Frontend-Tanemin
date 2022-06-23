import Cookies from 'js-cookie'
import { NextRequest, NextResponse } from 'next/server'

export const config = {
    matcher: '/',
}

export function middleware(req: NextRequest) {
    const url = req.nextUrl
    let token

    setTimeout(() => {
        token = Cookies.get('token')
        return token
    }, 1000);

    if (!token) {
        return NextResponse.next()
    }
    url.pathname = '/'

    return NextResponse.rewrite(url)
}