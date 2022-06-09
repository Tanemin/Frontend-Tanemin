import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import Header from '../../components/organisms/Detail/Header';
import DetailInformation from '../../components/organisms/Detail/DetailInformation';
import FormPayment from '../../components/organisms/Detail/FormPayment';
import Ingredients from '../../components/organisms/Detail/Ingredients';
import Tools from '../../components/organisms/Detail/Tools';
import { getDetailPlant } from '../../services/plant-list';

export default function Detail() {
  const { query, isReady } = useRouter();
  const [dataItem, setDataItem] = useState({
    plantName: '',
    imageCover: '',
    description: '',
    reviews: '',
    price: 0,
  });

  const getPlantDetailAPI = useCallback(async (id: string) => {
    try {
      const data = await getDetailPlant(id);
      setDataItem(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getPlantDetailAPI(String(query.id));
  }, [getPlantDetailAPI, isReady, query.id]);

  return (
    <>
      {/* <Navbar /> */}
      <div className="detail-container">
        <Header itemName={dataItem.plantName} imgUrl={dataItem.imageCover} />
        <div className="detail-content">
          <DetailInformation description={dataItem.description} />
          <div className="detail-transaction">
            <FormPayment pricePlants={dataItem.price} />
            <Ingredients />
            <Tools />
          </div>
        </div>
      </div>
    </>
  );
}
