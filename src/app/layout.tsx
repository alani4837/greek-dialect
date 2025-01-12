import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Greek Dialect Translator"
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={inter.className}> 
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children} 
        </ThemeProvider>                  
      </body>
    </html>
  );
}
