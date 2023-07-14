import './home.css';
function Home() {
  const company = 'dot';
  return (
    <>
      <section className='home'>
        <div className='secContainer container'>
          <div className='homeText'>
            <h1 className='title'>
              {`plan your trip with travel ${company}`}{' '}
            </h1>
            <p className='subTitle'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              ab dolorem cumque! Suscipit vel laboriosam ad accusamus doloribus,
              est voluptatum, aliquam nostrum quam ipsam hic numquam architecto
              totam, ab sequi!
            </p>

            <button className='btn btn--submit'>
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
          {/* </div> */}
        </div>
      </section>
    </>
  );
}

export default Home;
