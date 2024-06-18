'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button, buttonVariants } from '@/components/ui/button';

import { navLinks } from '@/config/nav-links';

import { cn } from '@/lib/utils';

import { useSidebarToggle } from '@/hooks/use-sidebar-toggle';
import { useStore } from '@/hooks/use-store';

import { LogOut } from 'lucide-react';

export const NavLinksSidebar = () => {
  const pathname = usePathname();
  const sidebar = useStore(useSidebarToggle, (state) => state);

  return (
    <>
      <div className='flex w-full flex-col gap-3'>
        {navLinks.map(({ href, icon: Icon, label }, index) => (
          <div key={href + index} className='w-full'>
            <Button
              className={cn(
                'mb-1 h-11 w-full justify-start bg-transparent hover:bg-brand-400/15',
                pathname.match(href) &&
                  'bg-brand-500/25 text-brand-100 hover:bg-brand-600/50 hover:text-brand-100'
              )}
              asChild
            >
              <Link href={href}>
                <span className={cn(!sidebar?.isOpen ? '' : 'mr-4')}>
                  <Icon size={20} />
                </span>
                <p
                  className={cn(
                    'max-w-[200px] truncate text-base',
                    sidebar?.isOpen === false
                      ? '-translate-x-96 opacity-0'
                      : 'translate-x-0 opacity-100'
                  )}
                >
                  {label}
                </p>
              </Link>
            </Button>
          </div>
        ))}
      </div>

      <div className='w-full'>
        <Button
          className={cn(
            'mb-1 h-10 w-full items-center justify-start bg-transparent text-red-400 hover:bg-brand-400/15',
            !sidebar?.isOpen && 'block'
          )}
        >
          <span className={cn(!sidebar?.isOpen ? '' : 'mr-4')}>
            <LogOut
              size={20}
              className={cn(!sidebar?.isOpen && 'translate-y-0.5')}
            />
          </span>

          <p
            className={cn(
              'max-w-[200px] truncate text-base',
              !sidebar?.isOpen
                ? '-translate-x-96 opacity-0'
                : 'translate-x-0 opacity-100'
            )}
          >
            Sair
          </p>
        </Button>
      </div>
    </>
  );
};
