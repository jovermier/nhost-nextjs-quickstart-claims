import dynamicImport from 'next/dynamic';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Navigation from '~/components/navigation';
import '~/styles/globals.css';
// import NhostClientProvider from '~/components/NhostReactClientProvider';
// import NhostClientProvider from '~/components/NhostNextClientProvider';

const NhostClientProvider = dynamicImport(() => import('~/components/NhostNextClientProvider'), {
  ssr: false,
});

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NhostClientProvider>
          <div className="app">
            <Navigation />
            <div className="container p-4 mx-auto mt-8 antialiased">{children}</div>
          </div>
        </NhostClientProvider>
      </body>
    </html>
  );
}
