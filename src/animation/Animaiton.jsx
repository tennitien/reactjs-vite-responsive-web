import Aos from 'aos';
import { useEffect } from 'react';

function Animaiton() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return null;
}

export default Animaiton;
