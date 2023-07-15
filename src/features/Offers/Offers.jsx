import './offers.css';
import {
  MdBathtub,
  MdKingBed,
  MdAirportShuttle,
  MdLocationOn,
} from 'react-icons/md';
import { FaWifi } from 'react-icons/fa6';
import { BsArrowRightShort } from 'react-icons/bs';

import img1 from '../../assets/offer1.jpeg';
import img2 from '../../assets/offer2.jpeg';
import img3 from '../../assets/offer3.jpeg';
import img4 from '../../assets/offer4.jpeg';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const DATA_AMENTITIES = [
  {
    icon: <MdKingBed className='icon' />,
    small: '2 Beds',
  },

  {
    icon: <MdBathtub className='icon' />,
    small: '1 Bath',
  },
  {
    icon: <FaWifi className='icon' />,
    small: 'Wifi',
  },
  {
    icon: <MdAirportShuttle className='icon' />,
    small: 'Shuttle',
  },
];

const DATA_OFFERS = [
  {
    imgSrc: img1,
    price: 1000,
    discount: 30,
    forRent: 'For Rent',
    location: '123 Hoang Sa, VietNam',
  },
  {
    imgSrc: img2,
    price: 2000,
    discount: 10,
    forRent: 'Sale',
    location: '123 Da Nang, VietNam',
  },
  {
    imgSrc: img3,
    price: 3000,
    discount: 20,
    forRent: 'For Rent',
    location: '123 Ha Noi, VietNam',
  },
  {
    imgSrc: img4,
    price: 1500,
    discount: 15,
    forRent: 'For Rent',
    location: '123 Hau Giang, VietNam',
  },
];
function Offers() {
  const singleAmenity = DATA_AMENTITIES.map((amen, index) => (
    <div className='singleAmenity flex' key={index}>
      {amen.icon}
      <small>{amen.small}</small>
    </div>
  ));
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section className='offer container section'>
        <div className='secContainer'>
          <div className='secIntro' data-aos='fade-up' data-aos-duration='2500'>
            <h2 className='secTitle title'>special offer</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
              odit dicta dolorem, laborum, magni eum rem tempore doloremque
              repellat quibusdam natus cupiditate quam aliquam quod deserunt
              quaerat laboriosam. Dolores, ipsa!
            </p>
          </div>

          <div className='mainContent grid'>
            {DATA_OFFERS.map((offer, index) => (
              <div
                className='singleOffer'
                data-aos='fade-up'
                data-aos-duration='3000'
                key={index}
              >
                <div className='destImg'>
                  <img src={offer.imgSrc} alt='' />
                  <span className='discount'>{offer.discount}% offer</span>
                </div>

                <div className='offerBody'>
                  <div className='price flex'>
                    <h4>${offer.price}</h4>
                    <span className='status'>{offer.forRent}</span>
                  </div>

                  <div className='amenities flex'>{singleAmenity}</div>

                  <div className='location flex'>
                    <MdLocationOn className='icon' />
                    <small>{offer.location}</small>
                  </div>

                  <button className='btn btn--submit flex'>
                    View Details
                    <BsArrowRightShort className='icon' />
                  </button>
                </div>
              </div>
            ))}
            {/*  */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Offers;
