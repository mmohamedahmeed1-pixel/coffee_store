import React, { useState } from 'react';
import { useCart } from './CartContext'; // 💡 استيراد الـ hook

const Check = () => {
  const { cartItems, cartTotal, clearCart } = useCart(); // 💡 جلب بيانات وحسابات السلة
  const [isOrdered, setIsOrdered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOrdered(true);
    clearCart(); // 💡 تفريغ السلة بعد نجاح الطلب
  };

  if (isOrdered) {
    return (
      <div style={styles.successContainer}>
        <div style={styles.successCard}>
          <span style={styles.successIcon}>🎉</span>
          <h2 style={styles.successTitle}>تم استلام طلبك بنجاح!</h2>
          <p style={styles.successText}>شكراً لثقتك في متجر قهوتنا. جاري تجهيز طلبك وسيتم التواصل معك قريباً لتأكيد الشحن.</p>
          <a href="/proudects" style={styles.backBtn}>العودة للمتجر</a>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.mainTitle}>إتمام وتأكيد الشراء 🛒</h1>
      
      <div style={styles.contentLayout}>
        {/* جهة اليمين: استمارة البيانات */}
        <form onSubmit={handleSubmit} style={styles.formSection}>
          <h3 style={styles.sectionTitle}>1. بيانات الشحن والتوصيل</h3>
          
          <div style={styles.inputGroup}>
            <label style={styles.label}>الاسم بالكامل *</label>
            <input type="text" required placeholder="محمد أحمد" style={styles.input} />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>رقم الهاتف *</label>
            <input type="tel" required placeholder="01xxxxxxxxx" style={styles.input} />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>المحافظة والمدينة *</label>
            <input type="text" required placeholder="القاهرة، مدينة نصر" style={styles.input} />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>العنوان بالتفصيل *</label>
            <input type="text" required placeholder="اسم الشارع / رقم العقار بالتفصيل" style={styles.input} />
          </div>

          <h3 style={styles.sectionTitle}>2. طريقة الدفع</h3>
          <div style={styles.radioGroup}>
            <label style={styles.radioLabel}>
              <input type="radio" name="payment" defaultChecked style={styles.radio} />
              <span>الدفع عند الاستلام (كاش) 💵</span>
            </label>
            <label style={styles.radioLabel}>
              <input type="radio" name="payment" style={styles.radio} />
              <span>فودافون كاش / محفظة إلكترونية 📱</span>
            </label>
          </div>

          {/* تفعيل الزر فقط إذا كانت السلة تحتوي على منتجات */}
          <button 
            type="submit" 
            disabled={cartItems.length === 0} 
            style={{...styles.confirmBtn, backgroundColor: cartItems.length === 0 ? '#A0948E' : '#4E3629', cursor: cartItems.length === 0 ? 'not-allowed' : 'pointer'}}
          >
            {cartItems.length === 0 ? 'السلة فارغة حالياً ⚠️' : 'تأكيد الطلب الآن ✨'}
          </button>
        </form>

        {/* جهة اليسار: ملخص الحساب الديناميكي المحدث */}
        <div style={styles.summarySection}>
          <h3 style={styles.sectionTitle}>ملخص الحساب الحقيقي</h3>
          
          {/* عرض المنتجات المضافة في الفاتورة */}
          <div style={styles.itemsList}>
            {cartItems.length === 0 ? (
              <p style={{ textAlign: 'center', color: '#777', fontSize: '14px' }}>لم تضف أي منتجات بعد!</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} style={styles.itemRow}>
                  <span>{item.name} <span style={{ color: '#705335' }}>({item.quantity}x)</span></span>
                  <span>{item.price}</span>
                </div>
              ))
            )}
          </div>

          <hr style={styles.divider} />
          
          <div style={styles.summaryRow}>
            <span>إجمالي المنتجات:</span>
            <strong>{cartItems.length === 0 ? 0 : cartTotal} ج.م</strong>
          </div>
          <div style={styles.summaryRow}>
            <span>تكلفة الشحن:</span>
            <span style={{ color: '#27AE60', fontWeight: 'bold' }}>مجاني بمناسبة الافتتاح 🎁</span>
          </div>
          <hr style={styles.divider} />
          <div style={styles.totalRow}>
            <span>الإجمالي النهائي:</span>
            <span>{cartItems.length === 0 ? 0 : cartTotal} ج.م</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// الأنماط تظل كما هي مع إضافة نمط لقائمة المنتجات
const styles = {
  container: { padding: '40px 20px', maxWidth: '1100px', margin: '0 auto', direction: 'rtl', fontFamily: 'sans-serif', minHeight: '80vh' },
  mainTitle: { color: '#4E3629', textAlign: 'center', marginBottom: '40px' },
  contentLayout: { display: 'flex', gap: '30px', flexWrap: 'wrap-reverse' },
  formSection: { flex: '2', minWidth: '300px', backgroundColor: '#FFF', padding: '30px', borderRadius: '12px', border: '1px solid #E5DCD5', boxShadow: '0 4px 10px rgba(0,0,0,0.02)' },
  summarySection: { flex: '1', minWidth: '280px', backgroundColor: '#F5EBE6', padding: '25px', borderRadius: '12px', height: 'fit-content', border: '1px solid #D2B48C' },
  sectionTitle: { color: '#2C1E17', fontSize: '18px', marginBottom: '20px', borderBottom: '2px solid #E5DCD5', paddingBottom: '8px' },
  itemsList: { display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: '150px', overflowY: 'auto', paddingBottom: '10px' },
  itemRow: { display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#555' },
  inputGroup: { marginBottom: '20px' },
  label: { display: 'block', marginBottom: '8px', fontSize: '14px', color: '#4E3629', fontWeight: 'bold' },
  input: { width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #CCC', fontSize: '15px', boxSizing: 'border-box', outline: 'none' },
  radioGroup: { display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '30px' },
  radioLabel: { display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '15px' },
  radio: { accentColor: '#4E3629', scale: '1.2' },
  confirmBtn: { width: '100%', padding: '15px', color: '#FFF', border: 'none', borderRadius: '8px', fontSize: '18px', fontWeight: 'bold', transition: '0.3s' },
  summaryRow: { display: 'flex', justifycontent: 'space-between', marginBottom: '15px', fontSize: '15px' },
  divider: { border: 'none', borderTop: '1px solid #D2B48C', margin: '15px 0' },
  totalRow: { display: 'flex', justifyContent: 'space-between', fontSize: '18px', fontWeight: 'bold', color: '#2C1E17', marginBottom: '15px' },
  successContainer: { display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '70vh', padding: '20px', direction: 'rtl' },
  successCard: { backgroundColor: '#FFF', padding: '40px 30px', borderRadius: '16px', textAlign: 'center', maxWidth: '500px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', border: '1px solid #E5DCD5' },
  successIcon: { fontSize: '50px', display: 'block', marginBottom: '20px' },
  successTitle: { color: '#27AE60', marginBottom: '15px' },
  successText: { color: '#666', lineHeight: '1.6', marginBottom: '30px' },
  backBtn: { display: 'inline-block', padding: '12px 30px', backgroundColor: '#4E3629', color: '#FFF', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold' }
};

export default Check;