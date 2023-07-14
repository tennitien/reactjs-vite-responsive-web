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
  const amenities = DATA_AMENTITIES.map((amen, index) => (
    <div className='amenities__single flex' key={index}>
      {amen.icon}
      <small>{amen.small}</small>
    </div>
  ));

  return (
    <>
      <section className='offer container section'>
        <div className='offer-container'>
          <div className='secIntro'>
            <h2 className='secTitle'>special offer</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
              odit dicta dolorem, laborum, magni eum rem tempore doloremque
              repellat quibusdam natus cupiditate quam aliquam quod deserunt
              quaerat laboriosam. Dolores, ipsa!
            </p>
          </div>

          <div className='offer-main mainContent grid'>
            {/* <div className='offer__single'> */}
            {DATA_OFFERS.map((offer, index) => (
              <div className='offer__single' key={index}>
                <div className='offer__single--des'>
                  <img src={offer.imgSrc} alt='' />
                  <span className='discount'>{offer.discount}% offer</span>
                </div>

                <div className='offer__single--body'>
                  <div className='price flex'>
                    <h4>${offer.price}</h4>
                    <span className='status'>{offer.forRent}</span>
                  </div>

                  <div className='amenities flex'>{amenities}</div>

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
