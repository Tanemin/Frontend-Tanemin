import { Flex, Stack, Text } from '@chakra-ui/react';
import React from 'react';

export default function WeatherInfo() {
  return (
    <>
      <Stack direction={{ base: 'row', md: 'column' }} spacing={2}>
        <Flex
          p={3}
          maxH="52px"
          w="max-content"
          color="white"
          bgGradient="linear(to-br, #228be6, #15aabf)"
          rounded="md"
        ></Flex>
        <Stack direction="column" spacing={2}>
          <Text fontSize="md" fontWeight="500">
            {/* {feature.summary} */}
            Test
          </Text>
          <Text
            fontSize="sm"
            color="gray.400"
            maxW={{ base: '100%', md: '200px' }}
          >
            {/* {feature.detail} */}
            HALO
          </Text>
        </Stack>
      </Stack>
    </>
  );
}
