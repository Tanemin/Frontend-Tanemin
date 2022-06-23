import {
  chakra,
  Stack,
  Flex,
  useColorModeValue,
  Container,
  Link,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icon
import { BsCheck } from 'react-icons/bs';

const data = {
  heading: 'Get this amazing offer today.',
  subHeading: 'Analyze your traffic. Increase Conversions.',
  features: ['Free 3,500 monthly page views', 'No credit card required'],
  image: '/assets/BackgroundCard1.png',
};

const CardCredit = () => {
  return (
    <Flex
      boxShadow={useColorModeValue(
        '0 4px 6px rgba(160, 174, 192, 0.6)',
        '0 4px 6px rgba(9, 17, 28, 0.9)'
      )}
      backgroundSize="cover"
      backgroundImage={`url(${data.image})`}
      p={{ base: 4, sm: 8 }}
      rounded="lg"
    >
      <Stack direction="column" spacing={5} textAlign="left" flexGrow={3}>
        <chakra.h1 fontSize="4xl" lineHeight={1.2} fontWeight="bold">
          {data.heading}
        </chakra.h1>
        <chakra.h1 fontSize="xl" lineHeight={1.2} fontWeight="bold">
          {data.subHeading}
        </chakra.h1>
        <List spacing={3}>
          {data.features.map((feature, index) => (
            <ListItem key={index}>
              <ListIcon as={BsCheck} color="green.700" />
              {feature}
            </ListItem>
          ))}
        </List>
        <Link
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
          fontSize="md"
          fontWeight="500"
          p={3}
          lineHeight={1.2}
          h={10}
          w="max-content"
          rounded="md"
          textDecoration="none"
          color="white"
          bg="blackAlpha.400"
          shadow="lg"
        >
          Click here to proceed
        </Link>
      </Stack>
    </Flex>
  );
};

export default CardCredit;