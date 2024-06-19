'use client';

import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';

import { cn } from '@/lib/utils';

import { useSidebarToggle } from '@/hooks/use-sidebar-toggle';
import { useStore } from '@/hooks/use-store';

import { PanelLeftClose, PanelRightClose } from 'lucide-react';

import WhiteLogo from '/public/img/white-logo.png';

export const Sidebar = ({ navLinks }: { navLinks: React.ReactNode }) => {
  const sidebar = useStore(useSidebarToggle, (state) => state);

  return (
    <aside
      data-testid='container'
      className={cn(
        'fixed left-0 top-0 z-20 h-screen -translate-x-full transition-[width] duration-300 ease-in-out lg:translate-x-0',
        !sidebar?.isOpen ? 'w-[76px]' : 'w-80'
      )}
    >
      <div className='relative flex h-full flex-col items-center overflow-y-auto overflow-x-hidden px-3 py-4 shadow-md dark:bg-secondary/25 dark:shadow-foreground/10'>
        <header className='0 flex h-12 w-full items-center justify-between gap-2 border-b border-muted'>
          <div
            className={cn(
              'flex w-full items-center gap-2 transition',
              !sidebar?.isOpen ? '-translate-x-96' : 'translate-x-0'
            )}
          >
            <Image
              src={WhiteLogo}
              width={30}
              height={30}
              alt='Desafios do Pato - Logo'
            />

            <Typography.H1 className='min-w-40 font-heading !text-base tracking-wide text-brand-100'>
              Desafios do Pato
            </Typography.H1>
          </div>

          <Button
            data-testid='sidebar-toggle'
            variant='ghost'
            onClick={() => sidebar?.setIsOpen()}
            className={cn(
              'px-3.5',
              'mb-1 text-brand-100 transition-transform duration-300 ease-in-out hover:text-brand-100',
              !sidebar?.isOpen
                ? '-translate-x-[60px]'
                : '-translate-x-0 self-end'
            )}
          >
            {sidebar?.isOpen ? (
              <PanelLeftClose className='size-6' />
            ) : (
              <PanelRightClose className='size-6 transition' />
            )}
          </Button>
        </header>

        <div className='mt-4 flex h-full w-full flex-col items-center justify-between tracking-normal'>
          {navLinks}
        </div>
      </div>
    </aside>
  );
};
