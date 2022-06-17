import {
  Button,
  Center,
  HStack,
  Input,
  useNumberInput,
  VStack,
} from '@chakra-ui/react';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import PaymentConfirm from '../../atoms/Modal';
interface FormPaymentProps {
  pricePlants: number;
  plantName: string;
}

export default function FormPayment(props: FormPaymentProps) {
  const { pricePlants, plantName } = props;
  const [isDisabled, setIsDisabled] = useState(true);

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

  useEffect(() => {
    if (Cookies && Cookies.get('token')) {
      setIsDisabled(false);
    }
  }, []);

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
          <PaymentConfirm
            total={pricePlants}
            plantName={plantName}
            value={value}
            isDisabled={isDisabled}
          />
          <Button disabled={isDisabled}>Add to Cart</Button>
        </VStack>
      </form>
    </>
  );
}
