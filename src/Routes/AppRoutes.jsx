import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../Components/common/Navbar';
import Footer from '../Components/common/Footer';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Services from '../pages/Services/Services';
import Gallery from '../pages/Gallery/Gallery';
import Contact from '../pages/Contact/Contact';
import Help from '../pages/Help/Help';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default AppRoutes;
