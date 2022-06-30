import { TimeIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Image,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

export default function Duration() {
  return (
    <>
      <div className="tools">
        <h3>Durasi</h3>
        <Box className="transaction-additional">
          <Stat
            px={{ base: 2, md: 4 }}
            py={'5'}
            shadow={'xl'}
            border={'1px solid'}
            borderColor={useColorModeValue('gray.800', 'gray.500')}
            rounded={'lg'}
          >
            <Flex justifyContent={'space-between'}>
              <Box pl={{ base: 2, md: 4 }}>
                <StatLabel fontWeight={'medium'}>Durasi</StatLabel>
                <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                  60 Hari
                </StatNumber>
              </Box>
              <Box
                my={'auto'}
                color={useColorModeValue('gray.800', 'gray.200')}
                alignContent={'center'}
              >
                <TimeIcon />
              </Box>
            </Flex>
          </Stat>
        </Box>
      </div>
    </>
  );
}
