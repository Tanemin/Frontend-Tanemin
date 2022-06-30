import { Fragment, useCallback, useEffect, useState } from 'react';
import {
  chakra,
  Stack,
  Text,
  useColorModeValue,
  Flex,
  Image,
} from '@chakra-ui/react';
import { currentWeather } from '../../../services/weather';

// Here we have used react-icons package for the icons

const MemberHero = () => {
  const [weatherData, setWeatherData] = useState({
    time: 0,
    temperature: 0,
    icon: '',
  });

  const getWeatherAPI = useCallback(async () => {
    try {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const data = { lat, lng };
        const weather = await currentWeather(data);

        setWeatherData(weather.data);
        console.log(weather);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getWeatherAPI();
  }, [getWeatherAPI]);

  const newLocal = +weatherData.temperature - 32;
  const features = [
    {
      title: 'Tanggal',
      icon: `${new Date(weatherData.time * 1000).getDate()}`,
    },
    {
      title: 'Temperature',
      icon: `${((5 / 9) * +newLocal).toFixed()}c`,
    },
  ];
  return (
    <Fragment>
      <Stack direction={{ base: 'column', md: 'row' }} py={14}>
        <Stack direction="column" spacing={10} justifyContent="center">
          <chakra.h1
            fontSize="5xl"
            lineHeight={1}
            fontWeight="bold"
            textAlign="left"
          >
            <chakra.span bgColor="teal" bgClip="text">
              Mari bertanam
            </chakra.span>
            <br /> Ayo bangkit dari rebahan
          </chakra.h1>
          <Text
            color={useColorModeValue('gray.500', 'gray.400')}
            fontSize="lg"
            textAlign="left"
            fontWeight="400"
            maxW="700px"
          >
            Tanemin membantu anda untuk bangkit dari rebahan, kita cek kondisi
            cuaca hari ini :
          </Text>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={{ base: 5, md: 10 }}
            flexWrap="wrap"
            justifyContent={'flex-start'}
            alignItems={'flex-start'}
          >
            {features.map((feature, index) => (
              <Stack
                key={index}
                direction={{ base: 'row', md: 'column' }}
                spacing={2}
              >
                <Flex
                  key={index}
                  p={6}
                  w="max-content"
                  color="white"
                  bgColor={'teal'}
                  rounded="md"
                >
                  {feature.icon}
                </Flex>
                <Stack direction="column" spacing={2}>
                  <Text fontSize="md" fontWeight="500">
                    {feature.title}
                  </Text>
                </Stack>
              </Stack>
            ))}
            <Image
              src={`/assets/animated/${weatherData.icon}.svg`}
              alt="Weather Icon"
            />
          </Stack>
        </Stack>
      </Stack>
    </Fragment>
  );
};

export default MemberHero;
