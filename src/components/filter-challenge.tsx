'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { difficulty, sort, stacks } from '@/config/mocks/filter-challenge';

import { useDebounceValue } from 'usehooks-ts';

import { Button } from './ui/button';
import { Combobox } from './ui/combobox';
import { Input } from './ui/input';
import { Label } from './ui/label';

export default function FilterChallenge() {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const [inputValue, setInputValue] = useState(params.get('search') ?? '');
  const [debouncedValue] = useDebounceValue(inputValue, 500);
  const [comboBoxCleaner, setComboBoxCleaner] = useState(false);

  const HandleClean = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    params.delete('search');
    router.replace(pathName);
    setInputValue('');
  };

  const ComboBoxClean = () => {
    setComboBoxCleaner(true);
  };

  const clearComboBoxClean = () => {
    setComboBoxCleaner(false);
  };

  useEffect(() => {
    if (debouncedValue) {
      const params = new URLSearchParams(searchParams.toString());
      params.set('search', debouncedValue.toString());
      router.replace(pathName + '?' + params);
    } else {
      const params = new URLSearchParams(searchParams.toString());
      params.delete('search');
      router.replace(pathName + '?' + params);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  return (
    <form
      onSubmit={HandleClean}
      className='flex w-80 flex-col gap-4 rounded-md bg-secondary p-4'
    >
      <div>
        <Label htmlFor='search' className={'text-lg text-brand-500'}>
          Pesquisar
        </Label>
        <Input
          className='bg-searchIcon mt-1 rounded-md border-placeholder bg-input placeholder:text-brand-400'
          placeholder='Pesquise por um desafio'
          id='search'
          type='text'
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          value={inputValue}
          data-testid='search-challenge'
        />
      </div>
      <div>
        <Label className='text-lg text-brand-500'>Ordenar por</Label>
        <Combobox
          items={sort}
          placeholder='Ordenar por'
          comboType='order'
          comboBoxCleaner={comboBoxCleaner}
          clearComboBoxClean={clearComboBoxClean}
        />
      </div>
      <div>
        <Label className='text-lg text-brand-500'>Tecnologias</Label>
        <Combobox
          items={stacks}
          placeholder='Tecnologia'
          comboType='technology'
          comboBoxCleaner={comboBoxCleaner}
          clearComboBoxClean={clearComboBoxClean}
        />
      </div>
      <div>
        <Label className='text-lg text-brand-500'>Dificuldade</Label>
        <Combobox
          items={difficulty}
          placeholder='Dificuldade'
          comboType='difficulty'
          comboBoxCleaner={comboBoxCleaner}
          clearComboBoxClean={clearComboBoxClean}
        />
      </div>
      <Button
        onClick={() => ComboBoxClean()}
        className='mt-4 w-full bg-input text-base font-medium uppercase text-brand-500 hover:bg-input/80'
        data-testid='clean-challenge-filter'
      >
        Limpar
      </Button>
    </form>
  );
}
