document.addEventListener('DOMContentLoaded', ()=> {

//==========ФУНКЦИЯ ДЛЯ СМЕЩЕНИЯ ЭЛЕМЕНТА ПРИ СКРОЛЛЕ ДОКУМЕНТА (ПАРАЛАКС)==========

  const addParallax = (relocatableElem, defaultTop, defaultLeft, stepTop, stepLeft, rotateDeg, scrollBack) => {

    let oldScrollTopPosition = 0;

    window.addEventListener('scroll', () => {

        const scrollTopPosition = document.documentElement.scrollTop;

        if(oldScrollTopPosition < scrollTopPosition) {
            defaultTop  = defaultTop - stepTop;
            defaultLeft = defaultLeft + stepLeft;
        }

        if(oldScrollTopPosition > scrollTopPosition) {
            defaultTop  = defaultTop + stepTop;
            defaultLeft = defaultLeft - stepLeft;

            if((scrollY === 0 || defaultTop < 0 || defaultLeft < 0) && !scrollBack){
                defaultTop = 0;
                defaultLeft = 0;
            }
        }
        
        relocatableElem.style.transform = `translate(${defaultLeft}rem, ${defaultTop}rem) rotate(${rotateDeg}deg)`;

        oldScrollTopPosition = scrollTopPosition;
    });
  }


//==========ФУНКЦИОНАЛ СЛАЙДЕРА==========

const changeSlide = (switchesList, slidesList, activeClass, switchActiveClass) => {

    const removeSwitchActiveClass = (min, index, max, switchesList, switchActiveClass) => {
        if(min < index) {
            switchesList[min].classList.remove(switchActiveClass);
            min = min+1;
        }
        if(index < max) {
            switchesList[max].classList.remove(switchActiveClass);
            max = max-1;
        }
        if(index === min && index === max){
            return;
        }
        removeSwitchActiveClass(min, index, max, switchesList, switchActiveClass);
    };

    switchesList.forEach((switchItem, i) => {
        switchItem.addEventListener('mouseover', () => {
            slidesList.forEach((slide, j) => {
                switchItem.classList.add(switchActiveClass);
                i===j ? slide.classList.add(activeClass) : slide.classList.remove(activeClass);
                removeSwitchActiveClass(0, i, switchesList.length-1, switchesList, switchActiveClass);                
            });
        });
    });
}

//==========ОБЪЯВЛЕНИЕ ПЕРЕМЕНЫХ И ВЫЗОВ ФУНКЦИЙ==========

  const promo = document.querySelector('.promo'),
          plane = promo.querySelector('.promo__plane'),
          promoTracer = promo.querySelector('.promo__tracer'),
          parallaxPhones = document.querySelector('.parallax-phones'),
          createShopSwitchesList = document.querySelectorAll('.create-shop__list li'),
          createShopSlides = document.querySelectorAll('.create-shop__pic-screen'),
          advantagesSwitchesList = document.querySelectorAll('.advantages__switch'),
          advantagesSlides = document.querySelectorAll('.advantages__slide');



    addParallax(plane,0, 0, 1, 2, 0, false);
    addParallax(promoTracer,0, 0, 1, 2, 0, false);
    addParallax(parallaxPhones, 0, 0, 0.3, 0.15, 30, true);

    changeSlide(createShopSwitchesList, createShopSlides, 'show', 'create-shop__active');
    changeSlide(advantagesSwitchesList, advantagesSlides, 'show', 'advantages__switch-active');
})