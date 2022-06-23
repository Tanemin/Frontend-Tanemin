import { useToast, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Input from '../components/atoms/Input';
import { setLogin } from '../services/auth';
import { FaGoogle } from 'react-icons/fa';
import {
  Flex,
  Heading,
  Box,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

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
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
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
              Sign
            </Text>{' '}
            <Text as={'span'}>
              In to Learn <br />
            </Text>{' '}
            <Text as={'span'}>How to</Text>{' '}
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
              Plan
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            When you are attracted by a plant grown by yourself, happiness is
            priceless. <br />
            If you have no account please <br />
            <Box as="a" color="green.400" href="/signup" fontWeight="bold">
              register new account
            </Box>
          </Text>
        </Stack>
      </Flex>
      <Flex
        flex={1}
        justify={'center'}
        align={'center'}
        position={'relative'}
        w={'full'}
      >
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
          <Button
            onClick={onSubmitHandler}
            colorScheme="green"
            size="md"
            width={314}
            height={50}
          >
            SignIn
          </Button>
          <br />
          <p className="text-or">or continue with </p> <br />
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
      </Flex>
    </Stack>
  );
}
