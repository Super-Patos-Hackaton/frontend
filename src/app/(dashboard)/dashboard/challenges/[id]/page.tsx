import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Typography } from '@/components/ui/typography';

import { tags } from '@/config/mocks/individual-challenges';

import { cn } from '@/lib/utils';

import { SendHorizonal, Sword, Tag, Truck } from 'lucide-react';

import { CardSubtitle } from './_components/card-subtitle';
import { SubmitChallengeForm } from './_components/submit-challenge-form';

interface IndividualChallengePageProps {
  params: {
    id: string;
  };
}

export const IndividualChallengePage = ({
  params,
}: IndividualChallengePageProps) => {
  return (
    <div className='grid h-[calc(100%-3rem)] w-full grid-cols-2 gap-9 text-brand-50'>
      <div className='flex flex-col gap-3'>
        <span className='flex items-center gap-2 text-brand-500'>
          <Sword className='size-7' />

          <Typography.H2 className='text-2xl font-medium'>Título</Typography.H2>
        </span>

        <div className='flex h-full flex-col rounded-md bg-secondary px-6 py-4'>
          <CardSubtitle>Descrição</CardSubtitle>

          <div className='mt-5 flex h-[550px] flex-col overflow-y-scroll'>
            <div className='flex flex-col gap-4'>
              <strong>Interface</strong>

              <Typography.P>
                Criar uma página responsiva em HTML e CSS simulando uma página
                do Instagram usando apenas o Flexbox e os conceitos do mobile
                first.
              </Typography.P>
            </div>

            <div className='mt-6 flex flex-col gap-4'>
              <strong>Desafio</strong>
              <Typography.P>
                Esse desafio é para as pessoas iniciantes em HTML e CSS. O
                objetivo é reproduzir uma página de perfil do nosso Photo Grid
                (similar ao Instagram), que é um feed de imagens em três colunas
                nas telas maiores e 1 coluna em telas menores. Para a exibição
                das imagens você pode usar o Lorem Picsum ou o Random Cat (sobre
                como usar essas imagens no site contém uma breve explicação):
              </Typography.P>
            </div>

            <div className='mt-4 flex flex-col items-center gap-1'>
              <Link
                href='https://randomcat.com/'
                className='self-start underline'
              >
                https://randomcat.com/
              </Link>

              <Link
                href='https://picsum.photos/'
                className='self-start underline'
              >
                https://picsum.photos/
              </Link>
            </div>
          </div>

          <div className='mt-auto w-full border-t border-brand-400' />

          <div className='mt-2 flex items-center'>
            <Tag className='size-3 text-brand-400' />

            {tags.map((tag) => (
              <Typography.P
                key={tag}
                className={cn(
                  'relative ml-2 cursor-default text-sm',
                  'after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-400 after:transition-transform after:duration-300 after:ease-in-out',
                  'hover:after:origin-bottom-left hover:after:scale-x-100'
                )}
              >
                {tag}
              </Typography.P>
            ))}
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-3'>
        <span className='flex items-center gap-2 text-brand-500'>
          <Truck className='size-7' />

          <Typography.H2 className='text-2xl font-medium'>
            Entrega
          </Typography.H2>
        </span>

        <div className='flex h-full flex-col rounded-md bg-secondary px-6 pb-6 pt-4'>
          <CardSubtitle>Sobre a entrega</CardSubtitle>

          <Typography.P className='mt-4'>
            Você tem algo a comentar sobre a sua solução? Pontos positivos ou
            negativos que possam ser melhorados?
          </Typography.P>

          <SubmitChallengeForm />
          <div className='sr-only'>{params.id}</div>
        </div>
      </div>
    </div>
  );
};

export default IndividualChallengePage;
