import { createPortal } from 'react-dom';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

import { AlertCircle } from 'lucide-react';

interface ErrorAlertProps {
  message: string;
  title?: string;
}

function ErrorAlert({ message, title }: ErrorAlertProps) {
  return (
    <Alert
      variant='destructive'
      className='absolute -top-24 left-1/2 -translate-x-1/2 animate-appearing'
    >
      <AlertCircle className='h-4 w-4' />
      <AlertTitle>{title ?? 'Erro'}</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
}
export function ErrorAlertPortal({ message, title }: ErrorAlertProps) {
  return createPortal(ErrorAlert({ message, title }), document.body);
}
