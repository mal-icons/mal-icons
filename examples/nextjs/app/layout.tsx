import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "mal-icons · Next.js example",
  description:
    "mal-icons with the Next.js App Router — React Server Components plus a client island.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
