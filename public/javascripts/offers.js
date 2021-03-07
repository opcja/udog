let offers = [...document.querySelectorAll('.offer')];
const rightArrow = document.querySelector('.arrow-right');
const leftArrow = document.querySelector('.arrow-left');

const showOfferIndex = Math.floor(offers.length/2);
let touchStart = null;
let touchEnd = null;

const hideOffers = (offers2 = []) => {
  let positionValue = 110;  
  for(let i = showOfferIndex; i >= 0; i--) {    
    if(i === showOfferIndex) {
      offers2[i].style.cssText = null;      
      offers2[i].style.opacity = "100%";      
    } else { 
      offers2[i].style.cssText = null;
      offers2[i].style.opacity = "0";       
      offers2[i].style.transform = `translateX(-${positionValue}%)`;         
      positionValue += 100;
    }
  }  
  positionValue = 110;

  for(let i = showOfferIndex + 1; i < offers.length; i++) {
    offers2[i].style.cssText = null;
    offers2[i].style.opacity = "0";    
    offers2[i].style.transform = `translateX(${positionValue}%)`;    
    positionValue += 100;     
  } 
  
  offers[showOfferIndex].addEventListener('touchstart', touchStartFunction, false);  
  offers[showOfferIndex].addEventListener('touchend', touchEndFunction, false);   
}

hideOffers(offers);

function touchStartFunction(e) {
  touchStart = e.touches[0].clientX;  
}

function touchEndFunction(e) {
  touchEnd = e.changedTouches[0].clientX;

  if((touchEnd - touchStart) < -100) {
    spinOffersLeft();    
    touchStart = null;
    touchEnd = null    
  }

  if((touchEnd - touchStart) > 100) {
    spinOffersRight();    
    touchStart = null;
    touchEnd = null;    
  } 
  offers[showOfferIndex].removeEventListener('touchend', touchEndFunction, false);   
  offers[showOfferIndex].removeEventListener('touchstart', touchStartFunction, false);  

  offers[showOfferIndex].addEventListener('touchstart', touchStartFunction, false);  
  offers[showOfferIndex].addEventListener('touchend', touchEndFunction, false);   
}

const spinOffersRight = () => {  
  let arrOffers = [];

  for(let i = 0; i < offers.length; i++) {    
    if(i) {
      arrOffers[i] = offers[i-1];
    } else {
     arrOffers[i] = offers[offers.length - 1];
    }
  }    
  offers = arrOffers;
  hideOffers(arrOffers);  
}

const spinOffersLeft = () => {  
  let arrOffers = [];

  for(let i = 0; i < offers.length; i++) {    
    if(i > 0 && i < offers.length - 1) {
      arrOffers[i] = offers[i+1];
    } else if (i === offers.length - 1) {
      arrOffers[i] = offers[0];     
    } else if (i === 0) {
      arrOffers[i] = offers[i+1];
    }
  }    
  offers = arrOffers;
  hideOffers(arrOffers);
}

rightArrow.addEventListener('click', spinOffersRight);
leftArrow.addEventListener('click', spinOffersLeft);


