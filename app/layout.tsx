import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Nicole Leon — People-first. Curiosity-led.",
  description: "Meet Nicole Leon through an interactive resume. Explore her experience, ask Scout a question, and discover the person behind the bullet points. Built with LangChain.",
  icons: { icon: "/favicon.svg" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
