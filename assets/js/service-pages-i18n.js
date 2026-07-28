(() => {
  'use strict';
  const page=(location.pathname.split('/').pop()||'').toLowerCase();
  if(!['personal-branding.html','website-services.html'].includes(page)) return;

  const rows=[];
  const add=(selector,pairs,mode='html')=>{
    const els=[...document.querySelectorAll(selector)];
    const list=Array.isArray(pairs)?pairs:[pairs];
    els.forEach((el,i)=>{
      const pair=list[i]||(list.length===1?list[0]:null);
      if(pair) rows.push({el,pair,mode});
    });
  };

  if(page==='personal-branding.html'){
    add('.brand-pillars strong',[
      {en:'Strategic<br>Positioning',th:'การวางตำแหน่ง<br>เชิงกลยุทธ์'},
      {en:'Compelling<br>Content',th:'คอนเทนต์<br>ที่น่าสนใจ'},
      {en:'Consistent<br>Presence',th:'ภาพลักษณ์<br>ที่สม่ำเสมอ'},
      {en:'Meaningful<br>Influence',th:'อิทธิพล<br>ที่มีความหมาย'}
    ]);
    add('.service-packages-section .service-section-title h2',{en:'Choose the level of support you need',th:'เลือกระดับบริการที่เหมาะกับคุณ'});
    add('.service-packages-section .service-section-title p',{en:'Choose the level of support that fits your goals',th:'เลือกระดับบริการที่เหมาะกับเป้าหมายของคุณ'});
    add('.platform-card h3',[
      {en:'LinkedIn<br>Professional Presence',th:'ตัวตนมืออาชีพ<br>บน LinkedIn'},
      {en:'Facebook +<br>Instagram Presence',th:'ภาพลักษณ์บน<br>Facebook + Instagram'},
      {en:'All Platforms',th:'ทุกแพลตฟอร์ม'}
    ]);
    add('.platform-card dt',[
      {en:'1 month',th:'1 เดือน'},{en:'3 months',th:'3 เดือน'},
      {en:'1 month',th:'1 เดือน'},{en:'3 months',th:'3 เดือน'},
      {en:'1 month',th:'1 เดือน'},{en:'3 months',th:'3 เดือน'}
    ],'text');
    add('.platform-card dd small',[
      {en:'THB',th:'บาท'},{en:'THB',th:'บาท'},{en:'THB',th:'บาท'},
      {en:'THB',th:'บาท'},{en:'THB',th:'บาท'},{en:'THB',th:'บาท'}
    ],'text');
    add('.platform-card > p:last-child',[
      {en:'Build a professional LinkedIn presence that helps people understand you faster',th:'สร้างตัวตนมืออาชีพบน LinkedIn ให้คนเข้าใจคุณเร็วขึ้น'},
      {en:'Align your image and communication across social platforms',th:'ทำให้ภาพลักษณ์และการสื่อสารบนโซเชียลไปในทิศทางเดียวกัน'},
      {en:'Build a consistent personal-brand foundation across all three platforms',th:'วางรากฐานแบรนด์ส่วนบุคคลครบทั้ง 3 ช่องทาง'}
    ]);
    add('.transformation-card .floating-badge',{en:'Premium signature offer',th:'แพ็กเกจซิกเนเจอร์ระดับพรีเมียม'});
    add('.transformation-card h3',{en:'Executive Personal Branding Transformation',th:'การยกระดับแบรนด์บุคคลสำหรับผู้บริหาร'});
    add('.transformation-card > p',{en:'A complete transformation in 90 days',th:'ครบวงจรภายใน 90 วัน'});
    add('.transformation-card .service-price',{en:'90 days <small>| Custom Proposal</small>',th:'90 วัน <small>| ประเมินตามขอบเขตงาน</small>'});
    add('.transformation-card li',[
      {en:'Clear leadership positioning',th:'จุดยืนผู้นำที่ชัดเจน'},
      {en:'A memorable narrative',th:'เรื่องเล่าที่คนจดจำได้'},
      {en:'An executive-level personal website',th:'เว็บไซต์ส่วนตัวระดับผู้บริหาร'},
      {en:'Credibility-building content',th:'คอนเทนต์ที่สร้างความน่าเชื่อถือ'},
      {en:'A consistent presence across every channel',th:'ภาพลักษณ์ทุกช่องทางเป็นระบบเดียวกัน'},
      {en:'A practical 90-day roadmap',th:'แผน 90 วันที่นำไปใช้ต่อได้'}
    ]);
    add('.branding-outcomes .service-section-title h2',{en:'What you will get',th:'สิ่งที่คุณจะได้รับ'});
    add('.branding-outcomes .service-section-title p',{en:'Clear outcomes at a glance',th:'อ่านแล้วเข้าใจทันที'});
    add('.outcome-grid strong',[
      {en:'People understand you faster',th:'คนเข้าใจคุณเร็วขึ้น'},
      {en:'A business-ready profile',th:'โปรไฟล์พร้อมใช้ทางธุรกิจ'},
      {en:'Every channel moves in one direction',th:'ทุกช่องทางไปทางเดียวกัน'},
      {en:'Ready-to-publish content',th:'มีคอนเทนต์พร้อมโพสต์'},
      {en:'A clear monthly plan',th:'มีแผนชัดเจนรายเดือน'},
      {en:'Know what to do next',th:'รู้ว่าควรทำอะไรต่อ'}
    ]);
    add('.outcome-grid p',[
      {en:'Communicate your identity clearly within seconds',th:'สื่อสารตัวตนชัดเจนในไม่กี่วินาที'},
      {en:'A professional profile that builds credibility',th:'โปรไฟล์มืออาชีพที่สร้างความน่าเชื่อถือ'},
      {en:'A consistent brand across platforms',th:'แบรนด์สอดคล้องทุกแพลตฟอร์ม'},
      {en:'Quality content ready for consistent publishing',th:'คอนเทนต์คุณภาพพร้อมลงอย่างต่อเนื่อง'},
      {en:'Know what to do each month',th:'รู้แนวทางและสิ่งที่ต้องทำในแต่ละเดือน'},
      {en:'Move forward with clear direction and confidence',th:'มีทิศทางชัดเจน ก้าวไปอย่างมั่นใจ'}
    ]);
    add('.service-bottom-cta h2',{en:'Ready to build your personal brand?',th:'พร้อมเริ่มต้นสร้างแบรนด์ของคุณ?'});
    add('.service-bottom-cta h2 + p',{en:'Schedule a conversation to assess your goals and choose the right package',th:'นัดคุยเพื่อประเมินเป้าหมายและเลือกแพ็กเกจที่เหมาะกับคุณ'});
    add('.service-bottom-cta .btn.light',{en:'Book a Consultation',th:'นัดหมายปรึกษา'});
  }

  if(page==='website-services.html'){
    add('.hero-check-list li',[
      {en:'Beautifully designed and easy to use',th:'ออกแบบสวย ใช้งานง่าย'},
      {en:'Responsive across devices and built for speed',th:'รองรับทุกอุปกรณ์ และทำงานได้เร็ว'},
      {en:'Build credibility and create more business opportunities',th:'ช่วยสร้างความน่าเชื่อถือ และเพิ่มโอกาสทางธุรกิจ'}
    ]);
    add('.service-packages-section .service-section-title h2',{en:'Choose the level of support you need',th:'เลือกระดับบริการที่เหมาะกับคุณ'});
    add('.service-packages-section .service-section-title p',{en:'Choose the level of support that fits your goals',th:'เลือกระดับบริการที่เหมาะกับเป้าหมายของคุณ'});
    add('.website-price-card h3',[
      {en:'Starter<br>One-Page Website',th:'เว็บไซต์เริ่มต้น<br>แบบหน้าเดียว'},
      {en:'Business Website<br>3–5 Pages',th:'เว็บไซต์ธุรกิจ<br>3–5 หน้า'},
      {en:'Bilingual / Custom<br>Website',th:'เว็บไซต์สองภาษา /<br>ออกแบบเฉพาะ'}
    ]);
    add('.website-price-card .service-prefix',[
      {en:'Starting from',th:'เริ่มต้น'},{en:'Starting from',th:'เริ่มต้น'},{en:'Starting from',th:'เริ่มต้น'}
    ],'text');
    add('.website-price-card .service-price small',[
      {en:'THB',th:'บาท'},{en:'THB',th:'บาท'},{en:'THB',th:'บาท'}
    ],'text');
    add('.website-price-card .service-duration',{en:'or quoted based on project scope',th:'หรือประเมินตามขอบเขตงาน'});
    add('.website-price-card:nth-child(1) li',[
      {en:'One-page website in either Thai or English',th:'เว็บไซต์ 1 หน้า (ไทย หรือ อังกฤษ 1 ภาษา)'},
      {en:'About / Services / Contact',th:'About / Services / Contact'},
      {en:'LINE and social media buttons',th:'ปุ่ม LINE และ Social Media'},
      {en:'Mobile responsive',th:'รองรับมือถือ (Mobile Responsive)'},
      {en:'Basic SEO',th:'SEO พื้นฐาน'},
      {en:'Published and ready to use',th:'นำขึ้นใช้งานจริง'}
    ]);
    add('.website-price-card:nth-child(2) li',[
      {en:'3–5 page website',th:'เว็บไซต์ 3–5 หน้า'},
      {en:'Clear business and service structure',th:'โครงสร้างธุรกิจและบริการชัดเจน'},
      {en:'Portfolio / selected work',th:'Portfolio / ผลงาน'},
      {en:'Contact / map / LINE',th:'Contact / แผนที่ / LINE'},
      {en:'Mobile responsive',th:'รองรับมือถือ (Mobile Responsive)'},
      {en:'Basic SEO',th:'SEO พื้นฐาน'},
      {en:'Published and ready to use',th:'นำขึ้นใช้งานจริง'}
    ]);
    add('.website-price-card:nth-child(3) .floating-badge',{en:'Premium / Most Complete',th:'พรีเมียม / ครบที่สุด'});
    add('.website-price-card:nth-child(3) li',[
      {en:'Bilingual website (Thai–English)',th:'เว็บไซต์หลายภาษา (ไทย–อังกฤษ)'},
      {en:'Multiple pages / custom structure',th:'หลายหน้า / โครงสร้างเฉพาะ'},
      {en:'Portfolio / projects / custom functions',th:'Portfolio / Projects / ระบบพิเศษ'},
      {en:'Mobile responsive',th:'รองรับมือถือ (Mobile Responsive)'},
      {en:'Basic SEO',th:'SEO พื้นฐาน'},
      {en:'Published and ready to use',th:'นำขึ้นใช้งานจริง'}
    ]);
    add('.service-note',{en:'* Domain and annual renewal fees are not included. New copywriting, photography, booking systems, payment systems, or special functions are quoted separately.',th:'* ไม่รวมค่าโดเมนและค่าต่ออายุรายปี / งานเขียนเนื้อหาใหม่, ถ่ายภาพ, ระบบจอง, ระบบชำระเงิน หรือฟังก์ชันพิเศษ ประเมินเพิ่ม'});
    add('.website-care-section .service-section-title h2',{en:'Website Care',th:'Website Care'});
    add('.website-care-section .service-section-title p',{en:'Monthly website care',th:'บริการดูแลเว็บไซต์รายเดือน'});
    add('.care-grid p',[
      {en:'Website monitoring and basic troubleshooting',th:'ตรวจสอบเว็บไซต์และแก้ปัญหาการใช้งานพื้นฐาน'},
      {en:'Website care with up to two content or image updates per month',th:'ดูแลเว็บไซต์ พร้อมแก้ไขข้อมูลหรือภาพไม่เกิน 2 ครั้ง / เดือน'},
      {en:'For websites with frequent changes to information, products, pricing, or promotions',th:'เว็บไซต์ที่มีการเปลี่ยนข้อมูล สินค้า ราคา หรือโปรโมชั่นบ่อย'}
    ]);
    add('.care-grid strong',[
      {en:'500 THB / month',th:'500 บาท / เดือน'},
      {en:'1,500 THB / month',th:'1,500 บาท / เดือน'},
      {en:'Custom Proposal',th:'ประเมินตามขอบเขตงาน'}
    ]);
    add('.service-bottom-cta h2',{en:'Let your website work for you 24/7',th:'ให้เว็บไซต์ทำงานแทนคุณ 24 ชั่วโมง'});
    add('.service-bottom-cta h2 + p',{en:'Start building the right website for you or your business',th:'เริ่มต้นพัฒนาเว็บไซต์ที่ใช่ สำหรับคุณหรือธุรกิจของคุณ'});
    add('.service-bottom-cta .btn.light',{en:'Book a Consultation',th:'นัดหมายปรึกษา'});
  }

  const apply=lang=>{
    lang=lang==='th'?'th':'en';
    rows.forEach(({el,pair,mode})=>{
      if(mode==='text') el.textContent=pair[lang];
      else el.innerHTML=pair[lang];
    });
  };

  const current=()=>document.documentElement.dataset.language||(()=>{try{return localStorage.getItem('patsphere-language')}catch(_){return null}})()||'en';
  apply(current());
  new MutationObserver(()=>apply(current())).observe(document.documentElement,{attributes:true,attributeFilter:['data-language']});
  document.addEventListener('click',e=>{if(e.target.closest('.pa-lang button'))setTimeout(()=>apply(current()),0);});
})();
