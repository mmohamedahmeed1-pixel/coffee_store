import React, { useState } from 'react';

const Help = () => {
  // State للاحتفاظ برقم السؤال المفتوح حالياً
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    if (activeQuestion === index) {
      setActiveQuestion(null); // قفل السؤال لو ضغط عليه تاني
    } else {
      setActiveQuestion(index); // فتح السؤال الجديد
    }
  };

  const faqs = [
    {
      question: 'كم يستغرق توصيل الطلب داخل مصر؟ 🚚',
      answer: 'التوصيل يستغرق من ٢ إلى ٤ أيام عمل كحد أقصى لجميع محافظات مصر (القاهرة والجيزة غالباً خلال ٤٨ ساعة).'
    },
    {
      question: 'ما هي طرق الدفع المتاحة؟ 💵',
      answer: 'نوفر لك طرق دفع مرنة تناسبك تماماً: الدفع نقداً عند الاستلام (كاش)، أو التحويل عبر المحافظ الإلكترونية مثل (فودافون كاش، اتصالات كاش، أورانج كاش).'
    },
    {
      question: 'هل البن بيوصل مطحون ولا حبوب كاملة؟ ☕',
      answer: 'نوفر المحاصيل كحبوب كاملة للحفاظ على كامل نكهتها وزيوتها الطيارة، ولكن إذا كنت تريد طحنها، يمكنك كتابة درجة الطحن المطلوبة (تركى، إسبريسو، فلتر) في ملاحظات الطلب وسنقوم بطحنها لك مجاناً قبل الشحن مباشرة.'
    },
    {
      question: 'ما هي سياسة الاستبدال والاسترجاع؟ 🔄',
      answer: 'لأن القهوة منتج غذائي طازج، فلا يمكن استرجاع حبوب البن بعد فتح العبوة إلا في حال وجود عيب واضح في جودة المنتج. أما بالنسبة للأدوات والمستلزمات، فيمكنك استبدالها أو استرجاعها خلال ١٤ يوماً بشرط أن تكون في حالتها الأصلية وداخل غلافها المغلق.'
    },
    {
      question: 'كيف يمكنني التواصل مع الدعم الفني للمتجر؟ 📞',
      answer: 'يسعدنا تواصلك معنا دائماً! يمكنك الضغط على رقم الهاتف الموجود في أسفل الصفحة (الفوتر) للتحدث معنا مباشرة عبر الواتساب، أو إرسال رسالة لبريدنا الإلكتروني وسنرد عليك في خلال دقائق.'
    }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.headerSection}>
        <h1 style={styles.mainTitle}>مركز المساعدة والدعم 🛠️</h1>
        <p style={styles.subtitle}>أهلاً بك في صفحة الدعم، هنا تجد إجابات سريعة ومباشرة لأبرز استفساراتك</p>
      </div>

      <div style={styles.faqWrapper}>
        <h3 style={styles.sectionTitle}>الأسئلة الشائعة وعملاء المتجر 🤔</h3>
        
        <div style={styles.accordion}>
          {faqs.map((faq, index) => (
            <div key={index} style={styles.faqItem}>
              {/* زر السؤال */}
              <button onClick={() => toggleQuestion(index)} style={styles.questionBtn}>
                <span style={styles.questionText}>{faq.question}</span>
                <span style={styles.arrowIcon}>{activeQuestion === index ? '▲' : '▼'}</span>
              </button>
              
              {/* الإجابة تظهر وتختفي ديناميكياً */}
              {activeQuestion === index && (
                <div style={styles.answerBox}>
                  <p style={styles.answerText}>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* كارت تواصل إضافي */}
      <div style={styles.contactCard}>
        <h4>مش ملاقي إجابة لسؤالك؟ 🧐</h4>
        <p>فريق خدمة العملاء جاهز لخدمتك ٢٤ ساعة على مدار الأسبوع</p>
        <button onClick={() => alert('جاري توجيهك للمحادثة المباشرة... 💬')} style={styles.contactBtn}>
          تحدث معنا الآن مباشر 💬
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px 20px',
    maxWidth: '850px',
    margin: '0 auto',
    direction: 'rtl',
    fontFamily: 'sans-serif',
    minHeight: '80vh',
  },
  headerSection: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  mainTitle: {
    color: '#4E3629',
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  subtitle: {
    color: '#705335',
    fontSize: '15px',
  },
  faqWrapper: {
    backgroundColor: '#FFF',
    padding: '25px',
    borderRadius: '12px',
    border: '1px solid #E5DCD5',
    boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
    marginBottom: '40px',
  },
  sectionTitle: {
    color: '#2C1E17',
    fontSize: '18px',
    marginBottom: '20px',
    borderBottom: '2px solid #F5EBE6',
    paddingBottom: '10px',
  },
  accordion: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  faqItem: {
    border: '1px solid #E5DCD5',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  questionBtn: {
    width: '100%',
    padding: '15px 20px',
    backgroundColor: '#F5EBE6',
    border: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    textAlign: 'right',
    outline: 'none',
  },
  questionText: {
    fontSize: '15px',
    fontWeight: 'bold',
    color: '#4E3629',
  },
  arrowIcon: {
    fontSize: '12px',
    color: '#705335',
  },
  answerBox: {
    padding: '15px 20px',
    backgroundColor: '#FFF',
    borderTop: '1px solid #E5DCD5',
  },
  answerText: {
    margin: 0,
    fontSize: '14px',
    color: '#555',
    lineHeight: '1.7',
  },
  contactCard: {
    textAlign: 'center',
    backgroundColor: '#4E3629',
    color: '#FFF',
    padding: '30px 20px',
    borderRadius: '12px',
    border: '1px solid #D2B48C',
  },
  contactBtn: {
    marginTop: '15px',
    padding: '10px 25px',
    backgroundColor: '#D2B48C',
    color: '#2C1E17',
    border: 'none',
    borderRadius: '20px',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '14px',
  }
};

export default Help;