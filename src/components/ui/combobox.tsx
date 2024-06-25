'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import { cn } from '@/lib/utils';

import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons';

export type Item = { label: string; value: string };
interface ComboboxProps {
  placeholder: string;
  items: Item[];
  comboType: string;
}

export function Combobox({ items, placeholder, comboType }: ComboboxProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const handleChangeParams = (currentValue: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(comboType, currentValue);
    router.replace(pathName + '?' + params);
  };

  useEffect(() => {
    if (value) {
      const params = new URLSearchParams(searchParams.toString());
      params.set(comboType, value);
      router.replace(pathName + '?' + params);
    } else {
      const params = new URLSearchParams(searchParams.toString());
      params.delete(comboType);
      router.replace(pathName + '?' + params);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className='text-brand-400'>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='w-full justify-between rounded-md border-placeholder bg-[#3c3634] text-brand-400 hover:bg-[#3c3634]/[0.8] hover:text-brand-400'
        >
          {value
            ? items.find((item) => item.value === value)?.label
            : placeholder}
          <CaretSortIcon className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-full p-0'>
        <Command>
          <CommandInput placeholder='Search item...' className='h-9' />
          <CommandList className='bg-secondary text-brand-400'>
            <CommandEmpty className='text-brand-400'>
              No item found.
            </CommandEmpty>
            <CommandGroup className='text-brand-400'>
              {items.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue);
                    setOpen(false);
                    handleChangeParams(currentValue);
                  }}
                >
                  {item.label}
                  <CheckIcon
                    className={cn(
                      'ml-auto h-4 w-4',
                      value === item.value ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
