document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded');
});

const nav = document.getElementById('navigate');

document.addEventListener('scroll', () => {
    if (window.scrollY) {
        nav.classList.add('black');
    } else {
        nav.classList.remove('black');
    }
});