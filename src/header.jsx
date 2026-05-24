import React from 'react';

const Header = () => {
  return (
    <div style={styles.heroContainer}>
      {/* القسم الرئيسي (Hero Section) */}
      <div style={styles.overlay}>
        <h1 style={styles.title}>تذوق أصالة القهوة في كل رشفة ☕</h1>
        <p style={styles.subtitle}>
          نوفر لك أجود أنواع البن المحمص الطازج من مزارع القهوة العالمية مباشرة إلى كوبك. استمتع بتجربة فريدة ونكهات غنية لا تُنسى.
        </p>
        
        {/* قسم العرض الخاص المتوفر في المتجر */}
        <div style={styles.offerBox}>
          <span style={styles.offerBadge}>عرض لفترة محدودة! 🔥</span>
          <p style={styles.offerText}>اشترِ عبوتين من اختيارك واحصل على الثالثة **مجاناً** + توصيل مجاني لأول طلب!</p>
        </div>

        <div style={styles.buttonContainer}>
          <a href="/proudects" style={styles.primaryButton}>تصفح المنتجات الآن</a>
          <a href="/about" style={styles.secondaryButton}>اكتشف قصتنا</a>
        </div>
      </div>
    </div>
  );
};

const styles = {
  heroContainer: {
    // استخدمنا خلفية بلون بني دافئ متدرج ليناسب أجواء القهوة الفاخرة
    background: 'linear-gradient(135deg, #2C1E17 0%, #4E3629 100%)',
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '40px 20px',
    direction: 'rtl',
  },
  overlay: {
    maxWidth: '800px',
    color: '#FFF',
  },
  title: {
    fontSize: '42px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#F5EBE6',
    lineHeight: '1.4',
  },
  subtitle: {
    fontSize: '18px',
    color: '#D2B48C',
    marginBottom: '35px',
    lineHeight: '1.8',
  },
  offerBox: {
    backgroundColor: 'rgba(210, 180, 140, 0.15)',
    border: '1px dashed #D2B48C',
    borderRadius: '10px',
    padding: '20px',
    marginBottom: '35px',
    display: 'inline-block',
  },
  offerBadge: {
    display: 'inline-block',
    backgroundColor: '#E74C3C',
    color: '#FFF',
    padding: '5px 12px',
    borderRadius: '5px',
    fontSize: '14px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  offerText: {
    margin: 0,
    fontSize: '16px',
    color: '#FFF',
  },
  buttonContainer: {
    display: 'flex',
    gap: '15px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  primaryButton: {
    display: 'inline-block',
    backgroundColor: '#D2B48C',
    color: '#2C1E17',
    padding: '12px 30px',
    borderRadius: '25px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '16px',
    transition: '0.3s ease',
    boxShadow: '0 4px 15px rgba(210, 180, 140, 0.3)',
  },
  secondaryButton: {
    display: 'inline-block',
    backgroundColor: 'transparent',
    color: '#FFF',
    border: '2px solid #FFF',
    padding: '10px 28px',
    borderRadius: '25px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '16px',
    transition: '0.3s ease',
  },
};

export default Header;