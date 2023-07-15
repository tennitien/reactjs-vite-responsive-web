import './about.css';
import imgMountain from '../../assets/abou1-mountain.svg';
import imgHiking from '../../assets/abou2-hiking.svg';
import imgAvatar from '../../assets/abou3-avatar.svg';

// todo: 1:40:00
import video from '../../assets/video.mp4';
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
  return (
    <>
      <section className='about section'>
        <div className='secContainer'>
          <h3 className='title'>why hikings?</h3>

          <div className='mainContent grid container'>
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
              <div className='cardText'>
                <h2>Wonderful House experience in there!</h2>

                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
                  non ut eveniet repellendus nostrum suscipit necessitatibus
                  neque corrupti ab nulla debitis magni veritatis est excepturi,
                  quisquam voluptatem rem deserunt doloribus!
                </p>
              </div>

              <div className='cardVideo'>
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
