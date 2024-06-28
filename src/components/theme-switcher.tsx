'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';

import { Moon, Sun } from 'lucide-react';

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      size='icon'
      variant='ghost'
      className='flex'
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      data-testid='theme-switcher'
    >
      <Sun className='rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
      <Moon className='absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  );
};
