import { Container, Spinner, useInterval } from '@chakra-ui/react';
import { useState } from 'react';
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
            color="green.500"
            size="xl"
            style={{ margin: '50%' }}
          />
        </Container>
      ) : (
        <DetailComponent />
      )}
    </>
  );
}
