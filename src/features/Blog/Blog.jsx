import './blog.css';
import { BsArrowRightShort } from 'react-icons/bs';

import img1 from '../../assets/img1.jpeg';
import img2 from '../../assets/img2.jpeg';
import img3 from '../../assets/img3.jpeg';
import img4 from '../../assets/img4.jpeg';

const POSTS = [
  {
    imgSrc: img1,
    title: 'Title',
    des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
  },
  {
    imgSrc: img2,
    title: 'Title',
    des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
  },
  {
    imgSrc: img3,
    title: 'Title',
    des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
  },
  {
    imgSrc: img4,
    title: 'Title',
    des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
  },
];
function Blog() {
  return (
    <>
      <section className='blog container section'>
        <div className='secContainer'>
          <div className='secIntro'>
            <h2 className='secTitle title'>Our Blog</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>

          <div className='mainContainer grid'>
            {POSTS.map((item, index) => (
              <div className='singlePost grid' key={index}>
                <div className='imgDiv'>
                  <img src={item.imgSrc} alt='' />
                </div>

                <div className='postDetails'>
                  <h3>{item.title}</h3>
                  <p>{item.des}</p>
                </div>

                <a href='' className='flex'>
                  <BsArrowRightShort className='icon' /> Read More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
