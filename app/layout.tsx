import type { Metadata } from "next";
import {Hind_Vadodara} from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/header";
import Navigation from "../components/navigation";
import { CartProvider } from "../contexts/cartContext";
import { GenderContextProvider } from "../contexts/genderContext";
import { Footer } from "../components/footer";

const hindVadodara = Hind_Vadodara(
  {
    variable: "--font-hind-vadodara",
    weight: ["400","500", "600", "700"],
    style: "normal",
    subsets: ["latin"],
  }
);

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Zalando clone",
  description: "Zalando clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${hindVadodara.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          <GenderContextProvider>
            <Header />
            <Navigation />
            <div className="min-h-screen">
              {children}
            </div>
            <Footer />
          </GenderContextProvider>
        </CartProvider>
      </body>
    </html>
  );
}
