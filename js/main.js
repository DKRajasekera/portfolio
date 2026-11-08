const r=document.documentElement,tb=document.getElementById('th');let sv=null;try{sv=localStorage.getItem('theme')}catch(e){}
function st(t){r.dataset.theme=t;tb.textContent=t==='dark'?'☀️':'🌙';try{localStorage.setItem('theme',t)}catch(e){}}
st(sv||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'));
tb.onclick=()=>st(r.dataset.theme==='dark'?'light':'dark');
const lk=document.getElementById('lk');document.getElementById('mn').onclick=()=>lk.classList.toggle('open');
lk.querySelectorAll('a').forEach(a=>a.onclick=()=>lk.classList.remove('open'));
const ws=['Software Engineer','Full-Stack Developer','IoT & ML Enthusiast','Problem Solver'],el=document.getElementById('ty');let w=0,c=0,d=false;
(function t(){const s=ws[w];el.textContent=s.slice(0,c);if(!d&&c===s.length){d=true;return setTimeout(t,1400)}if(d&&c===0){d=false;w=(w+1)%ws.length}c+=d?-1:1;setTimeout(t,d?40:85)})();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll('.rv').forEach(n=>io.observe(n));
const ss=[...document.querySelectorAll('section')],na=[...lk.querySelectorAll('a')];
addEventListener('scroll',()=>{let id='home';ss.forEach(s=>{if(scrollY>=s.offsetTop-140)id=s.id});na.forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+id))});
document.getElementById('yr').textContent=new Date().getFullYear();

const md=document.getElementById('md'),mc=document.getElementById('mc');
function closeM(){md.classList.remove('open')}
document.querySelectorAll('.pj').forEach(c=>{
  c.tabIndex=0;
  const h=document.createElement('div');h.className='hint';h.textContent='Click for details';c.appendChild(h);
  const open=e=>{if(e.target.closest('a'))return;
    const t=c.querySelector('h3').textContent,d=c.querySelector('p').textContent,g=c.querySelector('.tg').outerHTML,a=c.querySelector('a.m');
    mc.innerHTML='<h3></h3><p></p>'+g+(a?'<a class="btn p" target="_blank" rel="noopener" href="'+a.href+'">View on GitHub</a>':'<span class="sub">Private / client project: no public repository.</span>');
    mc.querySelector('h3').textContent=t;mc.querySelector('p').textContent=d;md.classList.add('open')};
  c.addEventListener('click',open);c.addEventListener('keydown',e=>{if(e.key==='Enter')open(e)});
});
document.getElementById('mx').onclick=closeM;md.onclick=e=>{if(e.target===md)closeM()};
addEventListener('keydown',e=>{if(e.key==='Escape')closeM()});

// ---- scroll progress + back to top ----
const bar=document.getElementById('bar'),up=document.getElementById('up');
addEventListener('scroll',()=>{const h=document.documentElement;bar.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%';up.classList.toggle('show',scrollY>600)});
up.onclick=()=>scrollTo({top:0,behavior:'smooth'});
// ---- project filters ----
document.querySelectorAll('#flt button').forEach(b=>b.onclick=()=>{
  document.querySelectorAll('#flt button').forEach(x=>x.classList.toggle('on',x===b));
  document.querySelectorAll('#pg .pj').forEach(c=>c.classList.toggle('hide',b.dataset.f!=='all'&&!c.dataset.cat.split(' ').includes(b.dataset.f)));
});
