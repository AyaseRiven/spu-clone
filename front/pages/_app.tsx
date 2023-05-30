import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar2";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import heaven from "@next/font/local";
const mainFont = heaven({
  src: "../public/font/DB Heavent v3.2.ttf",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={mainFont.className}>
      {/* <Navbar /> */}
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
