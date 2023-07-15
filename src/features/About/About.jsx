import './about.css';
import imgMountain from '../../assets/abou1-mountain.svg';
import imgHiking from '../../assets/abou2-hiking.svg';
import imgAvatar from '../../assets/abou3-avatar.svg';

import video from '../../assets/video.mp4';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const DATA_ABOUT = [
  {
    imgSrc: imgMountain,
    title: '100+ Mountains',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore voluptas voluptatibus doloremque ut cumque maiores ab debitis accusamus modi, magnam, velit, placeat esse porro? Dolor autem adipisci sint obcaecati quas!',
  },
  {
    imgSrc: imgHiking,
    title: '1000+ Hiking',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore voluptas voluptatibus doloremque ut cumque maiores ab debitis accusamus modi, magnam, velit, placeat esse porro? Dolor autem adipisci sint obcaecati quas!',
  },
  {
    imgSrc: imgAvatar,
    title: '1000+ Customer',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore voluptas voluptatibus doloremque ut cumque maiores ab debitis accusamus modi, magnam, velit, placeat esse porro? Dolor autem adipisci sint obcaecati quas!',
  },
];

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section className='about section'>
        <div className='secContainer'>
          <h3 className='title' data-aos='fade-up' data-aos-duration='2500'>
            why hikings?
          </h3>

          <div
            className='mainContent grid container'
            data-aos='fade-up'
            data-aos-duration='3000'
          >
            {DATA_ABOUT.map((item, index) => (
              <div className='singleItem' key={index}>
                <img src={item.imgSrc} alt='' />

                <h3>{item.title}</h3>

                <p>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className='videoCard container'>
            <div className='cardContent grid'>
              <div
                className='cardText'
                data-aos='fade-right'
                data-aos-duration='2500'
              >
                <h2>Wonderful House experience in there!</h2>

                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
                  non ut eveniet repellendus nostrum suscipit necessitatibus
                  neque corrupti ab nulla debitis magni veritatis est excepturi,
                  quisquam voluptatem rem deserunt doloribus!
                </p>
              </div>

              <div
                className='cardVideo'
                data-aos='fade-left'
                data-aos-duration='2500'
              >
                <video src={video} autoPlay loop muted type='video/mp4'></video>
              </div>
            </div>
            .
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
