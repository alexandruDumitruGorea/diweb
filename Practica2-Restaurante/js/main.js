let logo = document.querySelector('.logo-img');

let page = document.querySelector('.wrapper').dataset.page;

let up = document.getElementById('up');

window.addEventListener('resize', main);
window.addEventListener('load', main);
window.addEventListener('scroll', showUP);

function main() {
    changeLogo();
    correctWidthPinches();
}

function changeLogo() {
    if (page == 'index') {
        if (window.innerWidth <= 996)
            logo.src = 'img/logo-presto-mimmo-naranja-acent.svg';            
        else
            logo.src = 'img/logo-presto-mimmo-blanco.svg';            
    } else {
        if (window.innerWidth <= 996)
            logo.src = '../img/logo-presto-mimmo-naranja-acent.svg';            
        else
            logo.src = '../img/logo-presto-mimmo-blanco.svg';            
    }
}

let pinches = document.querySelectorAll('.personal-item-container')[2];

function correctWidthPinches() {
    if (page == 'equipo') {
        if (window.innerWidth <= 1290) {
            pinches.classList.remove('personal-item-container_maxWidth');
            pinches.classList.add('personal-item-container_minWidth');
        } else {
            pinches.classList.remove('personal-item-container_minWidth');
            pinches.classList.add('personal-item-container_maxWidth');
        }
    }
}

function showUP() {
    if (window.scrollY >= 947 && window.innerWidth >= 996) {
        up.style.display = 'block';
    } else if (window.scrollY >= 763 && window.innerWidth >= 650) {
        up.style.display = 'block';
    } else if (window.scrollY >= 650 && window.innerWidth <= 500) {
        up.style.display = 'block';
    } else {
        up.style.display = 'none';
    }
}