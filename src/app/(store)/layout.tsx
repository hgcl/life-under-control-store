import { type Metadata } from "next";
import "../styles/globals.css";
import localFont from "next/font/local";
import { ClerkProvider } from "@clerk/nextjs";
import { SanityLive } from "@/sanity/lib/live";
import CartContextProvider from "../../context/CartContextProvider";
import Header from "../../components/Header";

export const metadata: Metadata = {
  title: "Life Under Control",
  description: "Digital & Printable Templates for Studies, Work, and Life",
};

const inter = localFont({
  src: "../styles/Inter-VariableFont.woff2",
  weight: "300 700",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider dynamic>
      <html lang="en" className={inter.className}>
        <body>
          <main id="main">
            <CartContextProvider>
              <Header />
              {children}
            </CartContextProvider>
          </main>

          <SanityLive />
        </body>
      </html>
    </ClerkProvider>
  );
}
