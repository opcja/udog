const hamSpans = document.querySelectorAll('.hamburger span');
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

const showNavigation = () => {  
  hamburger.classList.toggle('clicked');
  nav.classList.toggle('show');
  setTimeout(function(){ nav.style.zIndex == 0 ? nav.style.zIndex = 1 : nav.style.zIndex = 0; }, 300);  

  for(const hamSpan of hamSpans) {
    hamSpan.classList.toggle('clicked');
  }
}


hamburger.addEventListener('click', showNavigation);