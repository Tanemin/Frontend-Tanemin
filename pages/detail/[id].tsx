import { Container, Skeleton, Spinner, useInterval } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import DetailComponent from '../../components/organisms/Detail';

export default function Detail() {
  const [isLoading, setIsLoading] = useState(true);

  useInterval(() => {
    setIsLoading(false);
  }, 1000);

  return (
    <>
      {isLoading ? (
        <Container centerContent>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Container>
      ) : (
        <DetailComponent />
      )}
    </>
  );
}
