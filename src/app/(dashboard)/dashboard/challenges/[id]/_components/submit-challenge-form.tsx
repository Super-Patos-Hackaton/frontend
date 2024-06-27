'use client';

import { type SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Typography } from '@/components/ui/typography';
import { useToast } from '@/components/ui/use-toast';

import { cn } from '@/lib/utils';

import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';

import { SendHorizonal } from 'lucide-react';
import { z } from 'zod';

import { CardSubtitle } from './card-subtitle';

const MAX_COMMENT_LENGTH = 2000;

const submitChallengeFormSchema = z.object({
  link: z
    .string()
    .url({ message: 'Link inválido' })
    .min(1, { message: 'É necessário informar um e-mail' })
    .refine((val) => val.includes('github.com'), {
      message: 'O link deve ser do Github',
    }),
  comment: z
    .string()
    .max(MAX_COMMENT_LENGTH, {
      message: 'O comentário deve ter no máximo 2000 caracteres',
    })
    .optional(),
});

type SubmitChallengeFormSchema = z.infer<typeof submitChallengeFormSchema>;

export const SubmitChallengeForm = () => {
  const { toast } = useToast();

  const { register, formState, handleSubmit, watch } =
    useForm<SubmitChallengeFormSchema>({
      resolver: zodResolver(submitChallengeFormSchema),
      mode: 'onBlur',
    });

  const onSubmit: SubmitHandler<SubmitChallengeFormSchema> = () => {
    toast({
      variant: 'success',
      title: 'Seu desafio foi enviado para moderação!',
      description: 'Aguarde um pouco para que ele seja aprovado',
    });
  };

  const watchTextarea = watch('comment');

  return (
    <form
      className='flex h-full flex-col'
      onSubmit={handleSubmit(onSubmit)}
      data-testid='submit-challenge-form'
    >
      <div className='relative mb-5 mt-2 h-full'>
        <Textarea
          placeholder='(opcional)'
          data-testid='submit-challenge-comment'
          className='h-full resize-none text-brand-50 placeholder:text-base'
          {...register('comment')}
        />

        <span
          className={cn(
            'absolute -bottom-8 right-4 z-50 -translate-y-1/2 text-xs text-brand-50/60',
            watchTextarea &&
              watchTextarea.length > MAX_COMMENT_LENGTH &&
              'text-destructive'
          )}
        >
          {watchTextarea?.length}/{MAX_COMMENT_LENGTH}
        </span>
      </div>

      <CardSubtitle className='mt-auto'>Envio do link</CardSubtitle>

      <Typography.P className='mt-4'>
        Insira o link para o repositório github abaixo para realizar a entrega,
        lembre-se de deixar o repositório público para que possam ser acessado
        pelo gestor de desafios
      </Typography.P>

      <div className='mt-2 flex items-center gap-2'>
        <div className='relative flex w-full flex-col items-center gap-1'>
          <Input
            data-testid='submit-challenge-link'
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
          data-testid='submit-challenge-button'
          disabled={!formState.isValid}
          className={cn(
            'h-12 w-fit rounded-lg p-2.5',
            formState.errors.link && 'self-start'
          )}
        >
          <SendHorizonal className='size-8 text-secondary' />
        </Button>
      </div>
    </form>
  );
};
