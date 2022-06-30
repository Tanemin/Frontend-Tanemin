import { StarIcon } from '@chakra-ui/icons';
import {
  Button,
  ModalBody,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Textarea,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  FormLabel,
  SliderMark,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { postReviewPlant } from '../../../services/review';

interface ModalReviewProps {
  _id: string;
}

export default function ModalReview(props: ModalReviewProps) {
  const { _id: id } = props;
  const [review, setreview] = useState('');
  console.log(review);
  const [rating, setRating] = useState(0);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const reviewHandler = async () => {
    const data = { id, review, rating };
    try {
      await postReviewPlant(data);
      toast({
        title: 'Success',
        description: 'Berhasil Menambah Review',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
      onClose();
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
      <Button onClick={onOpen}>Beri Review</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Review</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormLabel>Deskripsi</FormLabel>
            <Textarea
              placeholder="Tulis review kamu"
              onChange={(val) => setreview(val.target.value)}
            />
            <FormLabel>Rating</FormLabel>
            <Slider
              min={1}
              max={5}
              step={1}
              defaultValue={1}
              aria-label="slider-ex-5"
              onChangeEnd={(val) => setRating(val)}
            >
              <SliderMark value={1}>1</SliderMark>
              <SliderMark value={3}>3</SliderMark>
              <SliderMark value={5}>5</SliderMark>
              <SliderTrack>
                <SliderFilledTrack bg={'yellow.500'} />
              </SliderTrack>
              <SliderThumb>
                <StarIcon boxSize={4} color={'yellow.500'} />
              </SliderThumb>
            </Slider>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="orange" mr={3} onClick={reviewHandler}>
              Submit
            </Button>
            <Button onClick={onClose} variant="ghost">
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
