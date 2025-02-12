import type { Metadata } from "next";
import "./globals.css";
import { Bebas_Neue, Urbanist } from 'next/font/google';
import dynamic from "next/dynamic";
import { cookies } from "next/headers";

const urbanist = Urbanist({
  weight: ['800', '500', '300'],
  subsets: ['latin'],
  variable: '--font-urbanist'
})

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ["latin"],
  variable: '--font-bebas'
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const AppThemeProvider = dynamic(() => import("@/app/theme/theme"), {
  ssr: false,
});
const theme = cookies().get("__theme__")?.value || "system";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} ${bebas.variable}`}>
        <AppThemeProvider
           defaultTheme={theme} 
           enableSystem>
          {children}
        </AppThemeProvider>
      </body>
    </html>
  );
}
