import { Avatar, Center, Link, VStack, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';

export default function MainList() {
  return (
    <>
      <Center>
        <Wrap>
          <WrapItem>
            <Avatar
              name="Dan Abrahmov"
              size={'xl'}
              src="https://bit.ly/dan-abramov"
            />
          </WrapItem>{' '}
        </Wrap>
      </Center>
      <VStack spacing={4}>
        <Link href="/instructor">Instructor</Link>
        <Link href="/category">Category</Link>
        <Link href="/category">Category</Link>
      </VStack>
    </>
  );
}
