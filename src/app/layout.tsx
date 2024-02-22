import type { Metadata } from 'next';
import '../styles/globals.scss';
import Header from '@/core/features/Header';
import Footer from '@/core/features/Footer';

export const metadata: Metadata = {
  title: 'Ratepunk',
  description: 'Ratepunk App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
