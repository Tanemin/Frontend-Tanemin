import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { getDetailPlant } from '../../../services/plant-list';
import Footer from '../Footer';
import Navbar from '../Navbar';
import DetailInformation from './DetailInformation';
import FormPayment from './FormPayment';
import Header from './Header';
import Duration from './Duration';
import Seasons from './Seasons';

export default function DetailComponent() {
  const { query, isReady } = useRouter();
  const router = useRouter();
  const [dataItem, setDataItem] = useState({
    id: '',
    plantName: '',
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
    store: [],
  });

  console.log(dataItem.reviews);

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
          store={dataItem.store}
          difficulty={dataItem.difficulty}
          itemType={dataItem.type}
          itemName={dataItem.plantName}
          itemStar={dataItem.ratingsQuantity}
          imgUrl={dataItem.imageCover}
          viewCount={dataItem.viewCount}
          sold={dataItem.sold}
          stock={dataItem.stock}
        />
        <div className="detail-content">
          <DetailInformation
            imagesSrc={dataItem.imageGalery}
            description={dataItem.description}
            reviews={dataItem.reviews}
          />
          <div className="detail-transaction">
            <FormPayment
              id={dataItem.id}
              plantName={dataItem.plantName}
              pricePlants={dataItem.price}
            />
            <Duration />
            <Seasons seasons={dataItem.season} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
