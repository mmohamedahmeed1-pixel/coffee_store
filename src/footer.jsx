import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footerContainer}>
      <div style={styles.gridContainer}>
        
        {/* القسم الأول: عن المتجر */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>☕ متجر قهوتنا</h3>
          <p style={styles.aboutText}>
            وجهتك الأولى لأجود أنواع البن العالمي المحمص بكل شغف وحب. نوفر لك أدوات ومحاصيل تجعل من كوبك اليومي تجربة فريدة.
          </p>
        </div>

        {/* القسم الثاني: روابط سريعة */}
        <div style={styles.section}>
          <h4 style={styles.sectionTitle}>روابط سريعة</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}><a href="/" style={styles.link}>الرئيسية</a></li>
            <li style={styles.listItem}><a href="/proudects" style={styles.link}>منتجاتنا</a></li>
            <li style={styles.listItem}><a href="/service" style={styles.link}>خدماتنا</a></li>
            <li style={styles.listItem}><a href="/about" style={styles.link}>من نحن</a></li>
          </ul>
        </div>

        {/* القسم الثالث: الدعم والمساعدة */}
        <div style={styles.section}>
          <h4 style={styles.sectionTitle}>الدعم والمساعدة</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}><a href="/help" style={styles.link}>مركز المساعدة</a></li>
            <li style={styles.listItem}><a href="/help" style={styles.link}>الشحن والتوصيل</a></li>
            <li style={styles.listItem}><a href="/help" style={styles.link}>سياسة الاسترجاع</a></li>
          </ul>
        </div>

        {/* القسم الرابع: تواصل معنا وطرق الدفع */}
        <div style={styles.section}>
          <h4 style={styles.sectionTitle}>تواصل معنا</h4>
       <p style={styles.contactText}>📍 القاهرة، جمهورية مصر العربية 🇪🇬</p>
          <p style={styles.contactText}>📞 966500000000+</p>
          <p style={styles.contactText}>✉️ support@qahwatuna.com</p>
          
          {/* أيقونات تعبيرية لطرق الدفع */}
          <div style={styles.paymentIcons}>
            <span title="مدى" style={styles.paymentBadge}>💳 مدى</span>
            <span title="فيزا" style={styles.paymentBadge}>Visa</span>
            <span title="ماستركارد" style={styles.paymentBadge}>MasterCard</span>
            <span title="دفع عند الاستلام" style={styles.paymentBadge}>💵 عند الاستلام</span>
          </div>
        </div>

      </div>

      {/* الشريط السفلي للحقوق */}
      <div style={styles.bottomBar}>
        <p style={styles.copyrightText}>
          جميع الحقوق محفوظة © {new Date().getFullYear()} لمتجر <strong>قهوتنا</strong>. صُنع بكل ☕ وحب.
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footerContainer: {
    backgroundColor: '#1E140F', // بني داكن جداً وفخم متناسق مع الهيدر
    color: '#E0E0E0',
    padding: '50px 30px 20px 30px',
    direction: 'rtl',
    fontFamily: 'sans-serif',
    marginTop: '60px',
    borderTop: '4px solid #D2B48C', // خط علوي بلون الكراميل يفصل الفوتر عن المحتوى
  },
  gridContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  section: {
    flex: '1',
    minWidth: '220px', // يضمن توزيع الأقسام بشكل مرن عند صغر الشاشة
  },
  sectionTitle: {
    color: '#D2B48C', // لون الكراميل البيج للعناوين
    fontSize: '20px',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  aboutText: {
    lineHeight: '1.8',
    fontSize: '15px',
    color: '#B3A6A0',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  listItem: {
    marginBottom: '12px',
  },
  link: {
    color: '#FFF',
    textDecoration: 'none',
    fontSize: '15px',
    transition: 'color 0.3s ease',
  },
  contactText: {
    fontSize: '14px',
    marginBottom: '10px',
    color: '#B3A6A0',
  },
  paymentIcons: {
    display: 'flex',
    gap: '8px',
    marginTop: '15px',
    flexWrap: 'wrap',
  },
  paymentBadge: {
    backgroundColor: '#2C1E17',
    color: '#D2B48C',
    padding: '4px 10px',
    borderRadius: '4px',
    fontSize: '12px',
    border: '1px solid #4E3629',
  },
  bottomBar: {
    textAlign: 'center',
    borderTop: '1px solid #2C1E17',
    marginTop: '40px',
    paddingTop: '20px',
  },
  copyrightText: {
    fontSize: '14px',
    color: '#8C7E78',
    margin: 0,
  },
};

export default Footer;