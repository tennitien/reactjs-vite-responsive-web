import './app.css';
import Navbar from './features/Navbar/Navbar';
import Home from './features/Home/Home';
import Popular from './features/Popular/Popular';
import Offers from './features/Offers/Offers';
import About from './features/About/About';
import Blog from './features/Blog/Blog';
import Footer from './features/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Popular />
      <Offers />
      <About />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
