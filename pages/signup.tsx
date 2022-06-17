import React, { useState } from 'react';
import Input from '../components/atoms/Input';
import { setSignup } from '../services/auth';
import { useRouter } from 'next/router';
import { useToast, Button } from '@chakra-ui/react';
import { FaFacebook, FaGoogle } from "react-icons/fa";

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();

  const router = useRouter();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      fullname: name,
      email,
      password,
    };

    try {
      await setSignup(data);
      toast({
        title: 'Signup Success',
        description: 'Akun berhasil dibuat',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
      router.push('/success');
    } catch (error: any) {
      console.log(error);
      toast({
        title: 'Signup Error',
        description: `${error.response.data.message}`,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <div className="register">
      <h1>
        Lets <span className="underline">Start New</span> Journey
      </h1>
      <form action="" onSubmit={onSubmit} className="regis">
        <Input
          name="fullname"
          field="Full Name"
          id="fullname"
          type="text"
          value={name}
          changeInput={(e: any) => setName(e.target.value)}
        />
        <Input
          name="email"
          field="Email"
          id="email"
          type="email"
          value={email}
          changeInput={(e: any) => setEmail(e.target.value)}
        />
        <Input
          name="password"
          field="Password"
          id="password"
          type="password"
          value={password}
          changeInput={(e: any) => setPassword(e.target.value)}
        />
        <button className="secondary">Sign Up</button>{' '}
      </form>
      <p className="text-or2">or continue with </p>
      <Button 
        colorScheme='twitter' 
        size='md'
        width={314}
        height={50} 
        leftIcon={< FaGoogle />}>
        SignUp with Google
      </Button> <br />
      <Button 
        colorScheme='facebook'
        size='md'
        width={314}
        height={50} 
        leftIcon={<FaFacebook />}>
        SignUp with Facebook
      </Button>
    </div>
  );
}
