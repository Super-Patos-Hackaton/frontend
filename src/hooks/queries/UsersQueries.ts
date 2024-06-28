/* eslint-disable no-unused-vars */
import loginServices from '@/services/userServices';

import { useMutation } from '@tanstack/react-query';

export const useLoginMutation = (
  onSuccess: (data: Response) => void,
  onError: (error: Error) => void
) => {
  return useMutation({
    mutationFn: loginServices.login,
    onSuccess: onSuccess,
    onError: onError,
  });
};
