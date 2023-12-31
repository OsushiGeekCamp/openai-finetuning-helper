import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'OpenAI Fine-Tuning Helper',
  description: 'A tool to help you create your fine-tuning dataset',
};

const MaterialSymbols = localFont({
  variable: '--font-material-symbols',
  src: '../../node_modules/material-symbols/material-symbols-rounded.woff2',
  display: 'block',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} ${MaterialSymbols.variable}`}>
        {children}
      </body>
    </html>
  );
}
