import {
  Button,
  Center,
  HStack,
  Input,
  useNumberInput,
  useToast,
  VStack,
} from '@chakra-ui/react';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import { postCartPlant } from '../../../services/plant-list';
import PaymentConfirm from '../../atoms/Modal';
interface FormPaymentProps {
  pricePlants: number;
  plantName: string;
  id: string;
}

export default function FormPayment(props: FormPaymentProps) {
  const { pricePlants, plantName, id } = props;
  const [isDisabled, setIsDisabled] = useState(true);
  const toast = useToast();

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

  const cartHandler = () => {
    const ammount = +value;
    const data = { id, ammount };
    try {
      postCartPlant(data);
      toast({
        title: 'Success',
        description: 'Berhasil Menambah Cart',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };

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
          <Button disabled={isDisabled} onClick={cartHandler}>
            Add to Cart
          </Button>
        </VStack>
      </form>
    </>
  );
}
