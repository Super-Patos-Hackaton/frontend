'use client';

import { type SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Typography } from '@/components/ui/typography';
import { useToast } from '@/components/ui/use-toast';

import { cn } from '@/lib/utils';

import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';

import { SendHorizonal } from 'lucide-react';
import { z } from 'zod';

const submitChallengeFormSchema = z.object({
  link: z
    .string()
    .url('Link inválido')
    .min(1, 'É necessário informar um e-mail')
    .refine((val) => val.includes('github.com'), 'O link deve ser do Github'),
});

type SubmitChallengeFormSchema = z.infer<typeof submitChallengeFormSchema>;

export const SubmitChallengeForm = () => {
  const { toast } = useToast();

  const { register, formState, handleSubmit, getFieldState, getValues, watch } =
    useForm<SubmitChallengeFormSchema>({
      resolver: zodResolver(submitChallengeFormSchema),
      mode: 'onBlur',
    });

  const onSubmit: SubmitHandler<SubmitChallengeFormSchema> = (aa) => {
    toast({
      variant: 'success',
      title: 'Seu desafio foi enviado para moderação!',
      description: 'Aguarde um pouco para que ele seja aprovado',
    });
  };

  return (
    <form
      className='mt-3 flex items-center gap-2'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='relative flex w-full flex-col items-center gap-1'>
        <Input
          className={cn(
            'h-12 text-base placeholder:text-base',
            formState.errors.link &&
              'border-destructive placeholder:text-destructive focus-visible:ring-destructive'
          )}
          placeholder='https://github.com/'
          {...register('link')}
        />

        <ErrorMessage
          as={Typography.Error}
          errors={formState.errors}
          className='self-start text-xs text-destructive'
          name='link'
        />
      </div>

      <Button
        type='submit'
        disabled={!watch('link')}
        className={cn(
          'h-12 w-fit rounded-lg p-2.5',
          formState.errors.link && 'self-start'
        )}
      >
        <SendHorizonal className='size-8 text-secondary' />
      </Button>
    </form>
  );
};
