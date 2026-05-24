import React from 'react';
import { useCart } from './CartContext';

const Service = () => {
  const { darkMode } = useCart(); // مواكبة الوضع الداكن

  const services = [
    { icon: '🪵', title: 'طحن البن المخصص مجاناً', desc: 'نوفر لك خدمة طحن حبوب البن الطازجة بالدرجة المناسبة لأداتك المفضلة (إسبريسو، فلتر، تركي) وبشكل مجاني تماماً مع كل طلب.' },
    { icon: '📦', title: 'الاشتراكات الشهرية لـ بوكس القهوة', desc: 'اشترك معنا ليصلك بوكس منوع من حبوب بن القهوة المختصة والمشروبات اللذيذة أول كل شهر تلقائياً حتى باب بيتك بخصومات تصل لـ 20%.' },
    { icon: '💼', title: 'تجهيز المكاتب والشركات', desc: 'نقدم باقات خاصة للشركات والمؤسسات تشمل توريد أفخر أنواع البن، وتوفير أدوات ومستلزمات الضيافة الراقية بأسعار جملة منافسة.' },
    { icon: '🎓', title: 'ورش عمل أساسيات الباريستا', desc: 'إذا كنت من هواة إعداد القهوة، نوفر ورش عمل دورية لتعليم أساسيات استخلاص الإسبريسو المثالي والتحكم في مهارات اللاتيه آرت.' }
  ];

  const pageBg = darkMode ? '#1E140F' : '#FFF';
  const cardBg = darkMode ? '#2D1F18' : '#F5EBE6';
  const textColor = darkMode ? '#F5EBE6' : '#2C1E17';
  const borderStyle = darkMode ? '1px solid #4E3629' : '1px solid #E5DCD5';

  return (
    <div style={{...styles.container, backgroundColor: pageBg, transition: '0.3s'}}>
      <div style={styles.headerSection}>
        <h1 style={{...styles.mainTitle, color: darkMode ? '#D2B48C' : '#4E3629'}}>خدماتنا المميزة ✨</h1>
        <p style={{...styles.subtitle, color: darkMode ? '#F5EBE6' : '#705335'}}>أكثر من مجرد متجر.. نحن نقدم لك رعاية متكاملة لكوب قهوتك اليومي</p>
      </div>

      <div style={styles.grid}>
        {services.map((ser, index) => (
          <div key={index} style={{...styles.card, backgroundColor: cardBg, border: borderStyle}}>
            <span style={styles.iconSpan}>{ser.icon}</span>
            <h3 style={{...styles.cardTitle, color: darkMode ? '#D2B48C' : '#4E3629'}}>{ser.title}</h3>
            <p style={{...styles.cardDesc, color: textColor}}>{ser.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: { padding: '50px 20px', direction: 'rtl', fontFamily: 'sans-serif', minHeight: '80vh' },
  headerSection: { textAlign: 'center', marginBottom: '50px' },
  mainTitle: { fontSize: '34px', fontWeight: 'bold', marginBottom: '12px' },
  subtitle: { fontSize: '16px', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' },
  grid: { display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center', maxWidth: '1100px', margin: '0 auto' },
  card: { padding: '30px', borderRadius: '16px', width: '280px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', alignItems: 'center' },
  iconSpan: { fontSize: '45px', marginBottom: '15px', display: 'block' },
  cardTitle: { fontSize: '18px', fontWeight: 'bold', marginBottom: '12px' },
  cardDesc: { fontSize: '14px', lineHeight: '1.7', margin: 0 }
};

export default Service;