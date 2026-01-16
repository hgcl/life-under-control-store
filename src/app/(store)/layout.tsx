import "../styles/globals.css";
import "@hgcle/ui-library/globals.css";
import CartContextProvider from "../../context/CartContextProvider";
import Header from "../../components/Header/Header";

// Imports: external libraries
import { type Metadata } from "next";
import localFont from "next/font/local";
import { ClerkProvider } from "@clerk/nextjs";
import { SanityLive } from "@/sanity/lib/live";
import { Banner, SkipToContent } from "@hgcle/ui-library";

export const metadata: Metadata = {
  title: "Life Under Control",
  description: "Digital & Printable Templates for Studies, Work, and Life",
};

const inter = localFont({
  src: "../styles/Inter-VariableFont.woff2",
  weight: "300 700",
  display: "swap",
});

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ClerkProvider dynamic>
      <html lang="en" className={inter.className}>
        <body>
          <SkipToContent href="#main" />
          <Banner isDisabled>This website is still under construction</Banner>
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
};

export default RootLayout;
