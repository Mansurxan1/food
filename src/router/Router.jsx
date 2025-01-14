import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Home from '../pages/Home';
import FeaturesPage from '../pages/FeaturesPage';
import AboutPage from '../pages/AboutPage';
import Menu from '../pages/MenuPage';
import MenuId from '../pages/MenuId';
import Cart from '../pages/Cart';
import MobileNav from '../Components/MobileNav';
import Contact from '../pages/Contact';

const Router = () => {
  console.log("Router is rendering...");
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<FeaturesPage />}/>
        <Route path='/about' element={<AboutPage />} />
        <Route path='/menu' element={<Menu />}/> 
        <Route path='/menu/:id' element={<MenuId />} />
        <Route path='/basket' element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <MobileNav/>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;

