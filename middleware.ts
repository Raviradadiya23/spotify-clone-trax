// eslint-disable-next-line @next/next/no-server-import-in-page
import { NextResponse } from "next/server";

const signedinPages = ["/", "/playlist", "/library"];

export default function middleware(req) {
  if (signedinPages.find((p) => p === req.nextUrl.pathname)) {
    // console.log(Object.keys(req.cookies));
    // console.log(req.cookies);
    // const token = req.cookies.TRAX_ACCESS_TOKEN;
    const token = req.cookies.get("TRAX_ACCESS_TOKEN");
    // console.log(token);

    if (!token) {
      const url = req.nextUrl.clone();
      url.pathname = "/signin";
      return NextResponse.rewrite(url);
    }
  }
}
