import './popular.css';
import { BsArrowRightShort, BsArrowLeftShort, BsDot } from 'react-icons/bs';
import imgHanoi from '../../assets/popular-hanoi.jpeg';
import imgPhongNhaKeBang from '../../assets/popular-phongnhakebang.jpeg';
import imgRbt from '../../assets/popular-ruongbacthang.jpeg';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const DATA_DESTINATION = [
  {
    id: '01',
    imgSrc: imgHanoi,
    destination: 'Ha Noi',
    msg: 'Some INFO',
    desciption: 'Lorem is ipsum',
  },
  {
    id: '02',
    imgSrc: imgPhongNhaKeBang,
    destination: 'Phong Nha Ke Bang',
    msg: 'Some INFO',
    desciption: 'Lorem is ipsum',
  },
  {
    id: '03',
    imgSrc: imgRbt,
    destination: 'Ha Giang',
    msg: 'Ruong bac thang',
    desciption: 'Lorem is ipsum',
  },
  {
    id: '04',
    imgSrc: imgRbt,
    destination: 'Ha Giang',
    msg: 'Ruong bac thang',
    desciption: 'Lorem is ipsum',
  },
];

function Popular() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className='popular container '>
      <div className='secContainer'>
        <div className='secHeader flex'>
          <div
            className='textDiv'
            data-aos='fade-right'
            data-aos-duration='2500'
          >
            <h2 className='title'>Popular</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>

          <div
            className='iconsDiv flex'
            data-aos='fade-left'
            data-aos-duration='2500'
          >
            <BsArrowLeftShort className='icon left' />
            <BsArrowRightShort className='icon' />
          </div>
        </div>

        <div
          className='mainContent gird'
          data-aos='fade-up'
          data-aos-duration='3000'
        >
          {DATA_DESTINATION.map((item, index) => (
            <div className='singleDestination' key={index}>
              <div className='destImg'>
                <img src={item.imgSrc} alt='' />

                <div className='overplayInfo'>
                  <h3>{item.msg}</h3>
                  <p>{item.desciption} </p>

                  <BsArrowRightShort className='icon btn' />
                </div>
              </div>

              <div className='destFooter'>
                <div className='number'>{item.id}</div>

                <div className='desText flex'>
                  <h6>{item.destination}</h6>

                  <div className='flex'>
                    <span className='dot'>
                      <BsDot className='icon' />
                    </span>
                    <span>Dot</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Popular;
