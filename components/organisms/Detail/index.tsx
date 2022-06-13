import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { getDetailPlant } from '../../../services/plant-list';
import Footer from '../Footer';
import Navbar from '../Navbar';
import DetailInformation from './DetailInformation';
import FormPayment from './FormPayment';
import Header from './Header';
import Ingredients from './Ingredients';
import Tools from './Tools';

export default function DetailComponent() {
  const { query, isReady } = useRouter();
  const router = useRouter();
  const [dataItem, setDataItem] = useState({
    id: '',
    plantName: '',
    imageCover: '',
    description: '',
    reviews: '',
    price: 0,
    imageGallery: [],
    ratingsQuantity: 0,
    type: [],
    difficulty: '',
  });

  const getPlantDetailAPI = useCallback(
    async (id: string) => {
      try {
        const data = await getDetailPlant(id);
        setDataItem(data);
      } catch (error) {
        console.log(error);
        router.push('/404');
      }
    },
    [router]
  );

  useEffect(() => {
    getPlantDetailAPI(String(query.id));
  }, [getPlantDetailAPI, isReady, query.id]);

  return (
    <>
      <Navbar />
      <div className="detail-container">
        <Header
          difficulty={dataItem.difficulty}
          itemType={dataItem.type}
          itemName={dataItem.plantName}
          itemStar={dataItem.ratingsQuantity}
          imgUrl={dataItem.imageCover}
        />
        <div className="detail-content">
          <DetailInformation description={dataItem.description} />
          <div className="detail-transaction">
            <FormPayment pricePlants={dataItem.price} />
            <Ingredients />
            <Tools />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
