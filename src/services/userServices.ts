import { Login } from '@/types/users';

const login = async (data: Login) => {
  const response = (await fetch(`${process.env.API_BASE_URL}/api/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })) as Response;

  return response;
};

const userServices = { login };

export default userServices;
