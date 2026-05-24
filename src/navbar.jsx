import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

const Navbar = () => {
  const { cartCount, darkMode, toggleDarkMode } = useCart(); // 💡 جلب حالة وتبديل الثيم

  return (
    <nav style={styles.navbarContainer}>
      <div style={styles.logoContainer}>
        <Link to="/" style={styles.logoLink}>
          <span style={styles.logoEmoji}>☕</span>
          <span style={styles.logoText}>قهوتنا</span>
        </Link>
      </div>

      <ul style={styles.navLinks}>
        <li><Link to="/" style={styles.link}>الرئيسية</Link></li>
        <li><Link to="/proudects" style={styles.link}>منتجاتنا</Link></li>
        <li><Link to="/service" style={styles.link}>خدماتنا</Link></li>
        <li><Link to="/about" style={styles.link}>من نحن</Link></li>
        <li><Link to="/help" style={styles.link}>المساعدة</Link></li>
      </ul>

      <div style={styles.actionsContainer}>
        {/* 💡 زر التبديل السحري بين الوضع الداكن والفاتح */}
        <button onClick={toggleDarkMode} style={styles.themeBtn}>
          {darkMode ? '☀️ وضع مضيء' : '🌙 وضع داكن'}
        </button>

        <Link to="/check/cart" style={styles.cartButton}>
          <span style={styles.cartIcon}>🛒</span>
          <span style={styles.cartText}>السلة</span>
          <span style={styles.cartCount}>{cartCount}</span> 
        </Link>
      </div>
    </nav>
  );
};

const styles = {
  navbarContainer: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 40px', backgroundColor: '#2C1E17', borderBottom: '2px solid #D2B48C', direction: 'rtl', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)' },
  logoContainer: { display: 'flex', alignItems: 'center' },
  logoLink: { textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' },
  logoEmoji: { fontSize: '28px' },
  logoText: { fontSize: '22px', fontWeight: 'bold', color: '#D2B48C' },
  navLinks: { display: 'flex', listStyle: 'none', gap: '25px', margin: 0, padding: 0 },
  link: { color: '#F5EBE6', textDecoration: 'none', fontSize: '16px', fontWeight: '500' },
  actionsContainer: { display: 'flex', alignItems: 'center', gap: '15px' }, // أضفنا gap مسافة بين الأزرار
  themeBtn: { backgroundColor: 'transparent', border: '1px solid #D2B48C', color: '#D2B48C', padding: '6px 12px', borderRadius: '15px', cursor: 'pointer', fontWeight: 'bold', fontSize: '13px' },
  cartButton: { display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#4E3629', border: '1px solid #D2B48C', padding: '8px 18px', borderRadius: '20px', color: '#FFF', textDecoration: 'none', fontWeight: 'bold', fontSize: '15px' },
  cartIcon: { fontSize: '18px' },
  cartText: { color: '#D2B48C' },
  cartCount: { backgroundColor: '#E74C3C', color: '#FFF', fontSize: '12px', padding: '2px 7px', borderRadius: '50%', marginRight: '5px' },
};

export default Navbar;