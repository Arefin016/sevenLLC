import { axiosPublic } from './useAxiosPublic';

export const SignUpFunc = async (payload) => {
  const { data } = await axiosPublic.post('/api/users/register', payload, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return data;
};
