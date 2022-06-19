import React from 'react';
import Bill from '../components/atoms/card';
import { Button, Heading, Center, Box} from '@chakra-ui/react'

export default function Checkout() {
  return (
    <Box maxW='sm' borderWidth='2px' borderRadius='lg' padding={20}>
       <Heading> <Center> Checkout </Center> </Heading> <br/>
        <form className="form" method="POST">
          <div>
          <Heading as='h2' size='sm'>
            Address
          </Heading>
            <Box bg='green.400' w='100%' borderRadius='lg' p={4} color='white'>
                Adam Johnson<br />
                403 Oakland Ave Street, A city, Florida, 32104, <br/>
                United States of America
            </Box>
          </div>
            <Bill />
            <Button colorScheme='green'>Buy Now</Button>
        </form>
      </Box>
  )
}
