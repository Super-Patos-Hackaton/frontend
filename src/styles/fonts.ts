import { Acme } from 'next/font/google';

import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';

const acme = Acme({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-acme',
});

export const fontAcme = acme.variable;
export const fontSans = GeistSans.variable;
export const fontMono = GeistMono.variable;
