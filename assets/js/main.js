const qs=(s,c=document)=>c.querySelector(s), qsa=(s,c=document)=>[...c.querySelectorAll(s)];

const menuBtn=qs('.menu-toggle');
const navLinks=qs('.nav-links');
function closeMenu(){
  if(!navLinks||!menuBtn)return;
  navLinks.classList.remove('open');
  menuBtn.setAttribute('aria-expanded','false');
}
if(menuBtn&&navLinks){
  menuBtn.addEventListener('click',()=>{
    const open=navLinks.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded',String(open));
  });
  qsa('.nav-links a').forEach(a=>a.addEventListener('click',closeMenu));
  document.addEventListener('click',e=>{if(navLinks.classList.contains('open')&&!navLinks.contains(e.target)&&!menuBtn.contains(e.target))closeMenu()});
}

const modal=qs('#demoModal');
let previousFocus=null;
function openModal(){
  if(!modal)return;
  previousFocus=document.activeElement;
  modal.classList.add('open');
  document.body.style.overflow='hidden';
  setTimeout(()=>qs('#demoName',modal)?.focus(),40);
}
function closeModal(){
  if(!modal)return;
  modal.classList.remove('open');
  document.body.style.overflow='';
  previousFocus?.focus?.();
}
qsa('[data-demo]').forEach(el=>el.addEventListener('click',e=>{e.preventDefault();openModal()}));
qs('.modal-close')?.addEventListener('click',closeModal);
modal?.addEventListener('click',e=>{if(e.target===modal)closeModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeModal();closeMenu()}});

function whatsappFromForm(form,type='demo'){
  const data=Object.fromEntries(new FormData(form).entries());
  const lines=type==='contact'
    ? ['Hello Rana Academy, I have an enquiry.',`Name: ${data.name||''}`,`Phone: ${data.phone||''}`,`Exam: ${data.exam||''}`,`Message: ${data.message||''}`]
    : ['Hello Rana Academy, I want to book a free counselling/demo.',`Name: ${data.name||''}`,`Phone: ${data.phone||''}`,`Preparing for: ${data.exam||''}`,`Preferred mode: ${data.mode||'Please suggest'}`];
  window.open('https://wa.me/919805332278?text='+encodeURIComponent(lines.join('\n')),'_blank','noopener');
}
qsa('[data-wa-form]').forEach(form=>form.addEventListener('submit',e=>{
  e.preventDefault();
  if(!form.reportValidity())return;
  whatsappFromForm(form,form.dataset.waForm);
}));

const observer='IntersectionObserver' in window?new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}
}),{threshold:.12}):null;
qsa('.reveal').forEach(el=>observer?observer.observe(el):el.classList.add('visible'));

let activeFilter='all';
let searchTerm='';
function applyResourceFilters(){
  qsa('[data-category]').forEach(card=>{
    const filterMatch=activeFilter==='all'||card.dataset.category.includes(activeFilter);
    const searchMatch=!searchTerm||(card.dataset.search||'').toLowerCase().includes(searchTerm);
    card.hidden=!(filterMatch&&searchMatch);
  });
}
qsa('.filter-btn').forEach(btn=>btn.addEventListener('click',()=>{
  qsa('.filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  activeFilter=btn.dataset.filter;
  applyResourceFilters();
}));
qs('#resourceSearch')?.addEventListener('input',e=>{searchTerm=e.target.value.trim().toLowerCase();applyResourceFilters()});
