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

const changeSlide = (nodeList, arrOfActiveClasses, picClass, screen) => {

    const removeActiveClasses = (min, current, max, arr, activeClass, picClass) => {

        if(min<current && min){
            arr[min].classList.remove(activeClass);
            if(picClass){
                arr[min].classList.remove(`${picClass}${min}`);
            }
            min = min + 1;
        }

        if(max>current && max){
            arr[max].classList.remove(activeClass);
            if(picClass){
                arr[max].classList.remove(`${picClass}${max}`);
            }
            max = max - 1;
        }

        if(min === current && max === current){
            return;
        }

        removeActiveClasses(min, current, max, arr, activeClass)
    }

    arrOfActiveClasses.forEach(activeClass => {
        nodeList.forEach((item, i) => {
            item.addEventListener('mouseover', () => {
                item.classList.add(activeClass);
                removeActiveClasses(0, i, nodeList.length, nodeList, activeClass);
                screen.classList.add(`${picClass}${i+1}`);
                removeActiveClasses(1, i+1, nodeList.length-1, nodeList, picClass);
                // if(i>0) {
                //     nodeList[i-1].classList.remove(activeClass);
                //     nodeList[i+1].classList.remove(activeClass);
                //     screen.classList.remove(`${picClass}${i}`);
                //     screen.classList.remove(`${picClass}${i+2}`);
                // }
                // if(i===0) {
                //     nodeList[i+1].classList.remove(activeClass);
                //     screen.classList.remove(`${picClass}${i+2}`);
                // }
            });
        });
    });
}

//==========ОБЪЯВЛЕНИЕ ПЕРЕМЕНЫХ И ВЫЗОВ ФУНКЦИЙ==========

  const promo = document.querySelector('.promo'),
          plane = promo.querySelector('.promo__plane'),
          promoTracer = promo.querySelector('.promo__tracer'),
          parallaxPhones = document.querySelector('.parallax-phones'),
          createShopList = document.querySelectorAll('.create-shop__list li'),
          createShopScreen = document.querySelector('.create-shop__pic-screen');



    addParallax(plane,0, 0, 1, 2, 0, false);
    addParallax(promoTracer,0, 0, 1, 2, 0, false);
    addParallax(parallaxPhones, 0, 0, 0.5, 0.3, 30, true);

    changeSlide(createShopList, ['--svg__create_shop__arrow-after', 'create-shop__active'], 'create-shop__pic-screen-slide', createShopScreen);
})