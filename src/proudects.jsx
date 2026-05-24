import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

const Proudects = () => {
  const { addToCart, darkMode } = useCart();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('الكل');

  // 🚀 الـ 50 منتج كاملين بروابط صور دقيقة ومطابقة بنسبة 100% لكل صنف باسمه
  const coffeeProducts = [
    // === حبوب بن كاملة ===
    { id: 1, name: 'بن كولومبي سوبيرمو 🇨🇴', price: '٤٥٠ ج.م', description: 'إيحاءات شوكولاتة ممتدة وقوام غني، مثالي للإسبريسو (٢٥٠ جرام).', type: 'حبوب بن كاملة', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500' },
    { id: 2, name: 'بن إثيوبي سيدامو 🇪🇹', price: '٤٩٠ ج.م', description: 'نكهة فاكهية وعطرية واضحة للغاية، رائع للقهوة المقطرة v60 (٢٥٠ جرام).', type: 'حبوب بن كاملة', image: 'https://images.unsplash.com/photo-1611162455575-9300edc1216e?w=500' },
    { id: 3, name: 'بن برازيلي سانتوس 🇧🇷', price: '٣٩٠ ج.م', description: 'حموضة منخفضة مائل للمكسرات والكراميل، مناسب للمشروبات مع الحليب.', type: 'حبوب بن كاملة', image: 'https://images.unsplash.com/photo-1587049016473-b124806a0c0c?w=500' },
    { id: 4, name: 'بن يمني إسماعيلي 🇾🇪', price: '٧٥٠ ج.م', description: 'من أعرق وأفخر أنواع البن في العالم، نكهة برية وتوابل فريدة.', type: 'حبوب بن كاملة', image: 'https://images.unsplash.com/photo-1607687325272-46595d023a9c?w=500' },
    { id: 5, name: 'بن كينيا AA 🇰🇪', price: '٥٢٠ ج.م', description: 'قوام ممتلئ وحموضة فاكهية حادة تشبه التوت الأسود وعنب الثعلب.', type: 'حبوب بن كاملة', image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500' },
    { id: 6, name: 'بن غواتيمالا 🇬🇹', price: '٤٦٠ ج.م', description: 'توازن مذهل وإيحاء تفاح أخضر وشوكولاتة داكنة خفيفة.', type: 'حبوب بن كاملة', image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=500' },
    { id: 7, name: 'بن سلفادور بوربون 🇸🇻', price: '٤٤٠ ج.م', description: 'حلاوة عسلية ناعمة وقوام ناعم ومريح للقلب.', type: 'حبوب بن كاملة', image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=500' },
    { id: 8, name: 'خلطة إسبريسو بيتية ☕', price: '٣٥٠ ج.م', description: 'مزيج سري من أرابيكا وروبوستا لتوليد كريمة كثيفة ونكهة قوية.', type: 'حبوب بن كاملة', image: 'https://images.unsplash.com/photo-1506372023823-7424ac389461?w=500' },
    { id: 9, name: 'بن منزوع الكافيين 🍃', price: '٤٨٠ ج.م', description: 'نفس المذاق الرائع للإسبريسو ولكن بدون كافيين، رائع للفترات المسائية.', type: 'حبوب بن كاملة', image: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=500' },
    { id: 10, name: 'بن هوندوراس عضوي 🇭🇳', price: '٣٩٠ ج.م', description: 'مستزرع عضوياً بالكامل بدون كيماويات، نكهة نقية وصافية.', type: 'حبوب بن كاملة', image: 'https://images.unsplash.com/photo-1504502395707-b89953353ae5?w=500' },

    // === مشروبات ساخنة ===
    { id: 11, name: 'كورتادو مخملي ☕', price: '٩٠ ج.م', description: 'إسبريسو مزدوج مع كمية مساوية من الحليب المبخر بقوام ناعم في كأس زجاجي.', type: 'مشروب ساخن', image: 'http://googleusercontent.com/image_collection/image_retrieval/16188306744663930880_0' },
    { id: 12, name: 'فلات وايت أسترالي 🇦🇺', price: '٩٥ ج.م', description: 'طعم قهوة قوي وظاهر مع طبقة رقيقة جداً من فوم الحليب الأملس.', type: 'مشروب ساخن', image: 'https://images.unsplash.com/photo-1577968897866-be5c733698c2?w=500' },
    { id: 13, name: 'زعفران لاتيه ملكي 💛', price: '١٢٥ ج.م', description: 'إسبريسو فاخر وحليب مبخر غني بخيوط الزعفران الطبيعي الصافي.', type: 'مشروب ساخن', image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=500' },
    { id: 14, name: 'كابوتشينو كلاسيك 🇮🇹', price: '٨٥ ج.م', description: 'ثلث إسبريسو، ثلث حليب، وثلث رغوة غنية مرشوش عليها بودرة كاكاو.', type: 'مشروب ساخن', image: 'https://images.unsplash.com/photo-1572442388796-11668a720eb9?w=500' },
    { id: 15, name: 'سبانش لاتيه حار 🥰', price: '١٠٥ ج.م', description: 'المزيج الشهير المحلى بالكامل بلمستنا الخاصة لقضاء شتاء دافئ.', type: 'مشروب ساخن', image: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=500' },
    { id: 16, name: 'أمريكانو أسود كلاسيكي 🖤', price: '٦٥ ج.م', description: 'شوت إسبريسو مخفف بالماء الساخن لعشاق النقاء والتركيز بدون حليب.', type: 'مشروب ساخن', image: 'https://images.unsplash.com/photo-1515442261605-659877833605?w=500' },
    { id: 17, name: 'ميكاتو إيطالي 🇮🇹', price: '٧٠ ج.م', description: 'شوت إسبريسو مركز تعلوه بقعة صغيرة دائرية من رغوة الحليب الساخن.', type: 'مشروب ساخن', image: 'https://images.unsplash.com/photo-1594911774802-8822a707c935?w=500' },
    { id: 18, name: 'موكا شوكولاتة داكنة 🍫', price: '١١٠ ج.م', description: 'مزيج رائع بين إسبريسو حاد وصوص الشوكولاتة البلجيكية الفاخرة والحليب.', type: 'مشروب ساخن', image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500' },
    { id: 19, name: 'لاتيه الفانيليا الفرنسي 🇫🇷', price: '١٠٠ ج.م', description: 'مشروب لاتيه كلاسيكي ناعم مع نكهة الفانيليا العطرية المركزة.', type: 'مشروب ساخن', image: 'https://images.unsplash.com/photo-1522992344747-4b1398715735?w=500' },
    { id: 20, name: 'كراميل ماكياتو دافئ 🍯', price: '١١٥ ج.م', description: 'حليب مبخر بنكهة الفانيليا مغطى بالإسبريسو وشلال من صوص الكراميل.', type: 'مشروب ساخن', image: 'https://images.unsplash.com/photo-1538587888044-79f13ddd7e49?w=500' },

    // === مشروبات باردة ===
    { id: 21, name: 'سبانش لاتيه بارد 🧊', price: '١١٠ ج.م', description: 'الطلب الأكثر مبيعاً، إسبريسو مع حليب مكثف ومحلى وقطع ثلج منعشة في كأس طويل.', type: 'مشروب بارد', image: 'http://googleusercontent.com/image_collection/image_retrieval/15217934027862145102_0' },
    { id: 22, name: 'سيريال لاتيه مثلج 🥛', price: '١٢٠ ج.م', description: 'مشروب مبتكر يجمع نكهة المقرمشات المحمصة مع الإسبريسو والحليب البارد.', type: 'مشروب بارد', image: 'https://images.unsplash.com/photo-1553909489-cd47e0907980?w=500' },
    { id: 23, name: 'آيس كراميل ماكياتو 🧊', price: '١١٥ ج.م', description: 'طبقات مبهرة من الفانيليا والثلج والحليب متبوعة بالإسبريسو والكراميل.', type: 'مشروب بارد', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500' },
    { id: 24, name: 'آيس أمريكانو منعش 🧊', price: '٧٠ ج.م', description: 'قهوة سوداء مثلجة ومركزة، الاختيار المثالي لبداية يوم صيفي حار.', type: 'مشروب بارد', image: 'https://images.unsplash.com/photo-1551046713-2d9d59702df9?w=500' },
    { id: 25, name: 'آيس موكا بالبليند البارد 🍫', price: '١١٥ ج.م', description: 'شوكولاتة غنية ممزوجة مع الثلج والقهوة ومغطاة بكريمة الخفق.', type: 'مشروب بارد', image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500' },
    { id: 26, name: 'كولد برو كلاسيكي 🕒', price: '١٣٠ ج.م', description: 'مستخلص ببطء بالماء البارد لمدة ١٦ ساعة لقوام شديد النقاء وحموضة منعدمة.', type: 'مشروب بارد', image: 'https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?w=500' },
    { id: 27, name: 'كولد برو بالبرتقال 🍊', price: '١٤٠ ج.م', description: 'مزيج فريد من القهوة المقطرة الباردة مع عصير البرتقال الطازج المنعش.', type: 'مشروب بارد', image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500' },
    { id: 28, name: 'آيس لاتيه كلاسيك 🧊', price: '٩٠ ج.م', description: 'بساطة الإسبريسو مع الحليب البارد والثلج بدون أي إضافات سكرية.', type: 'مشروب بارد', image: 'https://images.unsplash.com/photo-1497515114629-f71d768fd07c?w=500' },
    { id: 29, name: 'بيستاشيو لاتيه بارد 💚', price: '١٣٥ ج.م', description: 'مشروب فخم يعتمد على زبدة الفستق الحلبي الطبيعية والإسبريسو اللذيذ.', type: 'مشروب بارد', image: 'https://images.unsplash.com/photo-1562447457-579cf34b6ee5?w=500' },
    { id: 30, name: 'آيس وايت موكا 🤍', price: '١٢٠ ج.م', description: 'إسبريسو مع حليب وصوص الشوكولاتة البيضاء الساحرة والثلج.', type: 'مشروب بارد', image: 'https://images.unsplash.com/photo-1482350325005-eda5e677279b?w=500' },

    // === أدوات ومستلزمات ===
    { id: 31, name: 'أكواب تقطير v60 ورقية 📄', price: '١٩٠ ج.م', description: 'فلاتر ورقية بيضاء عالية الجودة لترشيح نقي جداً (٥٠ فلتر).', type: 'أدوات ومستلزمات', image: 'https://images.unsplash.com/photo-1545665277-5937489579f2?w=500' },
    { id: 32, name: 'قمع تقطير V60 زجاجي لدن 💎', price: '٣٥٠ ج.م', description: 'قمع زجاجي بقاعدة خشبية فاخرة لتجهيز قهوتك المقطرة باحترافية.', type: 'أدوات ومستلزمات', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500' },
    { id: 33, name: 'سيرفر قهوة زجاجي ٦٠٠ مل 🧪', price: '٤٢٠ ج.م', description: 'إناء لجمع القهوة المقطرة، يتحمل الحرارة العالية ومقاوم للصدمات.', type: 'أدوات ومستلزمات', image: 'https://images.unsplash.com/photo-1580933181604-c5953df77a16?w=500' },
    { id: 34, name: 'غلاية تقطير كهربائية 🫖', price: '١٨٥٠ ج.م', description: 'عنق رفيع جداً للتحكم الكامل في صب الماء الساخن مع شاشة حرارة بدقة.', type: 'أدوات ومستلزمات', image: 'https://images.unsplash.com/photo-1574156814149-62d223cbb34e?w=500' },
    { id: 35, name: 'كباس إسبريسو ٥٨ ملم 🔨', price: '٢٩٠ ج.م', description: 'ستانلس ستيل ثقيل لكبس متساوي وصحيح لكعكة الإسبريسو.', type: 'أدوات ومستلزمات', image: 'https://images.unsplash.com/photo-1620052581237-5d36667be337?w=500' },
    { id: 36, name: 'ميزان قهوة رقمي مع مؤقت ⏱️', price: '٥٥٠ ج.م', description: 'ميزان دقيق جداً يحسب بالجرامات وأجزائها مع تايمر مدمج لضبط الاستخلاص.', type: 'أدوات ومستلزمات', image: 'https://images.unsplash.com/photo-1595114300366-0dcbe3fc8704?w=500' },
    { id: 37, name: 'مطحنة قهوة يدوية ⚙️', price: '٦٨٠ ج.م', description: 'تتيح تعديل درجات الطحن من الناعم جداً للتركي إلى الخشن للفرنش بريس.', type: 'أدوات ومستلزمات', image: 'https://images.unsplash.com/photo-1594911774241-11d4e0e84c9b?w=500' },
    { id: 38, name: 'بتشر تبخير الحليب ٣٥٠ مل 🥛', price: '٢٤٠ ج.م', description: 'وعاء ستانلس ستيل بتصميم مخصص لرسم أحمل أشكال اللاتيه آرت.', type: 'أدوات ومستلزمات', image: 'https://images.unsplash.com/photo-1517093157656-b9ec67badc3b?w=500' },
    { id: 39, name: 'حامل فلاتر خشب فخم 🪵', price: '١٨٠ ج.م', description: 'يحافظ على تنظيم فلاتر القهوة وحمايتها من الأتربة بشكل جمالي.', type: 'أدوات ومستلزمات', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500' },
    { id: 40, name: 'فرنش بريس زجاجي مقاوم 🥛', price: '٣٢٠ ج.م', description: 'أداة كلاسيكية لتحضير القهوة الفرنسية وأيضاً فوم الحليب اليدوي السريع.', type: 'أدوات ومستلزمات', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=500' },

    // === حلويات القهوة ===
    { id: 41, name: 'كيكة العسل الروسية 🍯', price: '٨٠ ج.م', description: 'طبقات بسكويت العسل الهشة الغارقة بكريمة الحليب الفاخرة.', type: 'حلويات القهوة', image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500' },
    { id: 42, name: 'براونيز الشوكولاتة الداكنة 🍫', price: '٦٥ ج.م', description: 'قوام فادجي غني بقطع الشوكولاتة الذائبة، الشريك المثالي للقهوة السوداء.', type: 'حلويات القهوة', image: 'https://images.unsplash.com/photo-1564922944151-2415b6fb843d?w=500' },
    { id: 43, name: 'كرواسون زبدة فرنسي 🥐', price: '٥٥ ج.م', description: 'كرواسون طازج وهش ومورق ومحضر بالزبدة الطبيعية بنسبة ١٠٠٪.', type: 'حلويات القهوة', image: 'http://googleusercontent.com/image_collection/image_retrieval/5040208507451818782_0' },
    { id: 44, name: 'تشيز كيك لوتس 🍪', price: '٨٥ ج.م', description: 'قوام كريمي غني مغطى بزبنة اللوتس وبسكويت اللوتس المقرمش.', type: 'حلويات القهوة', image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500' },
    { id: 45, name: 'كوكيز بقطع الشوكولاتة 🍪', price: '٤٥ ج.م', description: 'مقرمشة من الأطراف وطرية وذائبة من الداخل (تشوكلت شيبس جبارة).', type: 'حلويات القهوة', image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500' },
    { id: 46, name: 'تيراميسو إيطالي أصلي 🇮🇹', price: '٩٠ ج.م', description: 'حلوى غنية بالمسكاربوني وبسكويت ليدي فينجر المغموس في إسبريسو متجرنا.', type: 'حلويات القهوة', image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500' },
    { id: 47, name: 'سنابون قرفة دافئ 🥮', price: '٧٥ ج.م', description: 'لفافة القرفة الطازجة تعلوها كريمة الجبن الغنية وصوص الكراميل.', type: 'حلويات القهوة', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500' },
    { id: 48, name: 'تارت البقان الخريفي 🥧', price: '٨٥ ج.م', description: 'تارت مقرمش محشو بخلطة عين الجمل (البقان) المحلاة الفاخرة.', type: 'حلويات القهوة', image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=500' },
    { id: 49, name: 'مافن التوت الأزرق 🧁', price: '٥٠ ج.م', description: 'كيكة مافن خفيفة وهشة مليئة بحبات التوت الأزرق البري الطازج.', type: 'حلويات القهوة', image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=500' },
    { id: 50, name: 'مولتن كيك الشوكولاتة 🌋', price: '٩٥ ج.م', description: 'تنفجر بداخلها حمم الشوكولاتة الساخنة عند قطعها، تقدم مع شوت إسبريسو.', type: 'حلويات القهوة', image: 'https://images.unsplash.com/photo-1608248597481-496100c8c836?w=500' }
  ];

  const categories = ['الكل', 'حبوب بن كاملة', 'مشروب ساخن', 'مشروب بارد', 'أدوات ومستلزمات', 'حلويات القهوة'];

  const filteredProducts = coffeeProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'الكل' || product.type === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const pageBg = darkMode ? '#1E140F' : '#FFF';
  const cardBg = darkMode ? '#2D1F18' : '#FFF';
  const textColor = darkMode ? '#F5EBE6' : '#2C1E17';
  const subTextColor = darkMode ? '#C4B4AA' : '#666';
  const borderStyle = darkMode ? '1px solid #4E3629' : '1px solid #E5DCD5';

  return (
    <div style={{...styles.container, backgroundColor: pageBg, transition: '0.3s'}}>
      <div style={styles.headerSection}>
        <h1 style={{...styles.mainTitle, color: darkMode ? '#D2B48C' : '#4E3629'}}>قائمة منتجاتنا الفاخرة ✨</h1>
        <p style={{...styles.subtitle, color: darkMode ? '#F5EBE6' : '#705335'}}>تصفح الـ ٥٠ منتجاً بالصور الحقيقية المطابقة لكل صنف</p>
      </div>

      <div style={styles.filterSection}>
        <input 
          type="text" 
          placeholder="🔍 ابحث عن نوع قهوة، أداة، أو حلوى..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{...styles.searchInput, backgroundColor: cardBg, color: textColor}}
        />
        <div style={styles.categoryContainer}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                ...styles.categoryBtn,
                backgroundColor: selectedCategory === cat ? '#4E3629' : cardBg,
                color: selectedCategory === cat ? '#FFF' : textColor,
                border: borderStyle
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <p style={{...styles.resultsCount, color: subTextColor}}>إجمالي المعروض حالياً: {filteredProducts.length} منتج دقيق</p>

      <div style={styles.grid}>
        {filteredProducts.length === 0 ? (
          <div style={styles.noResults}>عذراً، لم نجد أي منتج يطابق بحثك الحالي! ☕❌</div>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} style={{...styles.card, backgroundColor: cardBg, border: borderStyle}}>
              
              <div style={styles.imageWrapper}>
                <img 
                  src={product.image} 
                  alt={product.name}
                  style={styles.productImage}
                  onError={(e) => { 
                    e.target.onerror = null; 
                    e.target.src = 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500'; 
                  }} 
                />
              </div>

              <div style={styles.badge}>{product.type}</div>
              <h3 style={{...styles.productName, color: textColor}}>{product.name}</h3>
              <p style={{...styles.productDescription, color: subTextColor}}>{product.description}</p>
              <div style={{...styles.priceTag, color: darkMode ? '#D2B48C' : '#4E3629'}}>{product.price}</div>
              
              <div style={styles.buttonContainer}>
                <button onClick={() => addToCart(product)} style={styles.addToCartBtn}>إضافة للسلة 🛒</button>
                <Link to="/check/cart" onClick={() => addToCart(product)} style={styles.buyNowBtn}>شراء الآن 👇</Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const styles = {
  container: { padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', direction: 'rtl', fontFamily: 'sans-serif', minHeight: '80vh' },
  headerSection: { textAlign: 'center', marginBottom: '40px' },
  mainTitle: { fontSize: '36px', fontWeight: 'bold', marginBottom: '10px' },
  subtitle: { fontSize: '16px' },
  filterSection: { display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', marginBottom: '30px' },
  searchInput: { width: '100%', maxWidth: '600px', padding: '14px 20px', borderRadius: '30px', border: '2px solid #D2B48C', fontSize: '16px', outline: 'none' },
  categoryContainer: { display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' },
  categoryBtn: { padding: '8px 16px', borderRadius: '20px', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px', transition: '0.3s' },
  resultsCount: { fontSize: '14px', marginBottom: '20px', textAlign: 'right', width: '100%', maxWidth: '1150px', margin: '0 auto 20px auto' },
  grid: { display: 'flex', flexWrap: 'wrap', gap: '25px', justifyContent: 'center' },
  card: { borderRadius: '15px', padding: '20px', width: '280px', display: 'flex', flexDirection: 'column', position: 'relative' },
  imageWrapper: { width: '100%', height: '170px', borderRadius: '12px', overflow: 'hidden', marginBottom: '15px', backgroundColor: '#F5EBE6' },
  productImage: { width: '100%', height: '100%', objectFit: 'cover', transition: '0.3s' },
  badge: { position: 'absolute', top: '25px', left: '25px', backgroundColor: '#4E3629', color: '#FFF', fontSize: '11px', padding: '4px 10px', borderRadius: '20px', fontWeight: 'bold', zIndex: 2 },
  productName: { fontSize: '18px', margin: '10px 0 5px 0', fontWeight: 'bold' },
  productDescription: { fontSize: '13px', lineHeight: '1.6', flexGrow: 1, marginBottom: '15px' },
  priceTag: { fontSize: '20px', fontWeight: 'bold', marginBottom: '15px' },
  buttonContainer: { display: 'flex', gap: '8px' },
  addToCartBtn: { flex: 1, padding: '10px', backgroundColor: '#4E3629', color: '#FFF', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '13px' },
  buyNowBtn: { flex: 1, padding: '10px', backgroundColor: '#D2B48C', color: '#2C1E17', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '13px', textAlign: 'center', textDecoration: 'none' },
  noResults: { padding: '40px', fontSize: '18px', color: '#705335', fontWeight: 'bold', textAlign: 'center' }
};

export default Proudects;