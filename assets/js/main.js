(() => {
  const logoStyles=document.createElement('link');
  logoStyles.rel='stylesheet';
  logoStyles.href='assets/css/logo-system.css';
  logoStyles.dataset.patsphereLogoSystem='option-c2';
  document.head.appendChild(logoStyles);

  const mobileHomeFix=document.createElement('style');
  mobileHomeFix.dataset.patsphereMobileHomeFix='v1';
  mobileHomeFix.textContent=`
    @media (max-width:760px){
      .lock-cta-grid{min-height:auto!important;grid-template-columns:1fr!important;grid-template-rows:auto auto auto auto!important;align-items:start!important;gap:14px!important;padding-block:30px!important}
      .lock-cta-mark{display:none!important}
      .lock-cta-grid>div:nth-child(2){grid-column:1!important;grid-row:1!important;min-width:0!important}
      .lock-cta h2{font-size:clamp(2.15rem,10vw,2.75rem)!important;line-height:1!important;margin:0 0 10px!important}
      .lock-cta p{font-size:.98rem!important;line-height:1.48!important;margin:0!important}
      .lock-cta p br{display:block!important}
      .lock-cta .btn{grid-column:1!important;width:100%!important;min-height:54px!important;padding:12px 16px!important;font-size:1rem!important}
      .lock-cta .btn.light{grid-row:2!important}
      .lock-cta .outline-light{display:flex!important;grid-row:3!important}
      .lock-email{grid-column:1!important;grid-row:4!important;justify-self:start!important;font-size:.94rem!important;line-height:1.4!important;overflow-wrap:anywhere!important}
      .lock-footer{padding:28px 0 34px!important}
      .lock-footer-grid{grid-template-columns:1fr 1fr!important;gap:22px 30px!important}
      .lock-footer-brand{grid-column:1/-1!important;padding-bottom:20px!important;border-bottom:1px solid rgba(198,150,67,.42)!important}
      .lock-footer-grid>div:nth-child(2){grid-column:1!important}
      .lock-footer-grid>div:nth-child(3){grid-column:2!important}
      .lock-footer-grid>div:nth-child(n+4){display:none!important}
      .lock-footer h4{margin:0 0 8px!important;font-size:.78rem!important}
      .lock-footer a,.lock-footer span{font-size:.9rem!important;line-height:1.65!important}
      .lock-footer-brand strong{font-size:1.35rem!important}
      .lock-footer-brand small{font-size:.65rem!important}
      .lock-footer-brand em{font-size:.82rem!important;line-height:1.25!important}
    }
    @media (max-width:390px){.lock-cta h2{font-size:2rem!important}.lock-footer-grid{gap:20px!important}}
  `;
  document.head.appendChild(mobileHomeFix);
  if(!document.querySelector('link[rel~="icon"]')){const favicon=document.createElement('link');favicon.rel='icon';favicon.type='image/svg+xml';favicon.href='assets/images/patsphere-favicon.svg';document.head.appendChild(favicon);}
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
  const toggle=document.querySelector('.nav-toggle'),nav=document.querySelector('.main-nav');
  if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));}
  const posts=window.PATSPHERE_REFLECTIONS||[];
  const reflectionImageExt=['webp','jpeg','png','jpeg','jpeg','jpeg','jpeg','jpeg','png','png','jpeg','jpeg','png','png','png','png','png','png','jpeg','jpeg','jpeg','png','png','jpeg','jpeg'];
  const reflectionImage=post=>post.image||`assets/images/reflections/reflection-${String(Number(post.sprite)+1).padStart(2,'0')}.${reflectionImageExt[post.sprite]}`;
  const featuredTitle=document.getElementById('featured-title');
  const featuredExcerpt=document.getElementById('featured-excerpt');
  const featuredImage=document.querySelector('.featured-media img');
  if(posts.length){
    if(featuredTitle) featuredTitle.textContent=posts[0].title;
    if(featuredExcerpt) featuredExcerpt.textContent=posts[0].excerpt;
    if(featuredImage){featuredImage.src=reflectionImage(posts[0]);featuredImage.alt=posts[0].title;}
  }
  const grid=document.getElementById('reflection-grid');
  if(grid&&posts.length){posts.forEach((post,index)=>{const card=document.createElement('article');card.className='reflection-card';card.dataset.cat=post.cat;card.innerHTML=`<div class="reflection-media"><img class="reflection-thumb" src="${reflectionImage(post)}" alt="" loading="lazy" decoding="async"></div><div class="reflection-card-body"><p class="eyebrow"></p><h3></h3><p class="excerpt"></p><button class="text-button" data-reflection="${index}">Read reflection →</button></div>`;card.querySelector('.eyebrow').textContent=post.cat;card.querySelector('h3').textContent=post.title;card.querySelector('.excerpt').textContent=post.excerpt;grid.appendChild(card);});}
  const filterButtons=document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn=>btn.addEventListener('click',()=>{filterButtons.forEach(b=>b.classList.remove('active'));btn.classList.add('active');const filter=btn.dataset.filter;document.querySelectorAll('.reflection-card').forEach(card=>{card.hidden=filter!=='All'&&card.dataset.cat!==filter;});}));
  const modal=document.getElementById('reflection-modal');
  if(modal&&posts.length){const title=document.getElementById('modal-title'),cat=document.getElementById('modal-cat'),body=document.getElementById('modal-body'),close=modal.querySelector('.modal-close');const openModal=index=>{const post=posts[Number(index)];if(!post)return;title.textContent=post.title;cat.textContent=post.cat;body.innerHTML='';post.body.split(/\n\n+/).forEach(part=>{const p=document.createElement('p');p.textContent=part;body.appendChild(p);});modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';close.focus();};const closeModal=()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';};document.addEventListener('click',e=>{const trigger=e.target.closest('[data-reflection]');if(trigger)openModal(trigger.dataset.reflection);});close.addEventListener('click',closeModal);modal.addEventListener('click',e=>{if(e.target===modal)closeModal();});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('open'))closeModal();});}
  const revealObserver='IntersectionObserver' in window?new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target);}});},{threshold:.08}):null;document.querySelectorAll('.reveal').forEach(el=>{if(revealObserver)revealObserver.observe(el);else el.classList.add('is-visible');});
  const i18n=document.createElement('script');
  i18n.src='assets/js/i18n.js';i18n.defer=true;i18n.addEventListener('load',()=>{const selectedPages=document.createElement('script');selectedPages.src='assets/js/i18n-selected-pages.js';selectedPages.defer=true;document.head.appendChild(selectedPages);});document.head.appendChild(i18n);
})();
