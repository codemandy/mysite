import type { Metadata } from "next";
import "./globals.css";
import styles from "@/styles/backgrounds.module.css";

export const metadata: Metadata = {
  title: "Mathias Tang",
  description: "Artist",
  keywords: "Visual art",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`antialiased ${styles.bottomBackground}`}>
        {children}
      </body>
    </html>
  );
}
