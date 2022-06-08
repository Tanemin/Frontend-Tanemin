import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react';
import React, { useState } from 'react';
interface FormPaymentProps {
  pricePlants: number;
}

export default function FormPayment(props: FormPaymentProps) {
  const { pricePlants } = props;
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 10,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();
  return (
    <>
      <form action="">
        <h3>Buy this Plant</h3>
        <p className="price">{pricePlants * input.value}</p>
        <p className="label">Buy and Improve your Plants</p>
        <div className="detail-button">
          <HStack maxW="200px">
            <AddIcon {...inc}></AddIcon>
            <Input style={{ textAlign: 'center' }} {...input} />
            <MinusIcon {...dec}></MinusIcon>
          </HStack>
          <button>Buy Plant</button>
          <button>Add to Cart</button>
        </div>
      </form>
    </>
  );
}
