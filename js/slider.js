const slider = () => {
    const leftBtn = document.querySelector('#btn-left');
    const rightBtn = document.querySelector('#btn-right');
    const logo = document.querySelector('.logo');
    const slides = document.querySelectorAll('.slider__section');

    let i = 0;

    const previous = () => {
        slides[i].classList.remove('active');
        i--;

        if (i < 0) {
            i = slides.length - 1
        }

        slides[i].classList.add('active');
    }

    const next = () => {
        slides[i].classList.remove('active');
        i++;

        if (i >= slides.length) {
            i = 0;
        }

        slides[i].classList.add('active');
    }

    const goSection = (id) => {
        slides[i].classList.remove('active');

        i = id;

        slides[id].classList.add('active');
    }

    const goFirst = () => {
        slides[i].classList.remove('active');
        i = 0;
        slides[i].classList.add('active')
    }

    //Event on click to change slider
    document.addEventListener('click', e => {
        let id = 0;

        if (e.target === leftBtn) {
            e.preventDefault();
            previous();
        }
        if (e.target === rightBtn) {
            e.preventDefault();
            next();
        }
        if (e.target.classList[0] === 'item') {
            e.preventDefault();
            id = e.target.id;
            goSection(id);
        }
        if (e.target === logo) {
            e.preventDefault();
            goFirst();
        }
    })

    //Event on scroll to change slider
    document.addEventListener('wheel', (e) => {
        if (e.deltaY < 0) {
            e.preventDefault();
            previous();
        }
        else if (e.deltaY > 0) {
            e.preventDefault();
            next();
        }
    });

    // //Event on swipe left or rigth
    // let touchstartX = 0;
    // let touchendX = 0;

    // const checkDirection = () => {
    //     if (touchendX < touchstartX) next();
    //     if (touchendX > touchstartX) previous();
    // }

    // document.addEventListener('touchstart', e => {
    //     touchstartX = e.changedTouches[0].screenX;
    //     checkDirection();
    // })

    // document.addEventListener('touchend', e => {
    //     touchendX = e.changedTouches[0].screenX;
    //     checkDirection();
    // })
}

export default slider;