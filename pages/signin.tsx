import { useToast } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Button from '../components/atoms/Button';
import Input from '../components/atoms/Input';
import { setLogin } from '../services/auth';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const toast = useToast();

  const onSubmitHandler = async (event: any) => {
    event.preventDefault();
    const data = {
      email,
      password,
    };
    console.log(data);

    try {
      await setLogin(data);
      toast({
        title: 'Login Success',
        description: 'Login Berhasil',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
      router.push('/');
    } catch (error: any) {
      toast({
        title: `Error ${error.response.status}`,
        description: `Password yang anda masukan salah atau mungkin tidak terdaftar`,
        status: 'error',
        isClosable: true,
      });
    }
  };
  return (
    <div className="login-container">
      <div className="text-hero">
        <h1>
          <span className="underline">Sign</span>In to Learn <br />
          How to <span className="underline">Plant</span>
        </h1>
        <p>
          When you are attracted by a plant grown by yourself, happiness is
          priceless.
        </p>
        <div className="link">
          If you have no account please <br />
          <Link href="/signup">
            <a>register new account</a>
          </Link>
        </div>
      </div>
      <div className="form">
        <form onSubmit={onSubmitHandler}>
          <Input
            value={email}
            changeInput={(e) => setEmail(e.target.value)}
            name="email"
            id="email"
            field="Email"
            type="email"
          />
          <Input
            value={password}
            changeInput={(e) => setPassword(e.target.value)}
            name="password"
            id="password"
            field="Password"
            type="password"
          />
          <button className="btn secondary">Sign In</button>
        </form>
        <p className="text-or">or continue with </p>
        <Button value="Sign In With Google" assets="google.svg" />
        <Button value="Sign In With Facebook" assets="fb.svg" />
      </div>
    </div>
  );
}
