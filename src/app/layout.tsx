import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Archivo } from 'next/font/google'
import { Footer } from "@/components/Footer";
import { Input } from "@/components/Input";
import house from '../assets/house.svg';

export const metadata: Metadata = {
  title: "Localhost",
  description: "Localhost Website",
};

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--archivo',
  display: 'swap',
})

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" className={archivo.variable}>
      <body>
        <Header/>
        {children}
        <Input placeholder="Escreva algo aqui" icon={house}/>
        <Footer/>
      </body>
    </html>
  );
}
