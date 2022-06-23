import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';

import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useRouter } from 'next/router';

import NumberFormat from 'react-number-format';
import { createTransaction } from '../../../services/transaction';

interface PaymentConfirmProps {
  total: number;
  value: string;
  plantName: string;
  isDisabled: boolean;
}

export default function PaymentConfirm(props: PaymentConfirmProps) {
  const stripe = useStripe();
  const elements = useElements();
  const toast = useToast();
  const route = useRouter();
  const { total, value, plantName, isDisabled } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: total * +value }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    const cardElement = elements.getElement(CardElement);
    if (cardElement) {
      const paymentResult = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: 'Kurniawan',
          },
        },
      });

      if (paymentResult.error) {
        toast({
          title: 'Payment Error.',
          description: `${paymentResult.error}`,
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      } else {
        if (paymentResult.paymentIntent.status === 'succeeded') {
          toast({
            title: 'Pembayaran Berhasil.',
            description: 'Selamat Pembayaran anda berhasil',
            status: 'success',
            duration: 9000,
            isClosable: true,
          });
          createTransaction({
            ammount: +value,
            id: `${route.query.id}`,
          });
          route.push('/completed');
        }
      }
    }
  };

  return (
    <>
      <Button onClick={onOpen} disabled={isDisabled} colorScheme={'orange'}>
        Buy Plant
      </Button>

      <Modal isOpen={isOpen} size="lg" onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader margin={'2'}>Bayar Tanaman</ModalHeader>

          <ModalBody>
            <Box marginBottom={'10'}>
              <Text fontWeight={'medium'} fontSize={'md'}>
                Nama Tanaman : {plantName}
              </Text>
              <Text fontWeight={'medium'} fontSize={'md'}>
                Quantity : {value}
              </Text>
              <Text fontWeight={'medium'} fontSize={'md'}>
                Total : {''}
                <NumberFormat
                  value={total * +value}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'Rp. '}
                />
              </Text>
            </Box>
            <Box border={'1'}>
              <CardElement />
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="orange"
              onClick={handleSubmit}
              disabled={!stripe}
              mr={3}
            >
              Bayar
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
