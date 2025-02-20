import { useMutation } from '@tanstack/react-query';
import { SignUpFunc } from './auth.hooks';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';
import toast from 'react-hot-toast';

export const useSignUp = () => {
  const { setLoading } = useAuth();
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ['signUp'],
    onMutate: () => {
      setLoading(true);
    },
    mutationFn: (payload) => SignUpFunc(payload),
    onSuccess: () => {
      setLoading(false);
      navigate('/login')
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
};
