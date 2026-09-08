(() => {
'use strict';
const KEY='patsphere-language';
const page=(location.pathname.split('/').pop()||'').toLowerCase();
const P=(en,th)=>({en,th});
const rows=[];
const add=(selector,pairs,mode='html')=>{const els=[...document.querySelectorAll(selector)],list=Array.isArray(pairs)?pairs:[pairs];els.forEach((el,i)=>{const pair=list[i]||(list.length===1?list[0]:null);if(pair)rows.push({el,pair,mode});});};

if(page==='reflections.html'){
 add('.soft .section-head .eyebrow',P('REFLECTIONS &amp; INSIGHTS','REFLECTIONS &amp; INSIGHTS'));
 add('.soft .section-head h2',P('Explore ideas in two ways.','เลือกอ่านได้สองรูปแบบ'));
 add('.content-switch button',[P('All','ทั้งหมด'),P('Reflections','Reflection'),P('Insights','Insight')],'text');
 add('.insights-block > .eyebrow',P('LATEST INSIGHT','INSIGHT ล่าสุด'));
 add('.insight-card .label',P('INSIGHT · AI × HUMAN JUDGMENT','INSIGHT · AI × HUMAN JUDGMENT'));
 add('.insight-card h3',P('Good AI should not agree with us on everything','AI ที่ดี ไม่ควรเห็นด้วยกับเราทุกเรื่อง'));
 add('.insight-card p',P('When AI can answer almost anything, its greater value may not be the answer itself, but helping us examine how we think before we decide.','เมื่อ AI สามารถให้คำตอบเราได้แทบทุกเรื่อง คุณค่าที่สำคัญกว่าอาจไม่ใช่การตอบ แต่คือการช่วยตรวจสอบวิธีคิดของเรา ก่อนที่เราจะตัดสินใจ'));
 add('.insight-card .btn',P('Read Insight','อ่าน Insight'));
 add('.insight-visual strong',P('Better AI<br>should not simply<br>agree with us.','AI ที่ดี<br>ไม่ควรเพียงแค่<br>เห็นด้วยกับเรา'));
 add('.linkedin-strip strong',P('More reflections and insights are shared regularly on LinkedIn.','มีการแบ่งปัน Reflection และ Insight เพิ่มเติมบน LinkedIn อย่างสม่ำเสมอ'));
 add('.linkedin-strip p',P('Read short-form thinking on LinkedIn, then explore deeper Insights here on PATSPHERE.','อ่านแนวคิดแบบสั้นบน LinkedIn แล้วต่อยอดด้วย Insight ฉบับเต็มบน PATSPHERE'));
 add('.linkedin-strip .btn',P('Connect on LinkedIn','ติดตามบน LinkedIn'));
}

if(page==='insight-ai-thinking-partner.html'){
 add('.insight-kicker',P('PATSPHERE INSIGHT · AI × HUMAN JUDGMENT','PATSPHERE INSIGHT · AI × HUMAN JUDGMENT'));
 add('.insight-hero h1',P('Good AI<br>should not agree with us on everything','AI ที่ดี<br>ไม่ควรเห็นด้วยกับเราทุกเรื่อง'));
 add('.insight-deck',P('When AI can answer almost anything, its greater value may not be the answer itself, but helping us examine how we think before we decide.','เมื่อ AI สามารถให้คำตอบเราได้แทบทุกเรื่อง คุณค่าที่สำคัญกว่าอาจไม่ใช่การตอบ แต่คือการช่วยตรวจสอบวิธีคิดของเรา ก่อนที่เราจะตัดสินใจ'));
 add('.insight-meta',P('8 September 2026 · PATSPHERE Advisory · 6 min read','8 กันยายน 2026 · PATSPHERE Advisory · ใช้เวลาอ่านประมาณ 6 นาที'));
 const ps=[...document.querySelectorAll('.insight-body article > p:not(.lead-question):not(.insight-ending)')];
 const pPairs=[
  P('We are getting better at using AI every day — asking it to write, analyse, summarise, or even answer: “If you were me, what would you choose?”','เราใช้ AI กันเก่งขึ้นทุกวัน — ให้เขียน วิเคราะห์ สรุป หรือแม้แต่ถามว่า “ถ้าเป็นคุณ คุณจะเลือกอะไร?”'),
  P('The problem with using AI only as an “answer provider” is that sometimes we are not looking for a new answer at all. We are simply looking for someone to confirm what we already want to believe — and AI can do that remarkably well.','ปัญหาของการใช้ AI เป็นเพียง “ผู้ให้คำตอบ” คือบางครั้งเราไม่ได้ต้องการคำตอบใหม่ เราแค่กำลังหาคนมายืนยันสิ่งที่เราอยากเชื่ออยู่แล้ว และ AI ก็สามารถทำหน้าที่นั้นได้ดีเสียด้วย'),
  P('AI that is genuinely useful for decision-making should not begin with “What should you do?” It should first help us ask: “What problem are we actually trying to solve?”','AI ที่มีประโยชน์ต่อการตัดสินใจจริง ๆ ไม่ควรเริ่มต้นด้วยคำถามว่า “คุณควรทำอะไร?” แต่ควรช่วยย้อนกลับมาถามก่อนว่า “เรากำลังพยายามแก้ปัญหาอะไรอยู่กันแน่?”'),
  P('From there, it can help separate what we have into four groups: Fact — what we know to be true, Assumption — what we think is probably true, Unknown — what we do not yet know, and Bias — what may be distorting our view.','จากนั้นจึงช่วยแยกสิ่งที่เรามีออกเป็นสี่กลุ่ม: Fact — สิ่งที่เรารู้จริง, Assumption — สิ่งที่เราคิดว่าน่าจะจริง, Unknown — สิ่งที่เรายังไม่รู้ และ Bias — สิ่งที่อาจทำให้เรามองเรื่องนี้ไม่เป็นกลาง'),
  P('That alone changes the conversation. We stop using AI to “answer for us” and start using it to examine our thinking.','เพียงเท่านี้ บทสนทนากับ AI ก็เปลี่ยนไป เพราะเราไม่ได้ใช้มันเพื่อ “ตอบแทนเรา” แต่ใช้มันเพื่อ ตรวจสอบวิธีคิดของเรา'),
  P('This question changes AI from a supporter of our existing view into a thinking partner that deliberately introduces another perspective.','คำถามนี้เปลี่ยนบทบาท AI จากผู้สนับสนุนความคิดเดิม มาเป็นคู่คิดที่ช่วยสร้างอีกมุมหนึ่งขึ้นมาตรวจสอบเรา'),
  P('Then ask one more question: “What information, if found to be true, should make me change my mind?”','และควรถามต่อว่า “มีข้อมูลอะไรที่ถ้าพบว่าจริง ฉันควรเปลี่ยนใจ?”'),
  P('Good decision-making is not about insisting that “I must be right.” It is about knowing under what conditions we should be willing to accept that our original view may no longer be the best answer.','การตัดสินใจที่ดีไม่ใช่การยึดมั่นว่า “ฉันต้องถูก” แต่คือการรู้ว่า ภายใต้เงื่อนไขอะไร เราพร้อมยอมรับว่าความคิดเดิมอาจไม่ใช่คำตอบที่ดีที่สุด'),
  P('Especially in decisions involving people, business, money, relationships, or long-term consequences, AI may help us see more information, find contradictions, simulate scenarios, and raise questions we may have missed.','โดยเฉพาะเรื่องที่เกี่ยวข้องกับคน ธุรกิจ เงิน ความสัมพันธ์ หรือผลกระทบระยะยาว AI อาจช่วยมองข้อมูลได้กว้างกว่าเรา ช่วยค้น contradiction ช่วยจำลองสถานการณ์ และช่วยตั้งคำถามที่เราอาจไม่ได้คิดถึง'),
  P('But ultimately, judgment must remain human. The one who has to live with the consequences of the decision is not AI. It is us.','แต่สุดท้าย Judgment ยังต้องเป็นของมนุษย์ เพราะคนที่ต้องอยู่กับผลของการตัดสินใจไม่ใช่ AI แต่คือเรา'),
  P('AI does not need to think instead of humans. It should help humans think more clearly, see more broadly, and decide more consciously. In a world where answers are becoming easier to obtain, what may become more valuable is Judgment.','AI ไม่จำเป็นต้องคิดแทนมนุษย์ มันควรช่วยให้มนุษย์คิดชัดขึ้น เห็นกว้างขึ้น และตัดสินใจอย่างมีสติมากขึ้น เพราะในโลกที่คำตอบหาได้ง่ายขึ้นเรื่อย ๆ สิ่งที่อาจมีค่ามากขึ้นกลับเป็น Judgment.')
 ];
 ps.forEach((el,i)=>{if(pPairs[i])rows.push({el,pair:pPairs[i],mode:'html'});});
 add('.lead-question',P('But if we begin with the wrong assumption, no matter how capable AI is, will the answer really be good?','แต่ถ้าเราเริ่มต้นด้วยสมมติฐานที่ผิด ต่อให้ AI วิเคราะห์เก่งแค่ไหน คำตอบที่ได้จะดีจริงหรือ?'));
 add('.insight-body h2',[
  P('From Answer Machine to Thinking Partner','จาก Answer Machine สู่ Thinking Partner'),
  P('Before deciding, ask AI to argue against us','ก่อนตัดสินใจ ให้ AI ลองค้านเรา'),
  P('AI should not take judgment away from humans','AI ไม่ควรเอา Judgment ไปจากมนุษย์'),
  P('7 questions that make AI more useful','7 คำถามที่ทำให้ AI มีประโยชน์กว่าเดิม')
 ]);
 add('.insight-callout',P('“If you had to argue against the decision I am leaning toward, what is the strongest case you could make?”','“ถ้าคุณต้องคัดค้านสิ่งที่ฉันกำลังจะตัดสินใจ โดยใช้เหตุผลที่แข็งแรงที่สุด คุณจะค้านว่าอะไร?”'));
 add('.insight-list li',[
  P('What is the real problem I am trying to solve?','ปัญหาจริงที่ฉันกำลังแก้คืออะไร?'),
  P('What is fact, and what is my assumption?','อะไรคือข้อเท็จจริง และอะไรคือสมมติฐานของฉัน?'),
  P('Is there an option C that I have not yet seen?','มีทางเลือก C ที่ฉันยังมองไม่เห็นหรือไม่?'),
  P('If you had to challenge my current view, what would your strongest argument be?','ถ้าต้องค้านความคิดของฉัน คุณจะค้านด้วยเหตุผลอะไร?'),
  P('What information is still missing before I decide?','ข้อมูลอะไรที่ยังขาดก่อนตัดสินใจ?'),
  P('What small experiment could I run before making a bigger commitment?','มีการทดลองเล็ก ๆ อะไรที่ทำได้ก่อน โดยยังไม่ต้องเดิมพันครั้งใหญ่?'),
  P('What evidence should make me change my decision?','หลักฐานแบบไหนที่จะทำให้ฉันควรเปลี่ยนการตัดสินใจ?')
 ]);
 add('.insight-ending',P('Perhaps the real value of AI is not how well it answers us, but how well it helps us question our own thinking.','บางทีคุณค่าที่แท้จริงของ AI อาจไม่ได้อยู่ที่มันตอบเราได้เก่งแค่ไหน แต่อยู่ที่มันช่วยให้เราตั้งคำถามกับความคิดของตัวเองได้ดีขึ้นแค่ไหน'));
 add('.back-insights',P('← Back to Reflections &amp; Insights','← กลับไปที่ Reflections &amp; Insights'));
}

function currentLang(){return localStorage.getItem(KEY)==='th'?'th':'en';}
function apply(){const lang=currentLang();rows.forEach(({el,pair,mode})=>{if(!pair)return;if(mode==='text')el.textContent=pair[lang];else el.innerHTML=pair[lang];});document.documentElement.lang=lang;}
apply();
window.addEventListener('storage',apply);
document.addEventListener('click',()=>setTimeout(apply,0));
new MutationObserver(()=>apply()).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
})();