const H=document.querySelector("#icon-responsive-menu"),C=()=>{var e=document.querySelector("#myTopnav");e.className==="topnav"?e.className+=" responsive":e.className="topnav"};H.addEventListener("click",()=>{C()});const I=document.querySelector("#btn-download");I.addEventListener("click",()=>{window.open("https://1drv.ms/b/s!AsSMjUrLYm65n75X5t0Jx-V-WBODAA?e=RSOWsy")});const l=document.querySelector("#btn-skills"),i=document.querySelector("#btn-tools"),b=document.querySelector("#div-skills"),q=document.querySelector("#div-tools"),h=(e,n,t,o)=>{t.classList.add("skills-btn-active"),o.classList.remove("skills-btn-active"),t.classList.remove("skills-btn"),o.classList.add("skills-btn"),n.style.display="block",e.style.display="none"};l.addEventListener("click",()=>{h(q,b,l,i)});i.addEventListener("click",()=>{h(b,q,i,l)});const M=document.querySelector("#blackjack-project");M.addEventListener("click",()=>{window.open("https://giomm2.github.io/blackjack/")});const N=document.querySelector("#ln"),x=document.querySelector("#mail"),A=document.querySelector("#github"),B=document.querySelector("#call"),J=document.querySelector("#contact-call");N.addEventListener("click",()=>{window.open("https://www.linkedin.com/in/giovanny-morales-218961101/")});x.addEventListener("click",()=>{window.location.href="mailto:giomm269@gmail.com?"});A.addEventListener("click",()=>{window.open("https://github.com/giomm2")});B.addEventListener("click",()=>{J.innerHTML="(+506)62058911"});const O=()=>{const e=document.querySelector(".items-menu-container"),n=document.querySelector(".home-content"),t=document.querySelector(".about-content"),o=document.querySelector(".skills-content"),a=document.querySelector(".projects-content"),r=document.querySelector(".contact-content"),d=document.querySelector("#item-home"),m=document.querySelector("#item-about"),u=document.querySelector("#item-skills"),v=document.querySelector("#item-project"),p=document.querySelector("#item-contact");let c=window.scrollY+e.offsetHeight,w=n.offsetTop+n.offsetHeight,g=t.offsetTop+t.offsetHeight,_=o.offsetTop+o.offsetHeight,j=a.offsetTop+a.offsetHeight,E=r.offsetTop+r.offsetHeight,k=w-c,y=g-c,f=_-c,S=j-c,L=E-c,s=Math.min(...[k,y,f,S,L].filter(T=>T>0));d.classList.remove("active"),u.classList.remove("active"),m.classList.remove("active"),v.classList.remove("active"),p.classList.remove("active"),s===k&&d.classList.add("active"),s===y&&m.classList.add("active"),s===f&&u.classList.add("active"),s===S&&v.classList.add("active"),s===L&&p.classList.add("active")};window.addEventListener("scroll",O);
