import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const poppins = Poppins({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: "Portfolio - Luca",
  description: "Luca Anequini Antoniazzi professional portfolio",
  icons: {
    icon: '/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-white dark:bg-bg-gray`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
