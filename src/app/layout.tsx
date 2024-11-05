import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lista de Tarefas | Fatto",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="bg-raw_umber">{children}</body>
    </html>
  );
}
