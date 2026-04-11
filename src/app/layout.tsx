import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Raj Tailor - Full-Stack Developer",
  description: "Full-Stack Developer specializing in MERN Stack and Laravel + Vue.js. Building scalable and user-friendly digital experiences.",
  keywords: ["Raj Tailor", "Full Stack Developer", "MERN Stack", "Laravel", "Vue.js", "React", "Node.js"],
  authors: [{ name: "Raj Tailor" }],
  openGraph: {
    title: "Raj Tailor - Full-Stack Developer",
    description: "Building scalable and user-friendly digital experiences",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-bg-primary text-slate-200 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
