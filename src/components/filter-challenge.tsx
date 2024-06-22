'use client';

import { Search } from 'lucide-react';

import logo from '../../public/img/white-logo.png';
import { Button } from './ui/button';
import { Combobox, Item } from './ui/combobox';
import { Input } from './ui/input';
import { Label } from './ui/label';

export default function FilterChallenge() {
  // valores placeholder até vir algo do back
  const ordens: Item[] = [
    { label: 'Mais recente', value: 'maisRecente' },
    { label: 'Mais antigo', value: 'maisAntigo' },
  ];
  const tecnologias: Item[] = [
    { label: 'Javascript', value: 'javascript' },
    { label: 'Typescript', value: 'Typescript' },
    { label: 'Figma', value: 'figma' },
    { label: 'Java', value: 'java' },
  ];

  const dificuldades: Item[] = [
    { label: 'Fácil', value: 'facil' },
    { label: 'Difícil', value: 'dificil' },
    { label: 'Avançado', value: 'avancado' },
    { label: 'Expert', value: 'expert' },
  ];

  return (
    <form className='flex w-80 flex-col gap-4 rounded-md bg-secondary p-4'>
      <div>
        <Label htmlFor='search' className={'text-lg text-brand-500'}>
          Pesquisar
        </Label>
        <Input
          className='bg-searchIcon mt-1 bg-[#3c3634] placeholder:text-brand-400'
          placeholder='Pesquise por um desafio'
          id='search'
          type='text'
        />
      </div>
      <div>
        <Label className='text-lg text-brand-500'>Ordenar por</Label>
        <Combobox items={ordens} placeholder='Ordenar por' />
      </div>
      <div>
        <Label className='text-lg text-brand-500'>Tecnologias</Label>
        <Combobox items={tecnologias} placeholder='Tecnologia' />
      </div>
      <div>
        <Label className='text-lg text-brand-500'>Dificuldade</Label>
        <Combobox items={dificuldades} placeholder='Dificuldade' />
      </div>
      <Button className='w-full bg-[#3c3634] font-medium text-brand-500 hover:bg-[#3c3634]/[0.8]'>
        LIMPAR
      </Button>
    </form>
  );
}
