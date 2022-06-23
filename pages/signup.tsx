import React, { useState } from 'react';
import Input from '../components/atoms/Input';
import { setSignup } from '../services/auth';
import { useRouter } from 'next/router';
import { useToast, Button } from '@chakra-ui/react';
import { FaGoogle } from 'react-icons/fa';
import {
  Flex,
  Heading,
  Box,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

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
      <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
        <Text as={'span'}>Let's</Text>{' '}
        <Text
          as={'span'}
          position={'relative'}
          _after={{
            content: "''",
            width: 'full',
            height: useBreakpointValue({ base: '20%', md: '30%' }),
            position: 'absolute',
            bottom: 1,
            left: 0,
            bg: 'green.400',
            zIndex: -1,
          }}
        >
          Start New
        </Text>{' '}
        <Text as={'span'}>Journey</Text>{' '}
      </Heading>{' '}
      <br />
      <form className="regis">
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
        <Button
          onClick={onSubmit}
          colorScheme="green"
          size="md"
          width={314}
          height={50}
        >
          SignUp
        </Button>
        <br />
        <p className="text-or2">or continue with </p> <br />
        <Button
          colorScheme="gray"
          size="md"
          width={314}
          height={50}
          leftIcon={<FaGoogle />}
        >
          SignUp with Google
        </Button>
      </form>
    </div>
  );
}
