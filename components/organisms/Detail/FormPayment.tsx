import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { Box, HStack, useControllableState } from '@chakra-ui/react';
import React from 'react';
interface FormPaymentProps {
  pricePlants: number;
}

export default function FormPayment(props: FormPaymentProps) {
  const { pricePlants } = props;
  const [value, setValue] = useControllableState({ defaultValue: 1 });

  return (
    <>
      <form action="">
        <h3>Buy this Plant</h3>
        <p className="price">{pricePlants * +value}</p>
        <p className="label">Buy and Improve your Plants</p>
        <div className="detail-button">
          <HStack maxW="200px">
            <AddIcon onClick={() => setValue(value + 1)} />{' '}
            <Box as="span" w="200px" mx="24px">
              {value}
            </Box>
            <MinusIcon onClick={() => setValue(value - 1)} />
          </HStack>
          <button>Buy Plant</button>
          <button>Add to Cart</button>
        </div>
      </form>
    </>
  );
}
