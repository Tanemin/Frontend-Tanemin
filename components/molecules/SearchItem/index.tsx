/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {
  Container,
  Box,
  HStack,
  VStack,
  Stack,
  Link,
  Tag,
  useColorModeValue,
} from '@chakra-ui/react';

interface SearchItemProps {
  plants: any;
}

export default function SearchItem(props: SearchItemProps) {
  const { plants } = props;
  return (
    <>
      {' '}
      <Container p={{ base: 5, md: 10 }}>
        <VStack spacing={8} w={{ base: 'auto', md: 'md' }}>
          {plants.map((plant, index) => (
            <Stack
              width={'100%'}
              key={index}
              direction="column"
              spacing={4}
              p={4}
              bg={useColorModeValue('gray.100', 'gray.800')}
              border="1px solid"
              borderColor="blue.100"
              _hover={{
                borderColor: 'blue.300',
                boxShadow: useColorModeValue(
                  '0 4px 6px rgba(160, 174, 192, 0.6)',
                  '0 4px 6px rgba(9, 17, 28, 0.9)'
                ),
              }}
              rounded="lg"
            >
              <HStack spacing={2} mb={1}>
                {/* {article.tags.map((cat, index) => (
                  <Tag
                    key={index}
                    colorScheme={useColorModeValue('blackAlpha', 'gray')}
                    borderRadius="full"
                  >
                    {cat}
                  </Tag>
                ))} */}
              </HStack>
              <Box textAlign="left">
                <Link
                  href={`/detail/${plant.id}`}
                  fontSize="xl"
                  lineHeight={1.2}
                  fontWeight="bold"
                  w="100%"
                  _hover={{ color: 'blue.400', textDecoration: 'underline' }}
                >
                  {plant.plantName}
                </Link>
              </Box>
            </Stack>
          ))}
        </VStack>
      </Container>
    </>
  );
}
