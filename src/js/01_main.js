document.addEventListener('DOMContentLoaded', ()=> {
    const promo = document.querySelector('.promo'),
          plane = promo.querySelector('.promo__plane'),
          promoTracer = promo.querySelector('.promo__tracer');


//==========ФУНКЦИЯ ДЛЯ СМЕЩЕНИЯ ЭЛЕМЕНТА ПРИ СКРОЛЛЕ ДОКУМЕНТА==========

  const addParallax = (relocatableElem, defaultTop, defaultLeft, stepTop, stepLeft) => {

    let oldScrollTopPosition = 0;

    window.addEventListener('scroll', () => {

        const scrollTopPosition = document.documentElement.scrollTop;

        if(oldScrollTopPosition < scrollTopPosition) {
            relocatableElem.classList.remove('add-transition');
            defaultTop  = defaultTop - stepTop;
            defaultLeft = defaultLeft + stepLeft;
        }

        if(oldScrollTopPosition > scrollTopPosition) {
            defaultTop  = defaultTop + stepTop;
            defaultLeft = defaultLeft - stepLeft;

            if(scrollY === 0 || defaultTop < 0 || defaultLeft < 0){
                defaultTop = 0;
                defaultLeft = 0;
                relocatableElem.classList.add('add-transition');
            }
        }
        
        relocatableElem.style.transform = `translate(${defaultLeft}rem, ${defaultTop}rem)`;

        oldScrollTopPosition = scrollTopPosition;
    });
  }

    addParallax(plane,0, 0, 1, 2);
    addParallax(promoTracer,0, 0, 1, 2);

// window.onwheel = (e) => console.log(e.deltaY < 0);
  
})