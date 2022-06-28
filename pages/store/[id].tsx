import { StarIcon } from '@chakra-ui/icons';
import { Image } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import CardContainer from '../../components/molecules/CardContainer';
import Footer from '../../components/organisms/Footer';
import Navbar from '../../components/organisms/Navbar';
import { PlantTypes } from '../../services/data-types';
import { getDetailStore } from '../../services/store';

export default function Store() {
  const { query, isReady } = useRouter();
  const router = useRouter();
  const [dataItem, setDataItem] = useState({
    id: '',
    storeName: '',
    imageCover: '',
    description: '',
    reviews: [],
    price: 0,
    imageGalery: [],
    ratingsQuantity: 0,
    type: [],
    difficulty: '',
    season: [],
    viewCount: 0,
    sold: 0,
    stock: 0,
    plants: [],
    ratingStore: 0,
  });

  console.log(dataItem);

  const getPlantDetailAPI = useCallback(async (id: string) => {
    try {
      const data = await getDetailStore(id);
      setDataItem(data);
    } catch (error) {
      console.log(error);
      // router.push('/404');
    }
  }, []);

  useEffect(() => {
    getPlantDetailAPI(String(query.id));
  }, [getPlantDetailAPI, isReady, query.id]);
  return (
    <>
      <Navbar />
      <div className="instructor-container">
        <div className="profile">
          <div className="profile-image">
            <Image src={`/assets/${dataItem.imageCover}`} alt="profile-image" />
          </div>
          <div className="profile-info">
            <h1>{dataItem.storeName}</h1>
            <p>Farmer</p>
            <p className="item-review">
              {Array(5)
                .fill('')
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < dataItem.ratingStore ? 'yellow.400' : 'gray.300'}
                  />
                ))}
            </p>
          </div>
        </div>
        {/* <div className="operations">
          <TabListComponent />
        </div> */}
        <div className="content-container">
          {dataItem.plants.map((item: PlantTypes) => {
            return (
              <CardContainer
                key={item.id}
                plantName={item.plantName}
                author="SehatPedia"
                imageUrl={item.imageCover}
                href={`/detail/${item.id}`}
              />
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
}
