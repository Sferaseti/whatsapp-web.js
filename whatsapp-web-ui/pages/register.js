import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const RegisterPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.replace('/auth/register');
  }, [router]);
  return null;
};

export default RegisterPage;