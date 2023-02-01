const nav = document.querySelector('nav.navbar')
// control nav in scroll
let lastScrollTop = 0;

window.addEventListener('scroll',()=>{
  let scrollTop = document.documentElement.scrollTop || window.pageYOffset;
  if(scrollTop > lastScrollTop){
    nav.style.cssText = 'transform: translateY(-110%);'
  }else{
    nav.style.cssText = 'transform: translateY(0%);'
  }
  lastScrollTop = scrollTop;
})