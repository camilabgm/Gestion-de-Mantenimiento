import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SGMA - Sistema de Gestión de Mantenimiento Aeronáutico",
  description: "Fuerza Aérea Paraguaya - Gestión de 6 aeronaves A-29 Super Tucano",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
 
        <Navbar />
        
        <main className="min-h-screen bg-gray-50">
          
          {children}
          
        </main>
        

        
      </body>
    </html>
  );
}