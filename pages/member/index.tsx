import { SimpleGrid } from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react';
import { StatsCard } from '../../components/molecules/Statistics';
import SimpleSidebar from '../../components/organisms/Layout/Sidebar';
import MemberHero from '../../components/organisms/MemberHero';
import { getUserData } from '../../services/auth';

export default function Index() {
  const [currentUser, setCurrentUser] = useState({
    fullname: '',
    carts: [],
    transactions: [],
  });
  const getUserListItem = useCallback(async () => {
    try {
      const data = await getUserData();
      setCurrentUser(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getUserListItem();
  }, [getUserListItem]);
  return (
    <>
      <SimpleSidebar>
        <MemberHero />
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard title={'Nama'} stat={currentUser.fullname} />
          <StatsCard
            title={'Jumlah tanaman'}
            stat={`${currentUser.carts.length} Keranjang`}
          />
          <StatsCard
            title={'Jumlah Transaksi'}
            stat={`${currentUser.transactions.length} Transaksi`}
          />
        </SimpleGrid>
      </SimpleSidebar>
    </>
  );
}

interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
}

export async function getServerSideProps({ req }: GetServerSideProps) {
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    };
  }
  return { props: { title: 'Dashboard', content: '...' } };
}
