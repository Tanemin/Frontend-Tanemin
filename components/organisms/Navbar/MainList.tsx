import { Avatar, Button, Center, Link, Stack, VStack } from '@chakra-ui/react';
import React from 'react';

export default function MainList() {
  return (
    <>
      <Center>
        <VStack spacing={4}>
          <Avatar
            name="Dan Abrahmov"
            size={'xl'}
            src="https://bit.ly/dan-abramov"
          />
          <Link
            color={'green.900'}
            fontWeight={'bold'}
            fontSize={'lg'}
            href="/member"
          >
            Profile
          </Link>
          <Link href="/instructor">Instructor</Link>
          <Link href="/category">Category</Link>
          <Stack spacing={4} direction="row" align="center">
            <Button colorScheme="teal" size="md">
              SignIn
            </Button>
            <Button colorScheme="teal" variant={'outline'} size="md">
              LogIn
            </Button>
          </Stack>
        </VStack>
      </Center>
    </>
  );
}
