import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClientProvider } from './features/ClientProvider';
import StyledComponentsRegistry from './lib/AntdRegistry';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bookshelf',
  description: 'Bookshelf Management System'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientProvider>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ClientProvider>
      </body>
    </html>
  );
}
