/* ================= BUSINESS INFORMATION (edit here) ================= */
const BIZ={name:'Luxuria Hair Studio',wa:'917004481440',phone:'+917004481440',phoneShow:'+91 70044 81440',
insta:'https://www.instagram.com/luxuria_2.o?stkn=MXM1a2V3cDZoZGJmaw==',maps:'https://maps.app.goo.gl/QkuhzdCTH8g9Dybx5',
logo:'https://i.ibb.co/dwCcqb83/Screenshot-20260929-151845.jpg',
hours:{0:[8,20],1:[8,20],2:[8,20],3:[8,20],4:[8,20],5:null,6:[8,20]}}; // 0=Sun ... 5=Fri(closed)
/* ================= IMAGE LIBRARY (replace URLs any time) ================= */
const U=id=>`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=75`;
const IMG={hero:'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1800&q=75',
cut:U('1503951914875-452162b0f3f1'),cut2:U('1585747860715-2ba37e788b70'),style:U('1522337360788-8b13dee7a37e'),
beard:U('1621605815971-fbc98d665033'),wash:U('1562322140-8baeececf3df'),spa:U('1519823551278-64ac92734fb1'),
treat:U('1595476108010-b4d1f102b1b1'),color:U('1492106087820-71f1a00d2b11'),bridal:U('1519741497674-611481863552'),
facial:U('1570172619644-dfd03ed5d881'),nails:U('1604654894610-df63bc536371'),massage:U('1544161515-4ab6ce6db874'),
salon:U('1527799820374-dcf8d9d4a388'),makeup:U('1487412947147-5cebf100ffc2'),prod:U('1526947425960-945c6e72858f'),prod2:U('1571781926291-c477ebfd024b')};
/* ================= SERVICE DATA (sample prices) ================= */
const SERVICES=[
[' professional Haircut',500,'30 min','hair','cut','Clean, precise cut tailored to your face shape.'],
['Premium hair set',100,'45 min','hair','cut2','Consultation, expert cut and finishing.'],
['wolf cut with setting',500,'40 min','hair','style','Event-ready styling with professional products.'],
['Beard Styling',199,'20 min','beard','beard','Sharp shaping and line-up for a defined look.'],
['dandruff- free treatment',700,'30 min','hair','wash','Relaxing wash with smooth blow-dry finish.'],
['Hair Spa',500,'60 min','treatment','spa','Deep nourishing spa for soft, shiny hair.'],
['Keratin Treatment',2499,'2.5 hrs','treatment','treat','Frizz-free, glossy hair for months.'],
['Hair Smoothening',2499,'2.5 hrs','treatment','treat','Silky straight, manageable texture.'],
['Hair Coloring',999,'90 min','hair','color','Rich colour with lasting shine.'],
['Global Hair Color',1499,'2 hrs','hair','color','Even, all-over colour from root to tip.'],
['Highlights',1299,'2 hrs','hair','style','Dimensional highlights for a sun-kissed look.'],
['Scalp Treatment',699,'45 min','treatment','spa','Cleansing care for a healthy scalp.'],
['Bridal Hairstyling',1999,'2 hrs','hair','bridal','Timeless bridal looks that last all day.'],
['Party Hairstyling',999,'60 min','hair','style','Glamorous styles for every occasion.'],
['Facial',699,'60 min','beauty','facial','Glow-boosting facial for fresh skin.'],
['Cleanup',499,'40 min','beauty','facial','Quick deep-cleanse for instant freshness.'],
['Manicure',499,'45 min','beauty','nails','Shaping, care and polish for neat hands.'],
['Pedicure',599,'50 min','beauty','nails','Soothing foot care and finish.'],
['Head Massage',399,'25 min','massage','massage','Stress-melting massage with warm oil.'],
['Hair Treatment',899,'60 min','treatment','treat','Repair therapy for damaged hair.']
].map(a=>({name:a[0],price:a[1],dur:a[2],cat:a[3],img:IMG[a[4]],desc:a[5]}));
/* ================= PRODUCT DATA (sample) ================= */
const PRODUCTS=[['Professional Shampoo',449,'Gentle daily salon-grade cleanse.'],['Hair Conditioner',429,'Silky softness and easy detangling.'],
['Hair Serum',549,'Frizz control with mirror shine.'],['Hair Mask',699,'Weekly deep-repair mask.'],['Styling Wax',349,'Flexible hold, matte finish.'],
['Hair Gel',249,'Strong hold, no stiffness.'],['Beard Oil',399,'Softens and conditions beard.'],['Beard Balm',449,'Shapes and moisturises.'],
['Hair Spray',379,'Long-lasting light hold.'],['Heat Protection Serum',599,'Shields hair from styling heat.']]
.map((p,i)=>({name:p[0],price:p[1],desc:p[2],img:i%2?IMG.prod2:IMG.prod}));
/* ================= GALLERY DATA ================= */
const GALLERY=[['Hair Styling','style'],['Hair Cut','cut'],['Hair Coloring','color'],['Beard Styling','beard'],['Bridal Styling','bridal'],
['Hair Treatment','treat'],['Makeup','makeup'],['Salon Interior','salon'],['Professional Grooming','cut2']].map(g=>({t:g[0],img:IMG[g[1]]}));
/* ================= VIDEO DATA (add more objects here) ================= */
const VIDEOS=[{title:'Luxuria Experience 1',id:'1k06y1c_yS9BLqR0KjGQ2rqnBTH40awC7'},{title:'Luxuria Experience 2',id:'1f3h27KpgbYxFIy0Ehk0fBd6exLw9d1aV'}];
/* ================= REVIEW DATA (replace with real reviews) ================= */
const REVIEWS=[['Aarav S.','Beautiful experience and very professional service.'],['Priya K.','Loved the hairstyle and the overall salon experience.'],
['Rohit M.','Best haircut I have had in Bokaro. Highly recommended.'],['Neha G.','The hair spa left my hair incredibly soft.'],['Vikram P.','Clean studio, calm atmosphere and skilled team.'],
['Sneha R.','My bridal hairstyle was perfect. Thank you!'],['Ankit D.','Beard styling was sharp and exactly what I wanted.'],['Pooja T.','Keratin results are amazing, zero frizz.'],
['Manish J.','Friendly staff and great attention to detail.'],['Riya A.','Loved my highlights. Colour looks so natural.'],['Deepak Y.','Worth every rupee. Premium feel throughout.'],
['Kavita L.','The facial gave me a lovely glow.'],['Sahil N.','Quick booking on WhatsApp and no waiting.'],['Ishita B.','They understood my style at once.'],
['Rahul V.','Head massage was so relaxing.'],['Anjali C.','Great party hairstyle, got many compliments.'],['Suresh K.','Very hygienic and well organised.'],
['Meera H.','Smoothening treatment made my hair silky.'],['Karan W.','Professional stylists who listen carefully.'],['Divya F.','Absolutely lovely salon. I will be back!']]
.map(r=>({name:r[0],text:r[1],stars:5}));
/* ==================================================================== */
const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
const wa=t=>`https://wa.me/${BIZ.wa}?text=${encodeURIComponent(t)}`;
const ON_SVC=!!document.getElementById('bf');
const rs=n=>'₹'+n.toLocaleString('en-IN');
const im=(s,a)=>`<img src="${s}" alt="${a}" loading="lazy" onerror="this.style.opacity=.2">`;
const svcCard=s=>`<article class="sc glass rv2" data-cat="${s.cat}"><div class="im">${im(s.img,s.name+' at Luxuria Hair Studio')}</div><div class="bd"><h3>${s.name}</h3><p>${s.desc}</p><div class="pr">${rs(s.price)}</div><div class="du">Approx. ${s.dur}</div><a class="btn book" href="${ON_SVC?'#book':'services.html?service='+encodeURIComponent(s.name)+'#book'}" data-s="${s.name}">Book Now</a></div></article>`;
const prodCard=p=>`<article class="sc glass rv2" data-cat="products"><div class="im">${im(p.img,p.name)}</div><div class="bd"><h3>${p.name}</h3><p>${p.desc}</p><div class="pr">${rs(p.price)}</div><a class="btn" href="${wa('Hello Luxuria Hair Studio, I would like to enquire about: '+p.name)}" target="_blank" rel="noopener">Enquire on WhatsApp</a></div></article>`;
function slider(root,auto=4500){const t=$('.tr',root),k=[...t.children],d=$('.dots',root);let i=0,h=0;
 const per=()=>Math.round(t.clientWidth/k[0].offsetWidth)||1,pg=()=>Math.ceil(k.length/per());
 const go=n=>{i=(n+pg())%pg();t.scrollTo({left:k[Math.min(i*per(),k.length-1)].offsetLeft-k[0].offsetLeft})};
 const dots=()=>{d.innerHTML='';for(let n=0;n<pg();n++){const b=document.createElement('button');b.ariaLabel='Slide '+(n+1);b.onclick=()=>go(n);d.append(b)}mark()};
 const mark=()=>$$('button',d).forEach((b,n)=>b.classList.toggle('on',n==i));
 $('.p',root).onclick=()=>go(i-1);$('.n',root).onclick=()=>go(i+1);
 t.addEventListener('scroll',()=>{i=Math.round(t.scrollLeft/(k[0].offsetWidth*per()+18*per())*1)||0;if(i>=pg())i=pg()-1;mark()},{passive:true});
 ['mouseenter','touchstart','focusin'].forEach(e=>root.addEventListener(e,()=>h=1,{passive:true}));
 ['mouseleave','touchend','focusout'].forEach(e=>root.addEventListener(e,()=>setTimeout(()=>h=0,2500),{passive:true}));
 setInterval(()=>{if(!h&&!document.hidden)go(i+1)},auto);addEventListener('resize',dots);dots()}
const sh=(id,html,fn)=>{const e=document.getElementById(id);if(e){e.innerHTML=html;fn&&fn(e)}};
sh('featured',SERVICES.filter(s=>['Premium Haircut','Hair Styling','Beard Styling','Hair Spa','Keratin Treatment','Bridal Hairstyling','Facial','Head Massage'].includes(s.name)).map(svcCard).join(''));
sh('gtr',GALLERY.map(g=>`<div class="gi">${im(g.img,g.t+' by Luxuria Hair Studio')}<b>${g.t}</b></div>`).join(''),()=>slider($('#gallery'),4000));
sh('vtr',VIDEOS.map(v=>`<div class="vc glass"><div class="fm" data-id="${v.id}"><button class="pl" aria-label="Play ${v.title}">▶</button></div><div class="row"><b>${v.title}</b><a class="btn o" style="padding:9px 18px" target="_blank" rel="noopener" href="https://drive.google.com/file/d/${v.id}/view">Watch Video</a></div></div>`).join(''),e=>{
 $$('.pl',e).forEach(b=>b.onclick=()=>{const f=b.parentNode;f.innerHTML=`<iframe src="https://drive.google.com/file/d/${f.dataset.id}/preview" allow="autoplay;fullscreen" allowfullscreen title="Luxuria video"></iframe>`});slider($('#videos'),9000)});
sh('rtr',REVIEWS.map(r=>`<div class="rv glass"><div class="st">${'★'.repeat(r.stars)}</div><q>“${r.text}”</q><b>${r.name}</b></div>`).join(''),()=>slider($('#reviews'),5000));
/* hours + open now */
const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],order=[2,3,4,5,6,0,1],fmt=h=>(h%12||12)+':00 '+(h<12?'AM':'PM');
sh('hours',order.map(d=>`<div class="${d==new Date().getDay()?'td':''}"><span>${days[d]}</span><span>${BIZ.hours[d]?fmt(BIZ.hours[d][0])+' – '+fmt(BIZ.hours[d][1]):'Closed / Hours may differ'}</span></div>`).join(''));
const st=document.getElementById('status');if(st){const n=new Date(),H=BIZ.hours[n.getDay()],o=H&&n.getHours()>=H[0]&&n.getHours()<H[1];st.textContent=o?'● Open Now':'● Closed Now';st.classList.toggle('on',o)}
/* services page */
sh('svcs',SERVICES.map(svcCard).join('')+PRODUCTS.map(prodCard).join(''),()=>{
 sh('sel','<option value="">Select a service</option>'+SERVICES.map(s=>`<option>${s.name} — ${rs(s.price)}</option>`).join(''));
 $$('.book').forEach(b=>b.onclick=e=>{e.preventDefault();$('#sel').value=$$('#sel option').find(o=>o.text.startsWith(b.dataset.s+' —')).value;$('#book').scrollIntoView({behavior:'smooth'})});
 const q=new URLSearchParams(location.search).get('service');if(q){const o=$$('#sel option').find(o=>o.text.startsWith(q+' —'));if(o){$('#sel').value=o.value;setTimeout(()=>$('#book').scrollIntoView({behavior:'smooth'}),400)}}
 $$('.flt button').forEach(b=>b.onclick=()=>{$$('.flt button').forEach(x=>x.classList.remove('on'));b.classList.add('on');const f=b.dataset.f;
  $$('#svcs .sc').forEach(c=>{c.classList.toggle('h',!(f=='all'||c.dataset.cat==f));c.style.animation='none';c.offsetHeight;c.style.animation=''})});
 $$('.flt button')[0]&&0});
const bf=$('#bf');if(bf){const dt=$('#dt'),ok=$('#ok');dt.min=new Date().toISOString().split('T')[0];
 const say=t=>{ok.style.display='block';ok.textContent=t};
 bf.onsubmit=e=>{e.preventDefault();const g=n=>bf.elements[n].value.trim();
  if(!g('nm'))return say('Please enter your name.');
  if(!/^[+\d\s-]{10,15}$/.test(g('ph')))return say('Please enter a valid WhatsApp / phone number.');
  if(!g('sv'))return say('Please select a service.');
  if(!g('dt'))return say('Please select a preferred date.');
  if(!g('tm'))return say('Please select a preferred time.');
  const m=`Hello Luxuria Hair Studio,\n\nI would like to book an appointment.\n\nName: ${g('nm')}\n\nPhone: ${g('ph')}\n\nService: ${g('sv')}\n\nDate: ${g('dt')}\n\nTime: ${g('tm')}\n\nAdditional Message: ${g('ms')||'-'}\n\nPlease confirm my appointment.\n\nThank you.`;
  say('Thank you, '+g('nm')+'! Opening WhatsApp…');
  setTimeout(()=>{location.href=wa(m)},1000)}}
/* common */
const nav=$('nav'),hb=$('.ham'),lk=$('.links'),tp=$('#top');
hb.onclick=()=>{hb.classList.toggle('on');lk.classList.toggle('on');hb.setAttribute('aria-expanded',lk.classList.contains('on'))};
$$('.links a').forEach(a=>a.onclick=()=>{hb.classList.remove('on');lk.classList.remove('on')});
addEventListener('scroll',()=>{nav.classList.toggle('s',scrollY>40);tp.classList.toggle('s',scrollY>600);const h=$('.hero');if(h&&scrollY<innerHeight)h.style.backgroundPositionY=scrollY*.3+'px'},{passive:true});
tp.onclick=()=>scrollTo({top:0,behavior:'smooth'});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('v');io.unobserve(e.target)}}),{threshold:.12});
const obs=()=>$$('.rv2:not(.v)').forEach(e=>io.observe(e));obs();setTimeout(obs,300);
$$('[data-count]').forEach(el=>{const T=+el.dataset.count;new IntersectionObserver(([e],o)=>{if(!e.isIntersecting)return;o.disconnect();let n=0;const s=setInterval(()=>{n+=Math.ceil(T/40);if(n>=T){n=T;clearInterval(s)}el.textContent=n+'+'},35)}).observe(el)});
$$('[data-wa]').forEach(a=>a.href=wa('Hello Luxuria Hair Studio, I would like to book an appointment.'));
/* page fade */
document.body.style.animation='in2 .7s both';
/* particles */
const cv=$('#pt');if(cv&&!matchMedia('(prefers-reduced-motion:reduce)').matches){const c=cv.getContext('2d');let W,H;const P=[];const rz=()=>{W=cv.width=innerWidth;H=cv.height=innerHeight};rz();addEventListener('resize',rz);
 for(let i=0;i<(innerWidth<600?28:60);i++)P.push({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.8+.4,v:Math.random()*.3+.08,a:Math.random()*.5+.15});
 (function f(){c.clearRect(0,0,W,H);P.forEach(p=>{p.y-=p.v;p.x+=Math.sin(p.y/60)*.2;if(p.y<0){p.y=H;p.x=Math.random()*W}c.fillStyle=`rgba(200,204,212,${p.a})`;c.beginPath();c.arc(p.x,p.y,p.r,0,7);c.fill()});requestAnimationFrame(f)})()}
