import { Button, useToast } from '@chakra-ui/react';
import React from 'react';
import { FaGoogle } from 'react-icons/fa';

export default function SignGoogle() {
  const toast = useToast();
  return (
    <>
      <Button
        colorScheme="gray"
        size="md"
        width={314}
        height={50}
        leftIcon={<FaGoogle />}
        onClick={() => {
          toast({
            title: `Error `,
            description: `Fitur masih dalam tahap pengembangan`,
            status: 'error',
            isClosable: true,
          });
        }}
      >
        SignUp with Google
      </Button>
    </>
  );
}
