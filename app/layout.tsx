import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "./providers";
import { Suspense } from "react";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <header>
          <Navbar />
        </header>
        <main>
          <Providers>
            <Suspense>{children}</Suspense>
            </Providers>
        </main>

      </body>
    </html>
  );
}
