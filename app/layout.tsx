import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider/ThemeProvider";
import Navbar from "@/components/Header/Navbar/Navbar";
import PageScroll from "@/components/PageScroll";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "AJardiah.dev | Welcome to Ajardiah.dev",
  description:
    "Hi, my name is Aj jardiah Jr and I'm a Full-Stack Software Developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>
            <Navbar />
            <PageScroll />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
