import React from 'react';
import Header from '../../components/organisms/Detail/Header';
import DetailInformation from '../../components/organisms/Detail/DetailInformation';
import FormPayment from '../../components/organisms/Detail/FormPayment';
import Ingredients from '../../components/organisms/Detail/Ingredients';
import Tools from '../../components/organisms/Detail/Tools';

export default function detail() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="detail-container">
        <Header />
        <div className="detail-content">
          <DetailInformation />
          <div className="detail-transaction">
            <FormPayment />
            <Ingredients />
            <Tools />
          </div>
        </div>
      </div>
    </>
  );
}
