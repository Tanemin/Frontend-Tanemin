import type { NextPage } from 'next';
import Image from 'next/image';
import { StarSharp } from 'react-ionicons';

const Home: NextPage = () => {
  return (
    <>
      <section className="landing_section">
        <div className="landing_information">
          <h1 className="landing_title">
            Eat What You Cook With Us, Together!
          </h1>
          <p className="landing_description">
            When you eat something that cooked by yourself, the happiness is
            priceless.
          </p>
          <button className="landing_button">Decide a Menu</button>
        </div>
        <div className="landing_image">
          <Image src="/assets/mainPict.png" alt="" width={625} height={405} />
          <Image
            className="play_button"
            src="/assets/playButton.svg"
            alt=""
            width={70}
            height={70}
          />
        </div>
      </section>

      <section className="featured">
        <p className="featured_description">Watch Now</p>
        <h2 className="featured_title">Special to Try</h2>
        <nav className="featured_nav">
          <li>Healty Food</li>
          <li>Lunch</li>
          <li>Vege Desert</li>
          <li>Shake</li>
        </nav>
        <div className="item_list">
          <div className="card">
            <Image
              className="card_image"
              src="/assets/pic.svg"
              alt=""
              width={626}
              height={405}
            />
            <h3 className="card_title">Avocado Muscle</h3>
            <p className="card_description">John Lennonk</p>
            <div className="review-content-star">
              <StarSharp color={'#F7C531'} height="22px" width="22px" />
              <StarSharp color={'#F7C531'} height="22px" width="22px" />
              <StarSharp color={'#F7C531'} height="22px" width="22px" />
              <StarSharp color={'#F7C531'} height="22px" width="22px" />
              <StarSharp color={'#F7C531'} height="22px" width="22px" />
            </div>
          </div>
          <div className="card">
            <Image
              className="card_image"
              src="/assets/pic.svg"
              alt=""
              width={70}
              height={70}
            />
            <h3 className="card_title">Avocado Muscle</h3>
            <p className="card_description">John Lennonk</p>
            <div className="review-content-star">
              <StarSharp color={'#F7C531'} height="22px" width="22px" />
              <StarSharp color={'#F7C531'} height="22px" width="22px" />
              <StarSharp color={'#F7C531'} height="22px" width="22px" />
              <StarSharp color={'#F7C531'} height="22px" width="22px" />
              <StarSharp color={'#F7C531'} height="22px" width="22px" />
            </div>
          </div>
          <div className="card">
            <Image
              className="card_image"
              src="/assets/pic.svg"
              alt=""
              width={70}
              height={70}
            />
            <h3 className="card_title">Avocado Muscle</h3>
            <p className="card_description">John Lennonk</p>
            <div className="review-content-star">
              <StarSharp color={'#F7C531'} height="22px" width="22px" />
              <StarSharp color={'#F7C531'} height="22px" width="22px" />
              <StarSharp color={'#F7C531'} height="22px" width="22px" />
              <StarSharp color={'#F7C531'} height="22px" width="22px" />
              <StarSharp color={'#F7C531'} height="22px" width="22px" />
            </div>
          </div>
          <div className="card">
            <Image
              className="card_image"
              src="/assets/pic.svg"
              alt=""
              width={70}
              height={70}
            />
            <h3 className="card_title">Avocado Muscle</h3>
            <p className="card_description">John Lennonk</p>
            <div className="review-content-star">
              <StarSharp color={'#F7C531'} height="22px" width="22px" />
              <StarSharp color={'#F7C531'} height="22px" width="22px" />
              <StarSharp color={'#F7C531'} height="22px" width="22px" />
              <StarSharp color={'#F7C531'} height="22px" width="22px" />
              <StarSharp color={'#F7C531'} height="22px" width="22px" />
            </div>
          </div>
        </div>
      </section>

      <section className="testimoni">
        <p className="testimoni_text">
          Awalnya saya malu dengan mertua karena tidak bisa memasak, kini mereka
          lebih suka makan malam di rumah demi menyantap masakan yang saya buat
          sendiri
        </p>
        <div className="testimoni_detail">
          <Image src="/assets/testiPict.svg" alt="" width={70} height={70} />
          <div className="testimoni_person">
            <p className="testimoni_name">Camella Sarrah</p>
            <p className="testimoni_title">Vege Master</p>
          </div>
        </div>
      </section>

      <section className="data_list">
        <div className="data_item">
          <p className="data_value">180.000+</p>
          <p className="data_label">MENU FOOD</p>
        </div>
        <div className="data_item">
          <p className="data_value">20.000+</p>
          <p className="data_label">CHEFS</p>
        </div>
        <div className="data_item">
          <p className="data_value">400.000+</p>
          <p className="data_label">COURSE</p>
        </div>
        <div className="data_item">
          <p className="data_value">6.900.000</p>
          <p className="data_label">ALUMNI</p>
        </div>
      </section>

      <section className="download">
        <Image src="/assets/downloadPict.svg" alt="" width={70} height={70} />
        <div className="download_detail">
          <p className="download_text">Download our app and join the contest</p>
          <p className="download_text2">
            In order to improve our cooking skills, we do need a food
            photography
          </p>
          <div className="download_button_list">
            <Image
              className="download_button"
              src="/assets/appStoreDownload.svg"
              width={70}
              height={70}
              alt=""
            />
            <Image
              className="download_button"
              src="/assets/googlePlayDownload.svg"
              width={70}
              height={70}
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
