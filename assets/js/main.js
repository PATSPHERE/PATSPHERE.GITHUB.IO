(() => {
  const logoStyles=document.createElement('link');
  logoStyles.rel='stylesheet';
  logoStyles.href='assets/css/logo-system.css';
  logoStyles.dataset.patsphereLogoSystem='option-c2';
  document.head.appendChild(logoStyles);
  if(!document.querySelector('link[rel~="icon"]')){
    const favicon=document.createElement('link');
    favicon.rel='icon';
    favicon.type='image/svg+xml';
    favicon.href='assets/images/patsphere-favicon.svg';
    document.head.appendChild(favicon);
  }
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
  const toggle=document.querySelector('.nav-toggle'),nav=document.querySelector('.main-nav');
  if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));}
  const posts=window.PATSPHERE_REFLECTIONS||[];
  const reflectionImageExt=['webp','jpeg','png','jpeg','jpeg','jpeg','jpeg','jpeg','png','png','jpeg','jpeg','png','png','png','png','png','png','jpeg','jpeg','jpeg','png','png','jpeg','jpeg'];
  const reflectionImage=index=>`assets/images/reflections/reflection-${String(Number(index)+1).padStart(2,'0')}.${reflectionImageExt[index]}`;
  const grid=document.getElementById('reflection-grid');
  if(grid&&posts.length){posts.forEach((post,index)=>{const card=document.createElement('article');card.className='reflection-card';card.dataset.cat=post.cat;card.innerHTML=`<div class="reflection-media"><img class="reflection-thumb" src="${reflectionImage(post.sprite)}" alt="" loading="lazy" decoding="async"></div><div class="reflection-card-body"><p class="eyebrow"></p><h3></h3><p class="excerpt"></p><button class="text-button" data-reflection="${index}">Read reflection →</button></div>`;card.querySelector('.eyebrow').textContent=post.cat;card.querySelector('h3').textContent=post.title;card.querySelector('.excerpt').textContent=post.excerpt;grid.appendChild(card);});}
  const filterButtons=document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn=>btn.addEventListener('click',()=>{filterButtons.forEach(b=>b.classList.remove('active'));btn.classList.add('active');const filter=btn.dataset.filter;document.querySelectorAll('.reflection-card').forEach(card=>{card.hidden=filter!=='All'&&card.dataset.cat!==filter;});}));
  const modal=document.getElementById('reflection-modal');
  if(modal&&posts.length){const title=document.getElementById('modal-title'),cat=document.getElementById('modal-cat'),body=document.getElementById('modal-body'),close=modal.querySelector('.modal-close');const openModal=index=>{const post=posts[Number(index)];if(!post)return;title.textContent=post.title;cat.textContent=post.cat;body.innerHTML='';post.body.split(/\n\n+/).forEach(part=>{const p=document.createElement('p');p.textContent=part;body.appendChild(p);});modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';close.focus();};const closeModal=()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';};document.addEventListener('click',e=>{const trigger=e.target.closest('[data-reflection]');if(trigger)openModal(trigger.dataset.reflection);});close.addEventListener('click',closeModal);modal.addEventListener('click',e=>{if(e.target===modal)closeModal();});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('open'))closeModal();});}
  const revealObserver='IntersectionObserver' in window?new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target);}});},{threshold:.08}):null;document.querySelectorAll('.reveal').forEach(el=>{if(revealObserver)revealObserver.observe(el);else el.classList.add('is-visible');});
  const i18n=document.createElement('script');
  i18n.src='assets/js/i18n.js';
  i18n.defer=true;
  i18n.addEventListener('load',()=>{
    const selectedPages=document.createElement('script');
    selectedPages.src='assets/js/i18n-selected-pages.js';
    selectedPages.defer=true;
    document.head.appendChild(selectedPages);
  });
  document.head.appendChild(i18n);
})();
