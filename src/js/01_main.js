document.addEventListener('DOMContentLoaded', ()=> {
    const promo = document.querySelector('.promo'),
          plane = promo.querySelector('.promo__plane');

    window.addEventListener('scroll', () => {
        let defaultTop = 0,
            defaultLeft = 0;

            defaultTop  = defaultTop - 2;
            defaultLeft = defaultLeft + 1;

            // plane.style.transform = `translate(${defaultLeft}rem, ${defaultTop}rem)`;

            console.log(plane.getBoundingClientRect());
    });

    
})