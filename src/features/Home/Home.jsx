import './home.css';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Home() {
  const company = 'dot';

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <section className='home'>
        <div className='secContainer container'>
          <div className='homeText'>
            <h1 data-aos='fade-up' className='title'>
              {`plan your trip with travel ${company}`}{' '}
            </h1>
            <p data-aos='fade-up' data-aos-duration='2500' className='subTitle'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </p>

            <button
              data-aos='fade-up'
              data-aos-duration='3000'
              className='btn btn--submit'
            >
              <a href='#'>Explore Now</a>
            </button>
          </div>

          {/* <div className='home__card grid'> */}
          <form action='' className='homeForm grid'>
            <div className='location'>
              <label htmlFor='location'>location</label>
              <input type='text' placeholder='Location...' className='input' />
            </div>
            <div className='distance'>
              <label htmlFor='distance'>distance</label>
              <input type='text' placeholder='11/Meters' className='input' />
            </div>
            <div className='price'>
              <label htmlFor='price'>price</label>
              <input type='text' placeholder='price...' className='input' />
            </div>
            <button type='submit' className='flex btn btn--submit'>
              Search
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Home;
