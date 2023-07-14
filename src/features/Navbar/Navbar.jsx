import './navbar.css';
import { SiYourtraveldottv } from 'react-icons/si';
import { AiFillCloseCircle, AiOutlineMenu } from 'react-icons/ai';

import { useEffect, useState } from 'react';

const navLinks = [
  { nav: 'Home', link: '#' },
  { nav: 'Product', link: '#' },
  { nav: 'Resource', link: '#' },
  { nav: 'Contact', link: '#' },
  { nav: 'Blog', link: '#' },
];
function Navbar() {
  const [activeNavbar, setActiveNavbar] = useState('');
  const showNavbar = () => setActiveNavbar('navbarActive');
  const hiddenNavbar = () => setActiveNavbar('');
  const [activeHeader, setActiveHeader] = useState('');
  useEffect(() => {
    const addBg = () => {
      if (window.scrollY > 200) {
        setActiveHeader('headerActive');
      } else {
        setActiveHeader('');
      }
    };

    window.addEventListener('scroll', addBg);

    return () => window.removeEventListener('scroll', addBg);
  }, []);
  return (
    <>
      <section className='navbarSection'>
        <div className={`header ${activeHeader}`}>
          <div className='logoDiv'>
            <a href='#' className='logo'>
              <SiYourtraveldottv className='icon' />
              <span>Dot</span>
            </a>
          </div>

          {/* <div className='navbar'> */}
          <div className={`navbar ${activeNavbar}`}>
            <ul className='navLists flex'>
              {navLinks.map((nav, index) => (
                <li className='navItem' key={index}>
                  <a href={nav.link} className='navLink'>
                    {nav.nav}
                  </a>
                </li>
              ))}

              <div className='headerBtns flex'>
                <button className='btn loginBtn'>
                  <a href='#'>Login</a>
                </button>
                <button className='btn '>
                  <a href='#'>Sign Up</a>
                </button>
              </div>
            </ul>

            <div className='closeNavbar' onClick={hiddenNavbar}>
              <AiFillCloseCircle className='icon' />
            </div>
          </div>

          <div className='toggleNavbar' onClick={showNavbar}>
            <AiOutlineMenu className='icon' />
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
