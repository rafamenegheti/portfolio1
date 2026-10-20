import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { ToastProvider } from "@/contexts/ToastContext";
import MagneticCursor from "@/components/MagneticCursor";
import FloatingParticles from "@/components/FloatingParticles";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rafael Menegheti | Desenvolvedor Full Stack",
  description:
    "Portfólio de Rafael Menegheti, Desenvolvedor Full Stack com mais de 6 anos de experiência em TI. Next.js, React, Node.js, NestJS, TypeScript, Java, AWS e IA generativa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <ToastProvider>
            <MagneticCursor />
            <FloatingParticles />
            <ScrollProgress />
            {children}
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
