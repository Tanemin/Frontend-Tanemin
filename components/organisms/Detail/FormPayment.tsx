import {
  Button,
  Center,
  Container,
  HStack,
  Input,
  useNumberInput,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
interface FormPaymentProps {
  pricePlants: number;
}

export default function FormPayment(props: FormPaymentProps) {
  const { pricePlants } = props;

  const {
    value,
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
  } = useNumberInput({
    step: 1,
    defaultValue: 1,
    min: 1,
  });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <>
      <form action="">
        <h3>Buy this Plant</h3>
        <p className="price">
          <NumberFormat
            value={pricePlants * +value}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'Rp. '}
          />
        </p>
        <p className="label">Buy and Improve your Plants</p>
        <VStack spacing={'4'}>
          <Center>
            <HStack>
              <Button colorScheme={'green'} {...inc}>
                +
              </Button>
              <Input textAlign={'center'} {...input} />
              <Button colorScheme={'red'} {...dec}>
                -
              </Button>
            </HStack>
          </Center>
          <Button colorScheme={'orange'}>Buy Plant</Button>
          <Button>Add to Cart</Button>
        </VStack>
      </form>
    </>
  );
}
