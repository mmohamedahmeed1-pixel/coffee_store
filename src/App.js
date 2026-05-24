import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// استيراد الـ Provider الجديد
import { CartProvider } from './CartContext';

import Navbar from './navbar';
import Header from './header';
import Footer from './footer';
import Proudects from "./proudects";
import Check from "./check";
import About from './about';
import Help from './help';
import Service from './service';

function App() {
  return (
    // 💡 تغليف التطبيق هنا بـ CartProvider
    <CartProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/proudects" element={<Proudects />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
          <Route path="/service" element={<Service />} />
          <Route path="/check/:gameSlug" element={<Check />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;