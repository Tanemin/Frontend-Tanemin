import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';

interface StatsCardProps {
  title: string;
  stat: string;
}
export function StatsCard(props: StatsCardProps) {
  const { title, stat } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={'5'}
      shadow={'md'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.500', 'gray.200')}
      rounded={'lg'}
    >
      <StatLabel fontWeight={'hairline'}>{title}</StatLabel>
      <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
        {stat}
      </StatNumber>
    </Stat>
  );
}

export default function Statistics() {
  return (
    <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={'center'}
        fontSize={'3xl'}
        py={10}
        fontWeight={'bold'}
      >
        Statistik
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard title={'Menanam'} stat={'20.000 Pohon'} />
        <StatsCard title={'Berlokasi'} stat={'10 Kota Besar Indonesia'} />
        <StatsCard title={'Pengguna'} stat={'10000 Pengguna Aktif'} />
      </SimpleGrid>
    </Box>
  );
}
