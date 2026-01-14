import { Metadata } from "next";
import "@hgcle/ui-library/globals.css";

export const metadata: Metadata = {
  title: "Life Under Control Studio",
  description: "Created with Sanity Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
