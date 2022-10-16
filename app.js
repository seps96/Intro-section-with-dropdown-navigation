// fot toggler icons & button
const togglerIcon = document.querySelector('#togglerIcon');
const closeIcon = document.querySelector('#closeIcon');
const btnToggle = document.querySelector('#btnToggle');

// navbar List 
const navList = document.querySelector('#navbarSupportedContent');
const navLog = document.querySelector('.d-flex');

const heroMobile = document.querySelector('.heroMobile');
const main = document.querySelector('.main');

//δοκιμη με body
// const body = document.querySelector('body > div:not(.navbar-collapse)');




let close = true;

btnToggle.addEventListener('click', () => {
    if (close === true) {
        // change icons on click
        togglerIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
        close = false;

        // change menu
        navList.style.textAlign = 'end';
        navLog.style.setProperty("justify-content", "end", "important");

        //Opacity sto mobile
        // heroMobile.style.setProperty("opacity", "0.6");
        // main.style.setProperty("opacity", "0.6");
        // body.style.setProperty("opacity", "0.6");

    } else {
        togglerIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');

        //Opacity sto mobile
        // heroMobile.style.setProperty("opacity", "1.0");
        // main.style.setProperty("opacity", "1.0");
        // body.style.setProperty("opacity", "1.0");
        close = true;

    }
    // btnToggle.style.border = '1px solid white';

})




