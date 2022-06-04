import React from 'react';
import Navbar from '../components/organisms/Navbar';
import CardContainer from '../components/molecules/CardContainer';

export default function Category() {
  return (
    <>
      <Navbar />
      <main>
        <header className="heading">
          <h1 className="title">Beverages Recommendations</h1>
          <h3 className="description">Available 12,309 course</h3>

          <div className="searchbar">
            <input type="text" placeholder="Search by name or receipt" />
            <i className="fa fa-search" aria-hidden="true"></i>
          </div>
        </header>

        <div className="content-container">
          <CardContainer plantName="Kaktus Keren" author="SehatPedia" />
          <CardContainer plantName="Kaktus Keren" author="SehatPedia" />
          <CardContainer plantName="Kaktus Keren" author="SehatPedia" />
          <CardContainer plantName="Kaktus Keren" author="SehatPedia" />
          <CardContainer plantName="Kaktus Keren" author="SehatPedia" />
          <CardContainer plantName="Kaktus Keren" author="SehatPedia" />
        </div>

        <div className="pagination">
          <div className="page_button">1</div>
          <div className="page_button">2</div>
          <div className="page_button">3</div>
          <div className="page_button">...</div>
          <div className="page_button">90</div>
        </div>
      </main>
    </>
  );
}
