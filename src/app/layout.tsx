import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hello World",
  description: "A clean Next.js project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
