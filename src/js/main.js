import './particles.js';
import './notifications.js';

// Year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Page transition: enter on load
const main = document.getElementById('main-content');
if (main){
  requestAnimationFrame(()=> main.classList.add('page-enter'));
}

// Sync active nav link based on current path
(function syncActiveNav(){
  const file = (location.pathname.split('/').pop()||'index.html');
  document.querySelectorAll('.nav-link').forEach(link=>{
    link.classList.remove('is-active');
    link.removeAttribute('aria-current');
    const href = link.getAttribute('href')||'';
    if(href.endsWith(file)){
      link.classList.add('is-active');
      link.setAttribute('aria-current','page');
    }
  });
})();

// Sliding nav indicator
(function navIndicator(){
  const nav = document.querySelector('.nav-center');
  if(!nav) return;
  const indicator = document.createElement('span');
  indicator.className = 'nav-indicator';
  nav.classList.add('has-indicator');
  nav.appendChild(indicator);
  const links = Array.from(nav.querySelectorAll('.nav-link'));
  const activeOrFirst = ()=> links.find(l=>l.classList.contains('is-active')) || links[0];
  function moveTo(el){
    const nr = nav.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    const x = r.left - nr.left + 10; // account for link padding
    const w = Math.max(0, r.width - 20);
    indicator.style.width = `${w}px`;
    indicator.style.transform = `translateX(${Math.max(0,x)}px)`;
  }
  moveTo(activeOrFirst());
  links.forEach(l=>{
    l.addEventListener('mouseenter', ()=> moveTo(l));
    l.addEventListener('mouseleave', ()=> moveTo(activeOrFirst()));
  });
  window.addEventListener('resize', ()=> moveTo(activeOrFirst()));
})();

// Intercept internal navigation for a smooth exit animation
document.addEventListener('click', (e)=>{
  const a = e.target.closest('a');
  if(!a) return;
  const href = a.getAttribute('href')||'';
  const isInternal = href && !href.startsWith('http') && href.endsWith('.html');
  if(isInternal && main){
    e.preventDefault();
    main.classList.remove('page-enter');
    main.classList.add('page-exit');
    setTimeout(()=>{ window.location.href = href; }, 220);
  }
});

// Scroll reveal
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('is-visible');
      observer.unobserve(e.target);
    }
  });
},{threshold:0.1});

document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

// Portfolio filters
const grid = document.getElementById('portfolio-grid');
if (grid){
  const cards = Array.from(grid.querySelectorAll('[data-category]'));
  document.querySelectorAll('.filter-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const filter = btn.getAttribute('data-filter');
      cards.forEach(card=>{
        const show = filter==='all' || card.getAttribute('data-category')===filter;
        card.style.display = show? 'block':'none';
      });
    });
  });
}

// Contact form
const form = document.getElementById('contact-form');
if (form){
  const status = document.getElementById('form-status');
  form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    status.textContent = 'Sending...';
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    try{
      const res = await fetch('/api/contact',{
        method:'POST',headers:{'Content-Type':'application/json'},
        body:JSON.stringify(payload)
      });
      if(!res.ok) throw new Error('Request failed');
      status.textContent = 'Thanks! We will be in touch.';
      form.reset();
    }catch(err){
      status.textContent = 'Sorry, something went wrong. Please try again later.';
    }
  });
}
