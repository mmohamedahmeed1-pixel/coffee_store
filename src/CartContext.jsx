import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  // 🌙 إضافة حالة الوضع الداكن هنا
  const [darkMode, setDarkMode] = useState(false);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const exist = prevItems.find((item) => item.id === product.id);
      if (exist) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // دالة تبديل الوضع
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const cartTotal = cartItems.reduce((total, item) => {
    const priceNum = parseInt(productPriceToNumber(item.price));
    return total + priceNum * item.quantity;
  }, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, clearCart, cartCount, cartTotal, darkMode, toggleDarkMode }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

function productPriceToNumber(priceStr) {
  const map = { '٠':0, '١':1, '٢':2, '٣':3, '٤':4, '٥':5, '٦':6, '٧':7, '٨':8, '٩':9 };
  let cleanStr = priceStr.replace(/[ج\.م\s]/g, '');
  let englishNumberStr = cleanStr.replace(/[٠-٩]/g, function(d) { return map[d]; });
  return parseInt(englishNumberStr) || 0;
}