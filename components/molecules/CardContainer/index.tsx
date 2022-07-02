import { CloseButton, Image, useToast } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import NumberFormat from 'react-number-format';
import { deleteCartById } from '../../../services/store';

interface CardData {
  imageUrl?: string;
  plantName: string;
  author: string;
  href: string;
  price?: string;
  isDeleted?: boolean;
  idCart?: string;
}

export default function CardContainer(props: CardData) {
  const toast = useToast();
  const route = useRouter();
  const {
    imageUrl = '/assets/content-img.jpg',
    plantName,
    price,
    href,
    isDeleted,
    idCart,
  } = props;

  const deleteCartHandler = async () => {
    if (idCart) {
      try {
        await deleteCartById(idCart);
        toast({
          title: 'Berhasil',
          description: 'Keranjang berhasil dihapus',
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
        route.reload();
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <Link href={href} passHref>
      <div className="card-content hover-pointer">
        {isDeleted && (
          <CloseButton onClick={deleteCartHandler} alignSelf="flex-end" />
        )}
        <div className="card-content__image">
          <Image
            src={imageUrl}
            fallbackSrc="https://via.placeholder.com/150"
            alt="Plants Category"
          />
        </div>

        <div className="card-content__info">
          <p className="food-name">{plantName}</p>
          <a className="food-author">
            <NumberFormat
              value={price}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'Rp. '}
            />
          </a>
          <div className="star-container"></div>
        </div>
      </div>
    </Link>
  );
}
