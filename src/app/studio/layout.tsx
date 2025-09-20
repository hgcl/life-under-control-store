import { Metadata } from "next";

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
