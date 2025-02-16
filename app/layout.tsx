import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zachary Hejny | Composer",
  description: '\(>")>',
  icons: {
    icon: 'assets/icons/icon.io',
    apple: 'assets/icons/apple-touch-icon.png'
  },
  manifest: '/site.webmanifest'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-col height-100vh">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
