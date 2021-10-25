import { NextResponse as Response } from 'next/server';

export function middleware(ev) {
  console.log(ev.request.nextUrl)
  
  ev.respondWith(new Response(null, {
    headers: {
      'x-hello-middleware': '1'
    }
  }))
}
