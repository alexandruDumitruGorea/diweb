// Efecto de aparicion de elementos
let contentsHiden = Array.from(document.querySelectorAll('[class*="content-onScroll"]'));
let contentsHidenScrollTop = contentsHiden.map( content  => 
        ((content.getBoundingClientRect().top - content.getBoundingClientRect().height) - (innerHeight / 2)) - (content.getBoundingClientRect().height / 3)
    );

function scrollEfect() {
    contentsHidenScrollTop.forEach( (elemento, indice) => {
        if (scrollY >= elemento) {
            contentsHiden[indice].classList.add('content-onScroll_active');
        }
    });
}

// Cambio de estilos en menu
let page = document.querySelector('.wrapper').dataset.page;
let headerContainer = document.getElementById('header-container');

function changeHeader() {
    if (page == 'index') {
        if (window.scrollY >= (window.innerHeight - 80))
            headerContainer.classList.add('header-container_scroll');
        else
            headerContainer.classList.remove('header-container_scroll');
    } else {
        if (window.scrollY > 0)
            headerContainer.classList.add('header-container_noIndex_scroll');
        else
            headerContainer.classList.remove('header-container_noIndex_scroll');
    }
}

// BOTÓN up
let up = document.getElementById('up');

function showUP() {
    if (window.scrollY >= 947 && window.innerWidth >= 996) {
        up.style.opacity = '1';
    } else if (window.scrollY >= 763 && window.innerWidth >= 650) {
        up.style.opacity = '1';
    } else if (window.scrollY >= 650 && window.innerWidth <= 500) {
        up.style.opacity = '1';
    } else {
        up.style.opacity = '0';
    }
}

function main() {
    scrollEfect();
    changeHeader();
    showUP();
}
    
window.addEventListener('scroll', main);

// Efecto de los testimonios
if (page == 'proyectos') {
    let testimonios = document.querySelectorAll('.testimonios-content-item')
        testimoniosIndex = document.querySelectorAll('.testimonios-index span');

    // Función cuando se hace click
    function changeTestimonialsClick(e) {
        testimoniosIndex.forEach ( (span) => {
            span.classList.remove('active');
        });
        testimonios.forEach(element => {
            element.style.transform = `translateX(-${e.target.id-1}00%)`;
        });
        clearInterval(temporizadorTestimonial);
        e.target.classList.add('active');
        indexTestimonial = e.target.id-1;
        temporizadorTestimonial = setInterval(changeTestimonialsLoad, 4000);
    }
    // Se le añade los eventos de click
    testimoniosIndex.forEach ( (span) => {
        span.addEventListener('click', changeTestimonialsClick);
    });

    // Función cuando se carga la página
    let indexTestimonial = 0;
    let temporizadorTestimonial;
    function changeTestimonialsOnLoad() {
        temporizadorTestimonial = setInterval(changeTestimonialsLoad, 4000);
    }

    function changeTestimonialsLoad() {
        if (indexTestimonial >= 2) {
            indexTestimonial = 0;
        } else {
            indexTestimonial++;
        }
        testimoniosIndex.forEach ( (span) => {
            span.classList.remove('active');
        });
        testimonios.forEach(element => {
            element.style.transform = `translateX(-${indexTestimonial}00%)`;
        });
        testimoniosIndex[indexTestimonial].classList.add('active');
    }

    window.addEventListener('load', changeTestimonialsOnLoad);

    // LIGHTBOX
    let lightbox = document.querySelector('.proyectos-lightbox');

    // Abrir y cerrar lightbox
    let btnClose = document.querySelector('.lightbox-close'),
        btnUpLightBox = document.querySelector('.lightbox-up');
    let buttonsMore = Array.from(document.querySelectorAll('.proyecto-more'));
    buttonsMore.forEach(btnMore => {
        btnMore.addEventListener('click', function() {
            lightbox.classList.add('proyectos-lightbox_active');
            btnClose.classList.add('lightbox-close_active');
            btnUpLightBox.classList.add('lightbox-up_active');
            up.style.opacity = '0';
            document.body.style.overflowY = 'hidden';
            temporizadorSlider = setInterval(changeImg, 3000);
        })
    });
    
    btnClose.addEventListener('click', function() {
        lightbox.classList.add('proyectos-lightbox_desactive');
        setTimeout(() => {lightbox.classList.remove('proyectos-lightbox_active')}, 1000);
        setTimeout(() => {lightbox.classList.remove('proyectos-lightbox_desactive')}, 1000);
        btnClose.classList.add('lightbox-close_desactive');
        btnClose.classList.remove('lightbox-close_active');
        btnClose.classList.remove('lightbox-close_desactive');
        btnUpLightBox.classList.add('lightbox-up_desactive');
        btnUpLightBox.classList.remove('lightbox-up_active');
        btnUpLightBox.classList.remove('lightbox-up_desactive');
        document.body.style.overflowY = 'scroll';
        indexSlider = -1;
        clearInterval(temporizadorSlider);
        setTimeout(() => {changeImg()}, 1000);
        up.style.opacity = '1';
    });

    // Indicador scroll en proyectos lightbox
    let h1 = lightbox.scrollHeight,
        h2 = lightbox.clientHeight;
    let scrollUnits = (h1 - h2) / 100;
    const rootSyles = document.documentElement.style;
    function scrollLightBox() {
        rootSyles.setProperty('--width', Math.round(lightbox.scrollTop / scrollUnits));
    }

    lightbox.addEventListener('scroll', scrollLightBox);

    // Funcionamiento para el slider del lightbox
    let indexSlider = 0;
    let img = document.querySelectorAll('.lightbox-img');
    let imgIndex = document.querySelectorAll('.lightbox-slider-buttons span');
    let prev = document.querySelector('.lightbox-prev'),
        next = document.querySelector('.lightbox-next');

    let temporizadorSlider;

    next.addEventListener('click', function() {
        clearInterval(temporizadorSlider);
        changeImg();
        temporizadorSlider = setInterval(changeImg, 3000);
    })
    prev.addEventListener('click', function() {
        clearInterval(temporizadorSlider);
        if (indexSlider <= 0) {
            indexSlider = img.length - 1;
        } else {
            indexSlider--;
        }
        img.forEach(element => {
            element.style.transform = `translateX(-${indexSlider}00%)`;
        });
        imgIndex.forEach(element => {
            element.classList.remove('active');
        });
        imgIndex[indexSlider].classList.add('active');
        temporizadorSlider = setInterval(changeImg, 3000);
    })

    function changeImg() {
        if (indexSlider >= img.length - 1) {
            indexSlider = 0;
        } else {
            indexSlider++;
        }
        img.forEach(element => {
            element.style.transform = `translateX(-${indexSlider}00%)`;
        });
        imgIndex.forEach(element => {
            element.classList.remove('active');
        });
        imgIndex[indexSlider].classList.add('active');
    }
}
