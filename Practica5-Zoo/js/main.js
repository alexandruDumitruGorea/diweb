let body = document.querySelector('body');
const page = document.querySelector('.wrapper').dataset.page;
// MENÚ
let headerContainer = document.getElementById('header-container'),
    menuToggle = document.getElementById('menu-toggle');

menuToggle.addEventListener('click', () => {
    headerContainer.classList.toggle('menu-active');
    body.classList.toggle('body_withoutScroll');
})

if (page == 'index') {
    let i = 1;
    let sliderTop = document.querySelectorAll('.slider-item');
    setInterval(() => {
        sliderTop.forEach(element => {
            element.classList.remove('is-opacity');
        });
        sliderTop[i].classList.add('is-opacity');
        if (i < sliderTop.length - 1) {
            i++;
        } else {
            i = 0;
        }
    }, 3500);
}

if (page == 'fauna') {
    let slider = document.querySelector('.llegan-slider'),
        next = document.querySelector('.next'),
        prev = document.querySelector('.prev');

    let direction;

    next.addEventListener('click', function() {
        direction = 1;
        slider.style.transform = 'translate(-100%)';
    });

    prev.addEventListener('click', function() {
        direction = -1;
        slider.insertAdjacentElement("afterbegin", slider.lastElementChild);
        slider.style.transition = 'none';
        slider.style.transform = 'translate(-100%)';
        setTimeout(() => {
            slider.style.transition = 'all 0.5s';
            slider.style.transform = 'translate(0%)';
        });
    });

    slider.addEventListener('transitionend', function() {
        if (direction === 1) {
            slider.appendChild(slider.firstElementChild);
            slider.style.transition = 'none';
            slider.style.transform = 'translate(0)';
        }

        setTimeout(() => {
            slider.style.transition = 'all 0.5s';
        })
    }, false);
}

if (page == 'explicacion') {
    let slider = document.querySelector('.explicacion-slider'),
        next = document.querySelector('.next'),
        prev = document.querySelector('.prev');

    let direction;

    next.addEventListener('click', function() {
        console.log('jajaj');
        direction = 1;
        slider.style.transform = 'translate(-100%)';
    });

    prev.addEventListener('click', function() {
        direction = -1;
        slider.insertAdjacentElement("afterbegin", slider.lastElementChild);
        slider.style.transition = 'none';
        slider.style.transform = 'translate(-100%)';
        setTimeout(() => {
            slider.style.transition = 'all 0.5s';
            slider.style.transform = 'translate(0%)';
        });
    });

    slider.addEventListener('transitionend', function() {
        if (direction === 1) {
            slider.appendChild(slider.firstElementChild);
            slider.style.transition = 'none';
            slider.style.transform = 'translate(0)';
        }

        setTimeout(() => {
            slider.style.transition = 'all 0.5s';
        })
    }, false);
}