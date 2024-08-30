
'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { AppStore, store } from "../redux/store";
import { useRef } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    storeRef.current = store;
  }

  return (
    <html lang="en">
      <body className={`${inter.className} max-w-[1580px] m-auto`}>
        <Provider store={storeRef.current}> 
          <Header />
          {children}
          <Footer />
        </Provider> 
      </body>
    </html>
  );
}
