/* ================= BUSINESS INFORMATION ================= */
const BIZ={
  name:'Luxuria Hair Studio',
  wa:'917004481440',
  phone:'+917004481440',
  phoneShow:'+91 70044 81440',
  insta:'https://www.instagram.com/luxuria_2.o',
  maps:'https://maps.app.goo.gl/QkuhzdCTH8g9Dybx5',
  logo:'https://i.ibb.co/dwCcqb83/Screenshot-20260929-151845.jpg',
  hours:{
    0:[8,20],
    1:[8,20],
    2:[8,20],
    3:[8,20],
    4:[8,20],
    5:null,
    6:[8,20]
  }
};

/* ================= IMAGE LIBRARY ================= */
const U=id=>`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=75`;

const IMG={
  hero:'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1800&q=75',
  cut:U('1503951914875-452162b0f3f1'),
  cut2:U('1585747860715-2ba37e788b70'),
  style:U('1522337360788-8b13dee7a37e'),
  beard:U('1621605815971-fbc98d665033'),
  wash:U('1562322140-8baeececf3df'),
  spa:U('1519823551278-64ac92734fb1'),
  treat:U('1595476108010-b4d1f102b1b1'),
  color:U('1492106087820-71f1a00d2b11'),
  bridal:U('1519741497674-611481863552'),
  facial:U('1570172619644-dfd03ed5d881'),
  nails:U('1604654894610-df63bc536371'),
  massage:U('1544161515-4ab6ce6db874'),
  salon:U('1527799820374-dcf8d9d4a388'),
  makeup:U('1487412947147-5cebf100ffc2'),
  prod:U('1526947425960-945c6e72858f'),
  prod2:U('1571781926291-c477ebfd024b')
};

/* ================= CLIENT SERVICES & PRICES ================= */
const SERVICES=[
  ['Professional Haircut',500,'hair','cut','Professional haircut with a clean and stylish finish.'],
  ['Hair Set',100,'hair','style','Professional hair setting for a stylish look.'],
  ['Wolf Cut with Setting',500,'hair','style','Trendy wolf cut with professional setting.'],
  ['Hair Spa',500,'treatment','spa','Relaxing hair spa for soft and healthy-looking hair.'],
  ['Dandruff-Free Treatment',700,'treatment','treat','Professional treatment for dandruff concerns.'],

  ['Global Black Colour',300,'hair','color','Rich black hair colour with a smooth professional finish.'],
  ['Hair Highlighting (Caping)',800,'hair','color','Stylish hair highlighting for a dimensional look.'],
  ['Hair Highlighting (Per Step)',100,'hair','color','Professional highlighting charged per step.'],
  ['Ash Colour',2000,'hair','color','Modern ash colour for an elegant look.'],
  ['Hair Perming',2000,'treatment','treat','Professional hair perming treatment.'],
  ['Hair Straightening',1500,'treatment','treat','Smooth and manageable hair straightening.'],

  ['Normal Facial','800-1000','beauty','facial','Refreshing facial for clean and glowing skin.'],
  ['Professional Facial Package','2000-4000','beauty','facial','Premium professional facial package.']
].map(a=>({
  name:a[0],
  price:a[1],
  cat:a[2],
  img:IMG[a[3]],
  desc:a[4]
}));

/* ================= PRICE FORMAT ================= */
const rs=n=>{
  if(typeof n==='string'){
    return '₹'+n.replace('-', '–₹');
  }
  return '₹'+n.toLocaleString('en-IN');
};

/* ================= GALLERY ================= */
const GALLERY=[
  ['Hair Styling','style'],
  ['Hair Cut','cut'],
  ['Hair Coloring','color'],
  ['Hair Treatment','treat'],
  ['Facial','facial'],
  ['Salon Interior','salon']
].map(g=>({
  t:g[0],
  img:IMG[g[1]]
}));

/* ================= REVIEWS ================= */
const REVIEWS=[
  ['Aarav S.','Beautiful experience and very professional service.'],
  ['Priya K.','Loved the hairstyle and the overall salon experience.'],
  ['Rohit M.','Amazing haircut and great service.'],
  ['Neha G.','The hair spa was a great experience.'],
  ['Vikram P.','Clean studio and professional service.'],
  ['Sneha R.','Very happy with my hairstyle.'],
  ['Ankit D.','Professional and friendly service.'],
  ['Pooja T.','Loved the overall salon experience.']
].map(r=>({
  name:r[0],
  text:r[1],
  stars:5
}));

/* ================= COMMON FUNCTIONS ================= */
const $=(s,c=document)=>c.querySelector(s);
const $$=(s,c=document)=>[...c.querySelectorAll(s)];

const wa=t=>
  `https://wa.me/${BIZ.wa}?text=${encodeURIComponent(t)}`;

const ON_SVC=!!document.getElementById('bf');

const im=(s,a)=>
  `<img src="${s}" alt="${a}" loading="lazy" onerror="this.style.opacity=.2">`;

/* ================= SERVICE CARD ================= */
const svcCard=s=>`
<article class="sc glass rv2" data-cat="${s.cat}">
  <div class="im">
    ${im(s.img,s.name+' at Luxuria Hair Studio')}
  </div>

  <div class="bd">
    <h3>${s.name}</h3>

    <p>${s.desc}</p>

    <div class="pr">${rs(s.price)}</div>

    <a class="btn book"
       href="${ON_SVC?'#book':'services.html?service='+encodeURIComponent(s.name)+'#book'}"
       data-s="${s.name}">
       Book Now
    </a>
  </div>
</article>`;

/* ================= SLIDER ================= */
function slider(root,auto=4500){

  if(!root)return;

  const t=$('.tr',root);
  if(!t)return;

  const k=[...t.children];
  const d=$('.dots',root);

  if(!k.length)return;

  let i=0;
  let h=0;

  const per=()=>{
    if(!k[0])return 1;
    return Math.max(1,Math.round(t.clientWidth/k[0].offsetWidth));
  };

  const pg=()=>Math.ceil(k.length/per());

  const mark=()=>{
    if(!d)return;
    $$('button',d).forEach((b,n)=>{
      b.classList.toggle('on',n===i);
    });
  };

  const go=n=>{
    i=(n+pg())%pg();

    const item=k[Math.min(i*per(),k.length-1)];

    if(item){
      t.scrollTo({
        left:item.offsetLeft-k[0].offsetLeft,
        behavior:'smooth'
      });
    }

    mark();
  };

  const dots=()=>{

    if(!d)return;

    d.innerHTML='';

    for(let n=0;n<pg();n++){

      const b=document.createElement('button');

      b.ariaLabel='Slide '+(n+1);

      b.onclick=()=>go(n);

      d.appendChild(b);
    }

    mark();
  };

  const prev=$('.p',root);
  const next=$('.n',root);

  if(prev)prev.onclick=()=>go(i-1);
  if(next)next.onclick=()=>go(i+1);

  t.addEventListener('scroll',()=>{
    const width=k[0].offsetWidth+18;
    i=Math.round(t.scrollLeft/(width*per()));
    if(i>=pg())i=pg()-1;
    mark();
  },{passive:true});

  root.addEventListener('mouseenter',()=>h=1);
  root.addEventListener('mouseleave',()=>h=0);

  setInterval(()=>{
    if(!h&&!document.hidden)go(i+1);
  },auto);

  addEventListener('resize',dots);

  dots();
}

/* ================= FEATURED SERVICES ================= */
sh(
  'featured',

  SERVICES
    .slice(0,8)
    .map(svcCard)
    .join('')
);

/* ================= GALLERY ================= */
sh(
  'gtr',

  GALLERY
    .map(g=>`
      <div class="gi">
        ${im(g.img,g.t+' by Luxuria Hair Studio')}
        <b>${g.t}</b>
      </div>
    `)
    .join(''),

  ()=>slider($('#gallery'),4000)
);

/* ================= REVIEWS ================= */
sh(
  'rtr',

  REVIEWS
    .map(r=>`
      <div class="rv glass">
        <div class="st">${'★'.repeat(r.stars)}</div>
        <q>“${r.text}”</q>
        <b>${r.name}</b>
      </div>
    `)
    .join(''),

  ()=>slider($('#reviews'),5000)
);

/* ================= OPENING HOURS ================= */
const days=[
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

const order=[2,3,4,5,6,0,1];

const fmt=h=>
  (h%12||12)+':00 '+(h<12?'AM':'PM');

sh(
  'hours',

  order.map(d=>`
    <div class="${d===new Date().getDay()?'td':''}">
      <span>${days[d]}</span>

      <span>
        ${
          BIZ.hours[d]
          ?fmt(BIZ.hours[d][0])+' – '+fmt(BIZ.hours[d][1])
          :'Closed'
        }
      </span>
    </div>
  `).join('')
);

/* ================= OPEN / CLOSED STATUS ================= */
const st=$('#status');

if(st){

  const n=new Date();

  const H=BIZ.hours[n.getDay()];

  const o=
    H &&
    n.getHours()>=H[0] &&
    n.getHours()<H[1];

  st.textContent=o?'● Open Now':'● Closed Now';

  st.classList.toggle('on',o);
}

/* ================= SERVICES PAGE ================= */
sh(
  'svcs',

  SERVICES
    .map(svcCard)
    .join(''),

  ()=>{

    const select=$('#sel');

    if(select){

      select.innerHTML=
        '<option value="">Select a service</option>'+
        SERVICES.map(s=>
          `<option>${s.name} — ${rs(s.price)}</option>`
        ).join('');
    }

    $$('.book').forEach(b=>{

      b.onclick=e=>{

        e.preventDefault();

        if(select){

          const option=
            $$('#sel option')
            .find(o=>o.text.startsWith(b.dataset.s+' —'));

          if(option){
            select.value=option.value;
          }
        }

        const book=$('#book');

        if(book){
          book.scrollIntoView({
            behavior:'smooth'
          });
        }
      };
    });

    const q=
      new URLSearchParams(location.search)
      .get('service');

    if(q&&select){

      const option=
        $$('#sel option')
        .find(o=>o.text.startsWith(q+' —'));

      if(option){

        select.value=option.value;

        setTimeout(()=>{

          const book=$('#book');

          if(book){
            book.scrollIntoView({
              behavior:'smooth'
            });
          }

        },400);
      }
    }

    $$('.flt button').forEach(b=>{

      b.onclick=()=>{

        $$('.flt button')
          .forEach(x=>x.classList.remove('on'));

        b.classList.add('on');

        const f=b.dataset.f;

        $$('#svcs .sc').forEach(c=>{

          c.classList.toggle(
            'h',
            !(f==='all'||c.dataset.cat===f)
          );

          c.style.animation='none';

          c.offsetHeight;

          c.style.animation='';
        });
      };
    });
  }
);

/* ================= BOOKING FORM ================= */
const bf=$('#bf');

if(bf){

  const dt=$('#dt');
  const ok=$('#ok');

  if(dt){

    dt.min=
      new Date()
      .toISOString()
      .split('T')[0];
  }

  const say=t=>{

    if(ok){

      ok.style.display='block';

      ok.textContent=t;
    }
  };

  bf.onsubmit=e=>{

    e.preventDefault();

    const g=n=>
      bf.elements[n]
      ?bf.elements[n].value.trim()
      :'';

    if(!g('nm'))
      return say('Please enter your name.');

    if(!/^[+\d\s-]{10,15}$/.test(g('ph')))
      return say('Please enter a valid phone number.');

    if(!g('sv'))
      return say('Please select a service.');

    if(!g('dt'))
      return say('Please select a preferred date.');

    if(!g('tm'))
      return say('Please select a preferred time.');

    const m=
`Hello Luxuria Hair Studio,

I would like to book an appointment.

Name: ${g('nm')}

Phone: ${g('ph')}

Service: ${g('sv')}

Date: ${g('dt')}

Time: ${g('tm')}

Additional Message: ${g('ms')||'-'}

Please confirm my appointment.

Thank you.`;

    say(
      'Thank you, '+g('nm')+'! Opening WhatsApp…'
    );

    setTimeout(()=>{
      location.href=wa(m);
    },1000);
  };
}

/* ================= NAVIGATION ================= */
const nav=$('nav');
const hb=$('.ham');
const lk=$('.links');
const tp=$('#top');

if(hb&&lk){

  hb.onclick=()=>{

    hb.classList.toggle('on');

    lk.classList.toggle('on');

    hb.setAttribute(
      'aria-expanded',
      lk.classList.contains('on')
    );
  };
}

$$('.links a').forEach(a=>{

  a.onclick=()=>{

    if(hb)hb.classList.remove('on');

    if(lk)lk.classList.remove('on');
  };
});

/* ================= SCROLL ================= */
addEventListener('scroll',()=>{

  if(nav)
    nav.classList.toggle('s',scrollY>40);

  if(tp)
    tp.classList.toggle('s',scrollY>600);

  const h=$('.hero');

  if(h&&scrollY<innerHeight){

    h.style.backgroundPositionY=
      scrollY*.3+'px';
  }

},{passive:true});

/* ================= TOP BUTTON ================= */
if(tp){

  tp.onclick=()=>{

    scrollTo({
      top:0,
      behavior:'smooth'
    });
  };
}

/* ================= SCROLL ANIMATION ================= */
const io=
  new IntersectionObserver(
    es=>es.forEach(e=>{

      if(e.isIntersecting){

        e.target.classList.add('v');

        io.unobserve(e.target);
      }

    }),
    {threshold:.12}
  );

const obs=()=>
  $$('.rv2:not(.v)')
  .forEach(e=>io.observe(e));

obs();

setTimeout(obs,300);

/* ================= COUNTERS ================= */
$$('[data-count]').forEach(el=>{

  const T=+el.dataset.count;

  new IntersectionObserver(([e],o)=>{

    if(!e.isIntersecting)return;

    o.disconnect();

    let n=0;

    const s=setInterval(()=>{

      n+=Math.ceil(T/40);

      if(n>=T){

        n=T;

        clearInterval(s);
      }

      el.textContent=n+'+';

    },35);

  }).observe(el);
});

/* ================= WHATSAPP BUTTONS ================= */
$$('[data-wa]').forEach(a=>{

  a.href=
    wa(
      'Hello Luxuria Hair Studio, I would like to book an appointment.'
    );
});

/* ================= PAGE FADE ================= */
document.body.style.animation='in2 .7s both';

/* ================= PARTICLES ================= */
const cv=$('#pt');

if(
  cv &&
  !matchMedia('(prefers-reduced-motion:reduce)').matches
){

  const c=cv.getContext('2d');

  let W,H;

  const P=[];

  const rz=()=>{

    W=cv.width=innerWidth;

    H=cv.height=innerHeight;
  };

  rz();

  addEventListener('resize',rz);

  for(
    let i=0;
    i<(innerWidth<600?28:60);
    i++
  ){

    P.push({
      x:Math.random()*W,
      y:Math.random()*H,
      r:Math.random()*1.8+.4,
      v:Math.random()*.3+.08,
      a:Math.random()*.5+.15
    });
  }

  (function f(){

    c.clearRect(0,0,W,H);

    P.forEach(p=>{

      p.y-=p.v;

      p.x+=Math.sin(p.y/60)*.2;

      if(p.y<0){

        p.y=H;

        p.x=Math.random()*W;
      }

      c.fillStyle=
        `rgba(200,204,212,${p.a})`;

      c.beginPath();

      c.arc(
        p.x,
        p.y,
        p.r,
        0,
        7
      );

      c.fill();
    });

    requestAnimationFrame(f);

  })();
}
