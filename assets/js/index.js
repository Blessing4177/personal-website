document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded');
});

let nav = document.getElementById('navigate');

document.addEventListener('scroll', () => {
    console.log('scrolling my way downtown');
    if (window.scrollY) {
        console.log('Adding black?');
        nav.classList.add('black');
    } else {
        nav.classList.remove('black');
    }
});