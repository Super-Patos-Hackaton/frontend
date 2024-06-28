import type { Metadata } from 'next';

import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

import QueryProvider from '@/lib/Providers';
import { cn } from '@/lib/utils';

import { fontAcme, fontMono, fontSans } from '@/styles/fonts';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Desafio do Pato',
  description: 'Plataforma de gestão de desafios',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='pt-BR' suppressHydrationWarning>
      <body className={cn(fontSans, fontMono, fontAcme)}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <QueryProvider>{children}</QueryProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
