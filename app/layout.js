import { Quicksand } from 'next/font/google';
import { Chivo } from 'next/font/google';
import "./globals.css";

const quicksand = Quicksand({
  weight: ['700'],
  subsets: ['latin'],
  variable: "--font-quicksand"
});

const chivo = Chivo({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: "--font-chivo"
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${chivo.variable} ${quicksand.variable} antialiased`}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
