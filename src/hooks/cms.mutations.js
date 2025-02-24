import { useMutation } from '@tanstack/react-query';
import { contactFormFunc, passwordChangeFunc } from './cms.api';
import useAuth from './useAuth';
import toast from 'react-hot-toast';

export const useContactMutation = () => {
  const { setLoading } = useAuth();
  return useMutation({
    mutationKey: ['contact-us'],
    mutationFn: (payload) => contactFormFunc(payload),
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: () => {
      setLoading(false);
      toast.success('Your message has been sent !', {
        duration: 1500,
      });
    },
    onError: (error) => {
      setLoading(false);
      toast.error(error.response?.data?.message, {
        duration: 1500,
      });
    },
  });
};

// password change mutation:
export const usePasswordChangeMutation = () => {
  const { setLoading } = useAuth();
  return useMutation({
    mutationKey: ['password-change'],
    mutationFn: (payload) => passwordChangeFunc(payload),
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: () => {
      toast.success('Password has been changed successfully!', {
        duration: 1500,
      });
      setLoading(false);
    },
    onError: () => {
      setLoading(false);
      toast.error('Error in password change', {
        duration: 1500,
      });
    },
  });
};
