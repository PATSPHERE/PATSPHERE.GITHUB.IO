(() => {
'use strict';
const KEY='patsphere-language';
const page=(location.pathname.split('/').pop()||'index.html').toLowerCase();
const rows=[];
const add=(selector,pairs,mode='html')=>{const els=[...document.querySelectorAll(selector)],list=Array.isArray(pairs)?pairs:[pairs];els.forEach((el,i)=>{const pair=list[i]||(list.length===1?list[0]:null);if(pair)rows.push({el,pair,mode});});};
const P=(en,th)=>({en,th});

add('.main-nav a[href="index.html"]',P('Home','หน้าแรก'));
add('.main-nav a[href="about.html"]',P('About','เกี่ยวกับ'));
add('.main-nav a[href="services.html"]',P('Services','บริการ'));
add('.main-nav a[href="projects.html"]',P('Projects','ผลงาน'));
add('.main-nav a[href="reflections.html"]',P('Reflections','บทความ'));
add('.main-nav a[href="contact.html"]',P('Contact','ติดต่อ'));
add('.nav-consult',P('Book a Consultation','นัดหมายปรึกษา'));
add('.footer-grid h4:first-of-type',P('Focus','ความเชี่ยวชาญ'));
add('.footer-grid h4:last-of-type',P('Contact','ติดต่อ'));

if(page==='index.html'){
 add('.lock-hero-copy h1',P('Strategy.<br>Identity.<br>Impact.','กลยุทธ์<br>ตัวตน<br>ผลลัพธ์'));
 add('.lock-hero-copy .lock-role',P('Business Strategist · Executive Advisor · AI &amp; Business Transformation','นักกลยุทธ์ธุรกิจ · ที่ปรึกษาผู้บริหาร · AI และการเปลี่ยนผ่านธุรกิจ'));
 add('.lock-hero-copy > p:not(.eyebrow):not(.lock-role)',P('I partner with leaders, founders, and businesses<br>to create clarity, build influence, and drive meaningful growth.','ฉันทำงานร่วมกับผู้นำ ผู้ก่อตั้ง และธุรกิจ<br>เพื่อสร้างความชัดเจน เสริมอิทธิพล และผลักดันการเติบโตอย่างมีความหมาย'));
 add('.lock-hero-copy .btn.primary',P('Discover Services','ดูบริการ'));
 add('.lock-expertise h3',[P('Business Strategy','กลยุทธ์ธุรกิจ'),P('Executive Advisory','ที่ปรึกษาผู้บริหาร'),P('AI &amp; Business Transformation','AI และการเปลี่ยนผ่านธุรกิจ'),P('Healthcare &amp; Wellness','สุขภาพและเวลเนส')]);
 add('.lock-section-title h2',P('Core Services','บริการหลัก'));
}
if(page==='about.html'){
 add('.about-lock-intro .eyebrow',P('ABOUT PATSPHERE','เกี่ยวกับ PATSPHERE'));
 add('.about-lock-intro h1',P('Clarity changes how<br>we decide, communicate,<br>and move forward.','ความชัดเจนเปลี่ยนวิธีที่เรา<br>ตัดสินใจ สื่อสาร<br>และก้าวไปข้างหน้า'));
 add('.about-story-grid article:first-child h2',P('My Story','เรื่องราวของฉัน'));
 add('.about-story-grid article:last-child h2',P('What Shapes My Work','สิ่งที่หล่อหลอมการทำงาน'));
 add('.about-experience-head h2',P('Selected Experience','ประสบการณ์ที่คัดเลือก'));
 add('.about-principles-title',P('Core Principles','หลักคิดสำคัญ'));
 add('.about-lock-cta h2',P('Let’s turn complexity<br>into a clearer direction.','เปลี่ยนความซับซ้อน<br>ให้เป็นทิศทางที่ชัดเจนขึ้น'));
 add('.about-lock-cta .btn.primary',P('Book a Consultation →','นัดหมายปรึกษา →'));
}
if(page==='services.html'){
 add('.page-hero .eyebrow',P('SERVICES','บริการ'));
 add('.page-hero h1',P('Focused support for clearer decisions, stronger presence, and practical execution.','การสนับสนุนที่ตรงจุด เพื่อการตัดสินใจที่ชัดขึ้น ภาพลักษณ์ที่แข็งแรงขึ้น และการลงมือทำได้จริง'));
 add('.page-hero .lead',P('Choose a starting point based on the outcome you need now.','เลือกจุดเริ่มต้นจากผลลัพธ์ที่คุณต้องการในตอนนี้'));
 add('.service-overview h2',[P('Consulting &amp; Advisory','การให้คำปรึกษาและคำแนะนำเชิงกลยุทธ์'),P('Executive Personal Branding','การสร้างแบรนด์บุคคลสำหรับผู้บริหาร'),P('Website Services','บริการเว็บไซต์')]);
 add('.service-overview .btn',P('View packages','ดูแพ็กเกจ'));
}
if(page==='projects.html'){
 add('.page-hero .eyebrow',P('SELECTED EXPERIENCE','ประสบการณ์ที่คัดเลือก'));
 add('.page-hero h1',P('Experience shaped across four connected areas.','ประสบการณ์ที่หล่อหลอมจาก 4 ด้านที่เชื่อมโยงกัน'));
 add('.page-hero .lead',P('Healthcare and wellness, executive positioning, strategic transformation, and knowledge sharing.','สุขภาพและเวลเนส การวางตำแหน่งผู้บริหาร การเปลี่ยนผ่านเชิงกลยุทธ์ และการแบ่งปันความรู้'));
 add('.locked-project-copy h2',[P('Healthcare &amp; Wellness Business Development &amp; Digital Transformation','การพัฒนาธุรกิจสุขภาพและเวลเนส และการเปลี่ยนผ่านดิจิทัล'),P('Executive Positioning &amp; Personal Branding','การวางตำแหน่งผู้บริหารและการสร้างแบรนด์บุคคล'),P('Strategic Projects &amp; AI Adoption','โครงการเชิงกลยุทธ์และการนำ AI มาใช้'),P('Speaking &amp; Knowledge Sharing','การบรรยายและการแบ่งปันความรู้')]);
 add('.locked-project-link',P('View details →','ดูรายละเอียด →'));
}
if(page==='reflections.html'){
 add('.reflections-hero .eyebrow',P('REFLECTIONS &amp; INSIGHTS','บทความและมุมมอง'));
 add('.reflections-hero h1',P('Thoughts shaped by experience, observation, and the work behind the work.','ความคิดที่ตกผลึกจากประสบการณ์ การสังเกต และเบื้องหลังของการทำงาน'));
 add('.reflections-hero .lead',P('Think deeper · Act wiser · Grow together','คิดให้ลึก · ลงมืออย่างมีปัญญา · เติบโตไปด้วยกัน'));
 add('.soft .section-head h2',P('Browse by theme.','เลือกอ่านตามหัวข้อ'));
}
if(page==='contact.html'){
 add('.contact-hero .eyebrow',P('CONTACT','ติดต่อ'));
 add('.contact-hero h1',P('Start with the situation. We’ll identify the right next step.','เริ่มจากสถานการณ์ของคุณ แล้วเราจะช่วยหาขั้นตอนถัดไปที่เหมาะสม'));
 add('.contact-hero .lead',P('For advisory, personal branding, website services, speaking, and project discussions.','สำหรับการปรึกษา การสร้างแบรนด์บุคคล บริการเว็บไซต์ งานบรรยาย และการพูดคุยโครงการ'));
 add('.contact-options h3',[P('Discovery Conversation','การพูดคุยเบื้องต้น'),P('Strategic Consultation','การปรึกษาเชิงกลยุทธ์'),P('Project Enquiry','สอบถามโครงการ')]);
 add('.contact-line-button',P('ADD LINE OA','เพิ่ม LINE OA'));
}
if(page==='consulting.html'){
 add('.service-hero-copy h1',P('Clarity for<br>Complex Decisions.','ความชัดเจนสำหรับ<br>การตัดสินใจที่ซับซ้อน'));
 add('.service-hero-copy > p',P('PATSPHERE helps leaders, founders, and business owners think through business direction, positioning, service ideas, growth questions, and strategic next steps.','PATSPHERE ช่วยผู้นำ ผู้ก่อตั้ง และเจ้าของธุรกิจคิดอย่างเป็นระบบเรื่องทิศทางธุรกิจ การวางตำแหน่ง แนวคิดบริการ การเติบโต และขั้นตอนเชิงกลยุทธ์ถัดไป'));
 add('.service-packages-section .service-section-title h2',P('Choose the level of support you need','เลือกระดับบริการที่เหมาะกับคุณ'));
 add('.service-benefit-band h2',P('What you<br>will get','สิ่งที่คุณ<br>จะได้รับ'));
 add('.service-process-section h2',P('How I work','วิธีการทำงาน'));
 add('.service-bottom-cta h2',P('Not sure which level is right for you?','ยังไม่แน่ใจว่าระดับบริการใดเหมาะกับคุณ?'));
}
if(page==='personal-branding.html'){
 add('.service-hero-copy .eyebrow',P('PERSONAL BRANDING SERVICE','บริการสร้างแบรนด์บุคคล'));
 add('.service-hero-copy h1',P('Executive<br>Personal Branding','การสร้างแบรนด์บุคคล<br>สำหรับผู้บริหาร'));
 add('.service-hero-copy .service-tagline',P('Your Leadership. Your Story. Your Influence.','ภาวะผู้นำของคุณ เรื่องราวของคุณ อิทธิพลของคุณ'));
 add('.service-hero-copy > p:not(.eyebrow):not(.service-tagline)',P('We build a powerful personal brand that positions you as a trusted leader, opens doors to new opportunities, and creates lasting impact.','เราสร้างแบรนด์บุคคลที่แข็งแรง เพื่อวางตำแหน่งคุณให้เป็นผู้นำที่น่าเชื่อถือ เปิดประตูสู่โอกาสใหม่ และสร้างผลลัพธ์ที่ยั่งยืน'));
 add('.brand-pillars strong',[P('Strategic<br>Positioning','การวางตำแหน่ง<br>เชิงกลยุทธ์'),P('Compelling<br>Content','คอนเทนต์<br>ที่น่าสนใจ'),P('Consistent<br>Presence','ภาพลักษณ์<br>ที่สม่ำเสมอ'),P('Meaningful<br>Influence','อิทธิพล<br>ที่มีความหมาย')]);
 add('.service-packages-section .service-section-title h2',P('Choose the level of support you need','เลือกระดับบริการที่เหมาะกับคุณ'));
 add('.service-packages-section .service-section-title p',P('Choose the level of support that fits your goals','เลือกระดับบริการที่เหมาะกับเป้าหมายของคุณ'));
 add('.platform-card h3',[P('LinkedIn<br>Professional Presence','ตัวตนมืออาชีพ<br>บน LinkedIn'),P('Facebook +<br>Instagram Presence','ภาพลักษณ์บน<br>Facebook + Instagram'),P('All Platforms','ทุกแพลตฟอร์ม')]);
 add('.platform-card dt',[P('1 month','1 เดือน'),P('3 months','3 เดือน'),P('1 month','1 เดือน'),P('3 months','3 เดือน'),P('1 month','1 เดือน'),P('3 months','3 เดือน')],'text');
 add('.platform-card dd small',[P('THB','บาท'),P('THB','บาท'),P('THB','บาท'),P('THB','บาท'),P('THB','บาท'),P('THB','บาท')],'text');
 add('.platform-card > p:last-child',[P('Build a professional LinkedIn presence that helps people understand you faster','สร้างตัวตนมืออาชีพบน LinkedIn ให้คนเข้าใจคุณเร็วขึ้น'),P('Align your image and communication across social platforms','ทำให้ภาพลักษณ์และการสื่อสารบนโซเชียลไปในทิศทางเดียวกัน'),P('Build a consistent personal-brand foundation across all three platforms','วางรากฐานแบรนด์ส่วนบุคคลครบทั้ง 3 ช่องทาง')]);
 add('.transformation-card .floating-badge',P('Premium signature offer','แพ็กเกจซิกเนเจอร์ระดับพรีเมียม'));
 add('.transformation-card h3',P('Executive Personal Branding Transformation','การยกระดับแบรนด์บุคคลสำหรับผู้บริหาร'));
 add('.transformation-card > p',P('A complete transformation in 90 days','ครบวงจรภายใน 90 วัน'));
 add('.transformation-card .service-price',P('90 days <small>| Custom Proposal</small>','90 วัน <small>| ประเมินตามขอบเขตงาน</small>'));
 add('.transformation-card li',[P('Clear leadership positioning','จุดยืนผู้นำที่ชัดเจน'),P('A memorable narrative','เรื่องเล่าที่คนจดจำได้'),P('An executive-level personal website','เว็บไซต์ส่วนตัวระดับผู้บริหาร'),P('Credibility-building content','คอนเทนต์ที่สร้างความน่าเชื่อถือ'),P('A consistent presence across every channel','ภาพลักษณ์ทุกช่องทางเป็นระบบเดียวกัน'),P('A practical 90-day roadmap','แผน 90 วันที่นำไปใช้ต่อได้')]);
 add('.branding-outcomes .service-section-title h2',P('What you will get','สิ่งที่คุณจะได้รับ'));
 add('.branding-outcomes .service-section-title p',P('Clear outcomes at a glance','อ่านแล้วเข้าใจทันที'));
 add('.outcome-grid strong',[P('People understand you faster','คนเข้าใจคุณเร็วขึ้น'),P('A business-ready profile','โปรไฟล์พร้อมใช้ทางธุรกิจ'),P('Every channel moves in one direction','ทุกช่องทางไปทางเดียวกัน'),P('Ready-to-publish content','มีคอนเทนต์พร้อมโพสต์'),P('A clear monthly plan','มีแผนชัดเจนรายเดือน'),P('Know what to do next','รู้ว่าควรทำอะไรต่อ')]);
 add('.outcome-grid p',[P('Communicate your identity clearly within seconds','สื่อสารตัวตนชัดเจนในไม่กี่วินาที'),P('A professional profile that builds credibility','โปรไฟล์มืออาชีพที่สร้างความน่าเชื่อถือ'),P('A consistent brand across platforms','แบรนด์สอดคล้องทุกแพลตฟอร์ม'),P('Quality content ready for consistent publishing','คอนเทนต์คุณภาพพร้อมลงอย่างต่อเนื่อง'),P('Know what to do each month','รู้แนวทางและสิ่งที่ต้องทำในแต่ละเดือน'),P('Move forward with clear direction and confidence','มีทิศทางชัดเจน ก้าวไปอย่างมั่นใจ')]);
 add('.service-bottom-cta h2',P('Ready to build your personal brand?','พร้อมเริ่มต้นสร้างแบรนด์ของคุณ?'));
 add('.service-bottom-cta h2 + p',P('Schedule a conversation to assess your goals and choose the right package','นัดคุยเพื่อประเมินเป้าหมายและเลือกแพ็กเกจที่เหมาะกับคุณ'));
 add('.service-bottom-cta .btn.light',P('Book a Consultation','นัดหมายปรึกษา'));
}
if(page==='website-services.html'){
 add('.service-hero-copy .eyebrow',P('WEBSITE SERVICE','บริการเว็บไซต์'));
 add('.service-hero-copy h1',P('Your Professional<br>Presence, Online.','ตัวตนมืออาชีพของคุณ<br>บนโลกออนไลน์'));
 add('.service-hero-copy .service-tagline',P('A professional website that clearly communicates you and your business','เว็บไซต์ที่สื่อสารตัวตนและธุรกิจของคุณได้อย่างมืออาชีพ'));
 add('.hero-check-list li',[P('Beautifully designed and easy to use','ออกแบบสวย ใช้งานง่าย'),P('Responsive across devices and built for speed','รองรับทุกอุปกรณ์ และทำงานได้เร็ว'),P('Build credibility and create more business opportunities','ช่วยสร้างความน่าเชื่อถือ และเพิ่มโอกาสทางธุรกิจ')]);
 add('.service-packages-section .service-section-title h2',P('Choose the level of support you need','เลือกระดับบริการที่เหมาะกับคุณ'));
 add('.service-packages-section .service-section-title p',P('Choose the level of support that fits your goals','เลือกระดับบริการที่เหมาะกับเป้าหมายของคุณ'));
 add('.website-price-card h3',[P('Starter<br>One-Page Website','เว็บไซต์เริ่มต้น<br>แบบหน้าเดียว'),P('Business Website<br>3–5 Pages','เว็บไซต์ธุรกิจ<br>3–5 หน้า'),P('Bilingual / Custom<br>Website','เว็บไซต์สองภาษา /<br>ออกแบบเฉพาะ')]);
 add('.website-price-card .service-prefix',[P('Starting from','เริ่มต้น'),P('Starting from','เริ่มต้น'),P('Starting from','เริ่มต้น')],'text');
 add('.website-price-card .service-price small',[P('THB','บาท'),P('THB','บาท'),P('THB','บาท')],'text');
 add('.website-price-card .service-duration',P('or quoted based on project scope','หรือประเมินตามขอบเขตงาน'));
 add('.website-price-card:nth-child(1) li',[P('One-page website in either Thai or English','เว็บไซต์ 1 หน้า (ไทย หรือ อังกฤษ 1 ภาษา)'),P('About / Services / Contact','About / Services / Contact'),P('LINE and social media buttons','ปุ่ม LINE และ Social Media'),P('Mobile responsive','รองรับมือถือ (Mobile Responsive)'),P('Basic SEO','SEO พื้นฐาน'),P('Published and ready to use','นำขึ้นใช้งานจริง')]);
 add('.website-price-card:nth-child(2) li',[P('3–5 page website','เว็บไซต์ 3–5 หน้า'),P('Clear business and service structure','โครงสร้างธุรกิจและบริการชัดเจน'),P('Portfolio / selected work','Portfolio / ผลงาน'),P('Contact / map / LINE','Contact / แผนที่ / LINE'),P('Mobile responsive','รองรับมือถือ (Mobile Responsive)'),P('Basic SEO','SEO พื้นฐาน'),P('Published and ready to use','นำขึ้นใช้งานจริง')]);
 add('.website-price-card:nth-child(3) .floating-badge',P('Premium / Most Complete','พรีเมียม / ครบที่สุด'));
 add('.website-price-card:nth-child(3) li',[P('Bilingual website (Thai–English)','เว็บไซต์หลายภาษา (ไทย–อังกฤษ)'),P('Multiple pages / custom structure','หลายหน้า / โครงสร้างเฉพาะ'),P('Portfolio / projects / custom functions','Portfolio / Projects / ระบบพิเศษ'),P('Mobile responsive','รองรับมือถือ (Mobile Responsive)'),P('Basic SEO','SEO พื้นฐาน'),P('Published and ready to use','นำขึ้นใช้งานจริง')]);
 add('.service-note',P('* Domain and annual renewal fees are not included. New copywriting, photography, booking systems, payment systems, or special functions are quoted separately.','* ไม่รวมค่าโดเมนและค่าต่ออายุรายปี / งานเขียนเนื้อหาใหม่, ถ่ายภาพ, ระบบจอง, ระบบชำระเงิน หรือฟังก์ชันพิเศษ ประเมินเพิ่ม'));
 add('.website-care-section .service-section-title p',P('Monthly website care','บริการดูแลเว็บไซต์รายเดือน'));
 add('.care-grid p',[P('Website monitoring and basic troubleshooting','ตรวจสอบเว็บไซต์และแก้ปัญหาการใช้งานพื้นฐาน'),P('Website care with up to two content or image updates per month','ดูแลเว็บไซต์ พร้อมแก้ไขข้อมูลหรือภาพไม่เกิน 2 ครั้ง / เดือน'),P('For websites with frequent changes to information, products, pricing, or promotions','เว็บไซต์ที่มีการเปลี่ยนข้อมูล สินค้า ราคา หรือโปรโมชั่นบ่อย')]);
 add('.care-grid strong',[P('500 THB / month','500 บาท / เดือน'),P('1,500 THB / month','1,500 บาท / เดือน'),P('Custom Proposal','ประเมินตามขอบเขตงาน')]);
 add('.service-bottom-cta h2',P('Let your website work for you 24/7','ให้เว็บไซต์ทำงานแทนคุณ 24 ชั่วโมง'));
 add('.service-bottom-cta h2 + p',P('Start building the right website for you or your business','เริ่มต้นพัฒนาเว็บไซต์ที่ใช่ สำหรับคุณหรือธุรกิจของคุณ'));
 add('.service-bottom-cta .btn.light',P('Book a Consultation','นัดหมายปรึกษา'));
}

const style=document.createElement('style');style.textContent='.header-inner{position:relative}.pa-lang{display:inline-flex;gap:2px;margin-left:auto;margin-right:12px;padding:3px;border:1px solid rgba(198,150,67,.7);border-radius:999px;background:rgba(255,255,255,.08);z-index:15}.pa-lang button{border:0;border-radius:999px;background:transparent;color:#fff;min-width:35px;padding:6px 8px;font:700 11px Arial;cursor:pointer}.pa-lang button[aria-pressed="true"]{background:#c69643;color:#071d35}@media(max-width:980px){.pa-lang{position:absolute;right:58px;top:16px;margin:0}}';document.head.appendChild(style);
const switcher=()=>{const h=document.querySelector('.header-inner');if(!h||h.querySelector('.pa-lang'))return;const d=document.createElement('div');d.className='pa-lang';d.setAttribute('role','group');d.setAttribute('aria-label','Language');d.innerHTML='<button type="button" data-lang="th">TH</button><button type="button" data-lang="en">EN</button>';h.insertBefore(d,h.querySelector('.nav-toggle')||h.querySelector('.main-nav'));d.addEventListener('click',e=>{const b=e.target.closest('button[data-lang]');if(b)apply(b.dataset.lang);});};
const titles={'index.html':P('Home | PATSPHERE Advisory','หน้าแรก | PATSPHERE Advisory'),'about.html':P('About | PATSPHERE Advisory','เกี่ยวกับ | PATSPHERE Advisory'),'services.html':P('Services | PATSPHERE Advisory','บริการ | PATSPHERE Advisory'),'projects.html':P('Selected Experience | PATSPHERE Advisory','ประสบการณ์ที่คัดเลือก | PATSPHERE Advisory'),'reflections.html':P('Reflections & Insights | PATSPHERE Advisory','บทความและมุมมอง | PATSPHERE Advisory'),'contact.html':P('Contact | PATSPHERE Advisory','ติดต่อ | PATSPHERE Advisory'),'consulting.html':P('Consulting & Advisory | PATSPHERE Advisory','การให้คำปรึกษา | PATSPHERE Advisory'),'personal-branding.html':P('Executive Personal Branding | PATSPHERE Advisory','การสร้างแบรนด์บุคคลสำหรับผู้บริหาร | PATSPHERE Advisory'),'website-services.html':P('Website Services | PATSPHERE Advisory','บริการเว็บไซต์ | PATSPHERE Advisory')};
const apply=lang=>{lang=lang==='th'?'th':'en';document.documentElement.lang=lang;document.documentElement.dataset.language=lang;try{localStorage.setItem(KEY,lang)}catch(_){ }rows.forEach(({el,pair,mode})=>{if(mode==='text')el.textContent=pair[lang];else el.innerHTML=pair[lang];});document.querySelectorAll('.pa-lang button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===lang)));if(titles[page])document.title=titles[page][lang];};
switcher();let saved=null;try{saved=localStorage.getItem(KEY)}catch(_){ }const initial=['th','en'].includes(saved)?saved:((navigator.language||'').toLowerCase().startsWith('th')?'th':'en');apply(initial);
})();