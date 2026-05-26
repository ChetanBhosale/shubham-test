import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Mindora — Your mind deserves better software",
  description:
    "AI-powered mental wellness platform for Gen Z. Calm your mind, track your mood, and grow with an emotionally intelligent companion.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}
