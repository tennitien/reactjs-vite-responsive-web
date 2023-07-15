import './footer.css';
import { SiYourtraveldottv } from 'react-icons/si';
import {
  FaFacebookF,
  FaFacebook,
  FaSquareTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa6';
function Footer() {
  return (
    <>
      <footer className='footer'>
        <div className='secContainer container grid'>
          <div className='logoDiv'>
            <div className='footerLogo'>
              <a href='' className='logo'>
                <h1 className='flex'>
                  <SiYourtraveldottv className='icon' />
                  Dot
                </h1>
              </a>
            </div>

            <div className='socials flex'>
              <h3 className='linkTitle'>Follow us on</h3>
              <div className='socialsIcons'>
                <FaFacebook className='icon facebook' />
                <FaInstagram className='icon instagram' />
                <FaLinkedin className='icon linkedin' />
                <FaYoutube className='icon youtube' />
                <FaSquareTwitter className='icon twitter' />
              </div>
            </div>
          </div>

          <div className='footerLinks flex'>
            <div className='linkInfo'>
              <h3 className='linkTitle'>Information</h3>
              <ul>
                <li>
                  <a href=''>Home</a>
                </li>
                <li>
                  <a href=''>Product</a>
                </li>
                <li>
                  <a href=''>Contact</a>
                </li>
              </ul>
            </div>

            <div className='linkContact'>
              <h3 className='linkTitle'>Contact us</h3>
              <ul>
                <li>
                  <p>
                    Phone: <span className='phone'>+445 555 666</span>
                  </p>
                </li>
                <li>
                  <p>
                    Email: <span className='email'>email@gmail.com</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
