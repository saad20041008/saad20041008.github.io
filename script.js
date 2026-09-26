const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
window.addEventListener('load',()=>setTimeout(()=>$('.loader').classList.add('done'),450));

const phrases=["Mechanical Design","Robotics & Automation","Systems Innovation","Future Engineer"];
let pi=0,ci=0,deleting=false;
function type(){const el=$('#typing'),word=phrases[pi];
el.textContent=word.slice(0,ci);
if(!deleting&&ci<word.length){ci++;setTimeout(type,75)}
else if(!deleting){deleting=true;setTimeout(type,1300)}
else if(ci>0){ci--;setTimeout(type,38)}
else{deleting=false;pi=(pi+1)%phrases.length;setTimeout(type,350)}}
type();

$('#theme').onclick=()=>{document.body.classList.toggle('light');$('#theme').textContent=document.body.classList.contains('light')?'☾':'☼';localStorage.setItem('theme',document.body.classList.contains('light')?'light':'dark')};
if(localStorage.getItem('theme')==='light'){document.body.classList.add('light');$('#theme').textContent='☾'}

$('#menu').onclick=()=>{$('.nav').classList.toggle('open')};
$$('#nav a').forEach(a=>a.onclick=()=>$('.nav').classList.remove('open'));

const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
$$('.reveal').forEach(x=>io.observe(x));

const top=$('#top');window.addEventListener('scroll',()=>top.classList.toggle('show',scrollY>500));
top.onclick=()=>scrollTo({top:0,behavior:'smooth'});

document.addEventListener('mousemove',e=>{const c=document.querySelector('.cursor');if(innerWidth>900){c.style.transform=`translate(${e.clientX}px,${e.clientY}px)`}});
