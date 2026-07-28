(() => {
  'use strict';
  const page=(location.pathname.split('/').pop()||'').toLowerCase();
  const supported=new Set(['consulting.html','project-healthcare-wellness.html','project-executive-positioning.html','project-ai-adoption.html','project-speaking.html']);
  if(!supported.has(page)) return;
  const rows=[];
  const P=(en,th)=>({en,th});
  const add=(selector,pairs,mode='html')=>{const els=[...document.querySelectorAll(selector)],list=Array.isArray(pairs)?pairs:[pairs];els.forEach((el,i)=>{const pair=list[i]||(list.length===1?list[0]:null);if(pair)rows.push({el,pair,mode});});};
  if (page === 'consulting.html') {
    add('.service-breadcrumb a[href="index.html"]', P('Home', 'หน้าแรก'));
    add('.service-breadcrumb a[href="services.html"]', P('Services', 'บริการ'));
    add('.service-breadcrumb strong', P('Consulting', 'การให้คำปรึกษา'));
    add('.service-hero-copy h1', P('Clarity for<br>Complex Decisions.', 'ความชัดเจนสำหรับ<br>การตัดสินใจที่ซับซ้อน'));
    add('.service-hero-copy > p', P('PATSPHERE helps leaders, founders, and business owners think through business direction, positioning, service ideas, growth questions, and strategic next steps.', 'PATSPHERE ช่วยผู้นำ ผู้ก่อตั้ง และเจ้าของธุรกิจคิดอย่างเป็นระบบเรื่องทิศทางธุรกิจ การวางตำแหน่ง แนวคิดบริการ การเติบโต และขั้นตอนเชิงกลยุทธ์ถัดไป'));
    add('.service-focus-grid strong', [P('Business<br>Strategy', 'กลยุทธ์<br>ธุรกิจ'), P('Healthcare &amp;<br>Wellness', 'สุขภาพและ<br>เวลเนส'), P('Marketing &amp;<br>Branding', 'การตลาดและ<br>การสร้างแบรนด์'), P('AI Adoption &amp;<br>Digital Transformation', 'การนำ AI มาใช้และ<br>การเปลี่ยนผ่านดิจิทัล')]);
    add('.service-hero-quote', P('“When the path is unclear, clarity becomes a competitive advantage.”', '“เมื่อเส้นทางยังไม่ชัด ความชัดเจนจะกลายเป็นความได้เปรียบในการแข่งขัน”'));
    add('.service-packages-section .service-section-title h2', P('Choose the level of support you need', 'เลือกระดับบริการที่เหมาะกับคุณ'));
    add('.service-packages-section .service-section-title p', P('Choose the level of support that fits your goals and situation', 'เลือกระดับบริการที่เหมาะกับเป้าหมายและสถานการณ์ของคุณ'));
    add('.service-price-card h3', [P('Discovery Call', 'การพูดคุยเบื้องต้น'), P('Strategic<br>Consultation', 'การปรึกษา<br>เชิงกลยุทธ์'), P('Strategy<br>Working Session', 'เวิร์กกิงเซสชัน<br>ด้านกลยุทธ์'), P('Advisory Sprint', 'ที่ปรึกษาแบบเร่งรัด'), P('Ongoing<br>Advisory', 'ที่ปรึกษา<br>ต่อเนื่อง')]);
    add('.service-price-card .floating-badge', [P('Recommended starting point', 'จุดเริ่มต้นที่แนะนำ'), P('Premium partnership', 'ความร่วมมือระดับพรีเมียม')]);
    add('.service-price-card .service-price', [P('Free', 'ฟรี'), P('2,000 <small>THB</small>', '2,000 <small>บาท</small>'), P('4,000 <small>THB</small>', '4,000 <small>บาท</small>'), P('7,500 <small>THB</small>', '7,500 <small>บาท</small>'), P('Custom<br>Proposal', 'ประเมินราคา<br>ตามขอบเขตงาน')]);
    add('.service-price-card .service-duration', [P('20 minutes', '20 นาที'), P('60 minutes', '60 นาที'), P('90 minutes + Action Summary', '90 นาที + สรุปแนวทางดำเนินงาน')]);
    add('.service-price-card .service-prefix', P('Starting at', 'เริ่มต้น'));
    add('.service-price-card:nth-child(1) li', [P('Check if your question is a good fit', 'ตรวจสอบว่าคำถามและโจทย์เหมาะกับบริการหรือไม่'), P('Clarify your starting point', 'ทำให้จุดเริ่มต้นของคุณชัดเจน'), P('No deep strategy yet', 'ยังไม่ลงลึกด้านกลยุทธ์')]);
    add('.service-price-card:nth-child(2) li', [P('Discuss one clear business or brand question', 'พูดคุยหนึ่งโจทย์ธุรกิจหรือแบรนด์ที่ชัดเจน'), P('Get practical direction and next steps', 'ได้รับทิศทางและขั้นตอนถัดไปที่นำไปใช้ได้จริง'), P('Ideal for decision-making', 'เหมาะสำหรับการตัดสินใจ')]);
    add('.service-price-card:nth-child(3) li', [P('Work through a more complex challenge together', 'ร่วมกันวิเคราะห์โจทย์ที่ซับซ้อนมากขึ้น'), P('Review context before the session', 'ทบทวนบริบทก่อนเริ่มเซสชัน'), P('Receive a concise Action Summary', 'ได้รับสรุปแนวทางดำเนินงานแบบกระชับ')]);
    add('.service-price-card:nth-child(4) li', [P('For a defined challenge or focused project', 'สำหรับโจทย์ที่กำหนดชัดเจนหรือโครงการเฉพาะ'), P('More than consultation, less than long-term advisory', 'เข้มข้นกว่าการปรึกษา แต่ยังไม่ใช่การดูแลระยะยาว'), P('Clear scope and outcomes', 'ขอบเขตและผลลัพธ์ชัดเจน')]);
    add('.service-price-card:nth-child(5) li', [P('Best for multi-step or long-term needs', 'เหมาะสำหรับงานหลายขั้นตอนหรือความต้องการระยะยาว'), P('Customized structure and scope', 'ออกแบบรูปแบบและขอบเขตเฉพาะ'), P('Suitable for leadership and project support', 'เหมาะสำหรับสนับสนุนผู้นำและโครงการ')]);
    add('.service-price-card .card-action', [P('Book', 'นัดหมาย'), P('Book', 'นัดหมาย'), P('Book', 'นัดหมาย'), P('Discuss', 'พูดคุย'), P('Discuss', 'พูดคุย')]);
    add('.service-benefit-band h2', P('What you<br>will get', 'สิ่งที่คุณ<br>จะได้รับ'));
    add('.service-benefit-grid strong', [P('A clearer view of<br>the real issue', 'เห็นปัญหาที่แท้จริง<br>ได้ชัดเจนขึ้น'), P('Faster decisions<br>with less confusion', 'ตัดสินใจได้เร็วขึ้น<br>ด้วยความสับสนน้อยลง'), P('Practical<br>next steps', 'ขั้นตอนถัดไป<br>ที่นำไปใช้ได้จริง'), P('Better structure<br>for complex ideas', 'จัดโครงสร้างแนวคิด<br>ที่ซับซ้อนได้ดีขึ้น'), P('Outside perspective<br>without unnecessary complexity', 'มุมมองจากภายนอก<br>โดยไม่เพิ่มความซับซ้อน'), P('Advice you can<br>actually use', 'คำแนะนำที่<br>นำไปใช้ได้จริง')]);
    add('.service-process-section h2', P('How I work', 'วิธีการทำงาน'));
    add('.service-process h3', [P('Understand', 'ทำความเข้าใจ'), P('Clarify', 'ทำให้ชัดเจน'), P('Explore', 'สำรวจทางเลือก'), P('Recommend', 'เสนอแนวทาง')]);
    add('.service-process p', [P('I listen closely to understand your context and challenge.', 'ฉันรับฟังอย่างละเอียดเพื่อเข้าใจบริบทและความท้าทายของคุณ'), P('We clarify the real issue and define what matters.', 'เราทำให้ปัญหาที่แท้จริงและสิ่งสำคัญชัดเจนขึ้น'), P('We explore options, frameworks, and perspectives together.', 'เราร่วมกันสำรวจทางเลือก กรอบคิด และมุมมองต่าง ๆ'), P('You receive clear recommendations and practical next steps.', 'คุณได้รับคำแนะนำที่ชัดเจนและขั้นตอนถัดไปที่นำไปใช้ได้จริง')]);
    add('.service-bottom-cta h2', P('Not sure which level is right for you?', 'ยังไม่แน่ใจว่าระดับบริการใดเหมาะกับคุณ?'));
    add('.service-bottom-cta h2 + p', P('Start with a Discovery Call to see if we’re a good fit, or book a consultation to dive deeper into your challenge.', 'เริ่มจากการพูดคุยเบื้องต้นเพื่อดูว่าเหมาะสมกันหรือไม่ หรือนัดปรึกษาเพื่อเจาะลึกโจทย์ของคุณ'));
    add('.service-bottom-cta .btn', [P('Start with a Discovery Call', 'เริ่มด้วยการพูดคุยเบื้องต้น'), P('Book a Consultation', 'นัดหมายปรึกษา')]);
  }

  if (page === 'project-healthcare-wellness.html') {
    add('.project-detail-hero .eyebrow', P('PROJECT 01', 'โครงการ 01'));
    add('.project-detail-hero h1', P('Healthcare &amp; Wellness Business Development &amp; Digital Transformation', 'การพัฒนาธุรกิจสุขภาพและเวลเนส และการเปลี่ยนผ่านดิจิทัล'));
    add('.project-detail-hero .lead', P('Turning healthcare and wellness ideas into practical, accessible, and sustainable services.', 'เปลี่ยนแนวคิดด้านสุขภาพและเวลเนสให้เป็นบริการที่ใช้งานได้จริง เข้าถึงได้ และยั่งยืน'));
    add('.project-story .eyebrow', P('THE EXPERIENCE BEHIND THE WORK', 'ประสบการณ์เบื้องหลังการทำงาน'));
    add('.project-story h2', P('Good ideas create potential. Clear service models create impact.', 'แนวคิดที่ดีสร้างโอกาส โมเดลบริการที่ชัดเจนสร้างผลลัพธ์'));
    add('.project-story > p', P('Experience across healthcare business development, wellness services, digital partnerships, and transformation has shown that value must be translated into services people can understand and access—and that organisations can continue to operate sustainably. Quality transformation connects people, systems, and business goals rather than simply adding technology to an existing process.', 'ประสบการณ์ด้านการพัฒนาธุรกิจสุขภาพ บริการเวลเนส ความร่วมมือดิจิทัล และการเปลี่ยนผ่าน แสดงให้เห็นว่าคุณค่าต้องถูกถ่ายทอดเป็นบริการที่ผู้คนเข้าใจและเข้าถึงได้ พร้อมทั้งทำให้องค์กรดำเนินงานต่อได้อย่างยั่งยืน การเปลี่ยนผ่านที่มีคุณภาพต้องเชื่อมโยงผู้คน ระบบ และเป้าหมายธุรกิจ ไม่ใช่เพียงเพิ่มเทคโนโลยีลงในกระบวนการเดิม'));
    add('.focus-tags span', [P('Business Development', 'การพัฒนาธุรกิจ'), P('Service Design', 'การออกแบบบริการ'), P('Digital Transformation', 'การเปลี่ยนผ่านดิจิทัล'), P('Partnerships', 'ความร่วมมือ'), P('Patient Experience', 'ประสบการณ์ผู้รับบริการ')]);
    add('.photo-story-grid h3', [P('Healthcare Innovation &amp; Service Context', 'นวัตกรรมสุขภาพและบริบทการบริการ'), P('Teams, Process &amp; Implementation', 'ทีม กระบวนการ และการนำไปใช้'), P('Digital Partnerships', 'ความร่วมมือดิจิทัล'), P('Human-Centred Service', 'บริการที่ยึดมนุษย์เป็นศูนย์กลาง')]);
    add('.photo-story-grid p', [P('Grounding strategy in the realities of healthcare delivery, stakeholder expectations, and human experience.', 'วางกลยุทธ์บนความเป็นจริงของการให้บริการสุขภาพ ความคาดหวังของผู้มีส่วนได้ส่วนเสีย และประสบการณ์ของผู้คน'), P('Listening, aligning, and helping people move forward together.', 'รับฟัง สร้างความสอดคล้อง และช่วยให้ทุกฝ่ายก้าวไปข้างหน้าร่วมกัน'), P('Connecting collaboration, service design, and digital capability to support practical growth.', 'เชื่อมโยงความร่วมมือ การออกแบบบริการ และความสามารถดิจิทัลเพื่อสนับสนุนการเติบโตที่นำไปใช้ได้จริง'), P('Ensuring that systems and services remain understandable, accessible, and meaningful to people.', 'ทำให้ระบบและบริการยังคงเข้าใจง่าย เข้าถึงได้ และมีความหมายต่อผู้คน')]);
  }

  if (page === 'project-executive-positioning.html') {
    add('.main-nav .nav-line', P("Let's Connect", 'พูดคุยกัน'));
    add('.executive-copy .eyebrow', P('PROJECT 02', 'โครงการ 02'));
    add('.executive-copy h1', P('Executive Positioning &amp; Personal Branding', 'การวางตำแหน่งผู้บริหารและการสร้างแบรนด์บุคคล'));
    add('.executive-subtitle', P('Positioning leaders for clearer market authority.', 'วางตำแหน่งผู้นำให้มีอำนาจและความน่าเชื่อถือในตลาดอย่างชัดเจน'));
    add('.executive-copy > p:not(.eyebrow):not(.executive-subtitle)', [P('Experience alone is not enough — unless its value is communicated with clarity.', 'ประสบการณ์เพียงอย่างเดียวยังไม่พอ หากคุณค่าของมันไม่ได้ถูกสื่อสารอย่างชัดเจน'), P('This work helps turn leadership experience into clear positioning, a stronger identity, and a credible presence in the market.', 'งานนี้ช่วยเปลี่ยนประสบการณ์การเป็นผู้นำให้เป็นจุดยืนที่ชัดเจน ตัวตนที่แข็งแรงขึ้น และภาพลักษณ์ที่น่าเชื่อถือในตลาด')]);
    add('.executive-quote span:last-child', P('Clarity builds credibility.<br>Credibility builds impact.', 'ความชัดเจนสร้างความน่าเชื่อถือ<br>ความน่าเชื่อถือสร้างผลลัพธ์'));
    add('.platform-shot figcaption', [P('LINKEDIN PROFILE', 'โปรไฟล์ LINKEDIN'), P('EXECUTIVE WEBSITE', 'เว็บไซต์ผู้บริหาร'), P('INSTAGRAM PROFILE', 'โปรไฟล์ INSTAGRAM'), P('FACEBOOK PAGE', 'เพจ FACEBOOK')]);
    add('.executive-principle h2', [P('What this work reflects', 'สิ่งที่งานนี้สะท้อน'), P('What it shaped', 'สิ่งที่งานนี้สร้างขึ้น'), P('Across the ecosystem', 'ทั่วทั้งระบบนิเวศ')]);
    add('.executive-principle p', [P('A focus on translating leadership experience into clear positioning and authentic narratives.', 'มุ่งถ่ายทอดประสบการณ์การเป็นผู้นำให้เป็นจุดยืนที่ชัดเจนและเรื่องราวที่จริงใจ'), P('It reflects a belief that influence begins with clarity.', 'สะท้อนความเชื่อว่าอิทธิพลเริ่มต้นจากความชัดเจน'), P('Distinct executive identities that communicate value, build trust, and create lasting professional equity.', 'ตัวตนผู้บริหารที่โดดเด่น สื่อสารคุณค่า สร้างความไว้วางใจ และสะสมคุณค่าทางวิชาชีพในระยะยาว'), P('From personal story to market authority.', 'จากเรื่องราวส่วนบุคคลสู่ความน่าเชื่อถือในตลาด'), P('A consistent presence across key platforms that reinforces credibility and reach.', 'ภาพลักษณ์ที่สม่ำเสมอบนแพลตฟอร์มสำคัญ ช่วยเสริมความน่าเชื่อถือและการเข้าถึง'), P('One story. Many touchpoints.<br>Stronger impact.', 'หนึ่งเรื่องราว หลายจุดสัมผัส<br>ผลลัพธ์ที่แข็งแรงขึ้น')]);
    add('.ecosystem-title', P('THE EXECUTIVE PRESENCE ECOSYSTEM', 'ระบบนิเวศภาพลักษณ์ของผู้บริหาร'));
    add('.ecosystem-item p', [P('Professional positioning and network credibility', 'การวางตำแหน่งอย่างมืออาชีพและความน่าเชื่อถือในเครือข่าย'), P('Thought leadership and executive storytelling', 'ภาวะผู้นำทางความคิดและการเล่าเรื่องของผู้บริหาร'), P('Human side of leadership and daily perspectives', 'มุมความเป็นมนุษย์ของภาวะผู้นำและมุมมองในชีวิตประจำวัน'), P('Community engagement and broader reach', 'การมีส่วนร่วมกับชุมชนและการเข้าถึงที่กว้างขึ้น')]);
    add('.executive-cta h2', P('Lead with clarity.<em>Be remembered for impact.</em>', 'นำด้วยความชัดเจน<em>และเป็นที่จดจำจากผลลัพธ์</em>'));
    add('.executive-cta h2 + p', P("Let's build your positioning and presence with purpose and precision.", 'ร่วมสร้างจุดยืนและภาพลักษณ์ของคุณด้วยเป้าหมายและความแม่นยำ'));
    add('.executive-cta .btn', P("Let's Connect", 'พูดคุยกัน'));
    add('.executive-cta-note', P('We partner with leaders to define their narrative, amplify their influence, and elevate their impact.', 'เราทำงานร่วมกับผู้นำเพื่อกำหนดเรื่องราว ขยายอิทธิพล และยกระดับผลลัพธ์'));
  }

  if (page === 'project-ai-adoption.html') {
    add('.project-detail-hero .eyebrow', P('PROJECT 03', 'โครงการ 03'));
    add('.project-detail-hero h1', P('Strategic Projects &amp; AI Adoption', 'โครงการเชิงกลยุทธ์และการนำ AI มาใช้'));
    add('.project-detail-hero .lead', P('Using strategy and AI to turn complex opportunities into practical action.', 'ใช้กลยุทธ์และ AI เปลี่ยนโอกาสที่ซับซ้อนให้เป็นการลงมือทำที่เป็นรูปธรรม'));
    add('.project-detail-hero .lead + p', P('From AI workflow design to business planning, the goal is not innovation for its own sake—but usable progress.', 'ตั้งแต่การออกแบบเวิร์กโฟลว์ AI ถึงการวางแผนธุรกิจ เป้าหมายไม่ใช่นวัตกรรมเพียงเพื่อความใหม่ แต่คือความก้าวหน้าที่นำไปใช้ได้จริง'));
    add('.roadmap-visual strong', [P('Strategy', 'กลยุทธ์'), P('AI Workflow', 'เวิร์กโฟลว์ AI'), P('Use Cases', 'กรณีใช้งาน'), P('Roadmap', 'แผนดำเนินงาน')]);
    add('.section-head .eyebrow', P('SELECTED WORK IN THIS CATEGORY', 'ผลงานที่คัดเลือกในหมวดนี้'));
    add('.section-head h2', P('Two business contexts. One strategic discipline.', 'สองบริบทธุรกิจ หนึ่งวินัยเชิงกลยุทธ์'));
    add('.selected-work-grid .eyebrow', [P('PROPERTY BUSINESS', 'ธุรกิจอสังหาริมทรัพย์'), P('BIOTECHNOLOGY RESEARCH &amp; DEVELOPMENT BUSINESS', 'ธุรกิจวิจัยและพัฒนาเทคโนโลยีชีวภาพ')]);
    add('.selected-work-grid h2', [P('AI workflow design &amp; internal agent thinking', 'การออกแบบเวิร์กโฟลว์ AI และแนวคิดเอเจนต์ภายใน'), P('Business strategy planning', 'การวางแผนกลยุทธ์ธุรกิจ')]);
    add('.selected-work-grid article:first-child li', [P('QA/QC Agent', 'เอเจนต์ QA/QC'), P('Agent J', 'เอเจนต์ J'), P('Workflow thinking for operational use', 'การคิดเชิงเวิร์กโฟลว์เพื่อใช้ในการดำเนินงาน')]);
    add('.selected-work-grid article:last-child li', [P('Business direction', 'ทิศทางธุรกิจ'), P('Positioning &amp; growth logic', 'การวางตำแหน่งและตรรกะการเติบโต'), P('Strategic planning foundation', 'รากฐานการวางแผนเชิงกลยุทธ์')]);
    add('.section.soft > .container > .eyebrow', P('WHAT THIS PROJECT AREA REFLECTS', 'สิ่งที่พื้นที่โครงการนี้สะท้อน'));
    add('.principle-card h3', [P('Strategic Thinking', 'การคิดเชิงกลยุทธ์'), P('AI Made Practical', 'AI ที่นำไปใช้ได้จริง'), P('Business Transformation', 'การเปลี่ยนผ่านธุรกิจ')]);
    add('.principle-card p', [P('Start with clarity of direction and design the right path forward.', 'เริ่มจากทิศทางที่ชัดเจนและออกแบบเส้นทางที่เหมาะสมไปข้างหน้า'), P('Turn emerging technology into workflows that people can use.', 'เปลี่ยนเทคโนโลยีเกิดใหม่ให้เป็นเวิร์กโฟลว์ที่ผู้คนใช้งานได้'), P('Connect strategy, people, and systems to create lasting impact.', 'เชื่อมโยงกลยุทธ์ ผู้คน และระบบเพื่อสร้างผลลัพธ์ที่ยั่งยืน')]);
  }

  if (page === 'project-speaking.html') {
    add('.project-detail-hero .eyebrow', P('PROJECT 04', 'โครงการ 04'));
    add('.project-detail-hero h1', P('Speaking &amp; Knowledge Sharing', 'การบรรยายและการแบ่งปันความรู้'));
    add('.project-detail-hero .lead', P('Sharing practical insights that inspire action and support growth.', 'แบ่งปันมุมมองที่นำไปใช้ได้จริง เพื่อสร้างแรงบันดาลใจในการลงมือทำและสนับสนุนการเติบโต'));
    add('.project-detail-hero .lead + p', P('Turning experience into practical ideas that help people see possibilities, make clearer decisions, and move forward.', 'เปลี่ยนประสบการณ์ให้เป็นแนวคิดที่ใช้ได้จริง ช่วยให้ผู้คนมองเห็นความเป็นไปได้ ตัดสินใจได้ชัดขึ้น และก้าวต่อไป'));
    add('.project-story .eyebrow', P('WHAT THIS WORK REFLECTS', 'สิ่งที่งานนี้สะท้อน'));
    add('.project-story h2', P('When we share what works, we create impact beyond our own work.', 'เมื่อเราแบ่งปันสิ่งที่ได้ผล เราสร้างผลกระทบที่ไกลกว่างานของเราเอง'));
    add('.project-story > p', P('Speaking, facilitating, and sharing experience have shown that knowledge becomes valuable when people can connect it to their own context—and use it to think or act differently.', 'การบรรยาย การอำนวยกระบวนการ และการแบ่งปันประสบการณ์ แสดงให้เห็นว่าความรู้มีคุณค่าเมื่อผู้คนเชื่อมโยงเข้ากับบริบทของตนเอง และนำไปใช้เพื่อคิดหรือลงมือทำในรูปแบบใหม่'));
    add('.focus-tags span', [P('Keynote Speaking', 'การบรรยายหลัก'), P('Workshops', 'เวิร์กช็อป'), P('Panel Discussions', 'เสวนา'), P('Knowledge Sharing', 'การแบ่งปันความรู้')]);
    add('.speaking-images h3', [P('Executive Talk &amp; Stage Presence', 'การบรรยายสำหรับผู้บริหารและการสื่อสารบนเวที'), P('Workshop &amp; Team Learning', 'เวิร์กช็อปและการเรียนรู้ของทีม')]);
    add('.speaking-images p', [P('Communicating complex ideas with clarity, purpose, and practical relevance.', 'สื่อสารแนวคิดที่ซับซ้อนด้วยความชัดเจน เป้าหมาย และความเชื่อมโยงกับการใช้งานจริง'), P('Creating space for reflection, discussion, and ideas people can apply to their work.', 'สร้างพื้นที่สำหรับการทบทวน การสนทนา และแนวคิดที่ผู้คนนำไปใช้กับงานได้')]);
  }

  const titles={
    'consulting.html':P('Consulting & Advisory | PATSPHERE Advisory','การให้คำปรึกษา | PATSPHERE Advisory'),
    'project-healthcare-wellness.html':P('Healthcare & Wellness Transformation | PATSPHERE Advisory','การเปลี่ยนผ่านธุรกิจสุขภาพและเวลเนส | PATSPHERE Advisory'),
    'project-executive-positioning.html':P('Executive Positioning & Personal Branding | PATSPHERE Advisory','การวางตำแหน่งผู้บริหารและการสร้างแบรนด์บุคคล | PATSPHERE Advisory'),
    'project-ai-adoption.html':P('Strategic Projects & AI Adoption | PATSPHERE Advisory','โครงการเชิงกลยุทธ์และการนำ AI มาใช้ | PATSPHERE Advisory'),
    'project-speaking.html':P('Speaking & Knowledge Sharing | PATSPHERE Advisory','การบรรยายและการแบ่งปันความรู้ | PATSPHERE Advisory')
  };
  const apply=(lang)=>{lang=lang==='th'?'th':'en';rows.forEach(({el,pair,mode})=>{if(mode==='text')el.textContent=pair[lang];else el.innerHTML=pair[lang];});if(titles[page])document.title=titles[page][lang];};
  const current=()=>document.documentElement.dataset.language||localStorage.getItem('patsphere-language')||((navigator.language||'').toLowerCase().startsWith('th')?'th':'en');
  apply(current());
  new MutationObserver(()=>apply(current())).observe(document.documentElement,{attributes:true,attributeFilter:['data-language']});
})();
