// src/app/layout.tsx
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "CRT-APP",
  description: "Catálogo de equipos y herramientas de diagnóstico automotriz.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <header className="border-b bg-gray-500">
          <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
            <Link href="/" className="font-semibold">
              Catálogo Automotriz
            </Link>

            <div className="flex items-center gap-4 text-sm">
              <Link href="/products" className="hover:underline">
                Productos
              </Link>
              <Link href="/about" className="hover:underline">
                Sobre la empresa
              </Link>
              <Link href="/contact" className="hover:underline">
                Contáctenos
              </Link>
            </div>
          </nav>
        </header>

        <main className="mx-auto max-w-5xl px-4 py-6">{children}</main>
      </body>
    </html>
  );
}
