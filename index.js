document.getElementById('menu-icon').addEventListener('click', function() {
    document.querySelector('.navlist').classList.toggle('open');
});

const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true,
});
sr.reveal('.hero-text', { delay: 200, origin: 'top' });
sr.reveal('.hero-img', { delay: 450, origin: 'top' });
sr.reveal('.icons', { delay: 550, origin: 'left' });
