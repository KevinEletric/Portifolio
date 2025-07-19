
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        if (href.startsWith('#') && !href.startsWith('#http') && !href.startsWith('#https') && href !== '#') {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });

            const navMenu = document.querySelector('.nav-menu');
            const dropdowns = document.querySelectorAll('.dropdown');
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
            }
        }
    });
});

const sidebarToggle = document.querySelector('.sidebar-toggle');
const navMenu = document.querySelector('.nav-menu');

sidebarToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});


document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !sidebarToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        document.querySelectorAll('.dropdown').forEach(dropdown => dropdown.classList.remove('active'));
    }
});

document.querySelectorAll('.nav-menu a').forEach(anchor => {
    anchor.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function () {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        header.style.top = '-100px';
    } else {
        header.style.top = '0';
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});


window.addEventListener('scroll', function () {
    const arrow = document.querySelector('.scroll-down-arrow');
    const aboutSection = document.querySelector('.about');
    const aboutTop = aboutSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (aboutTop < 0) {
        arrow.style.opacity = '0';
        arrow.style.transition = 'opacity 0.6s';
    } else {
        arrow.style.opacity = '1';
    }
});

document.getElementById('toggle-theme').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
});

document.querySelectorAll('.language-btn').forEach(button => {
    button.addEventListener('click', () => {
        const lang = button.getAttribute('data-lang');
        if (lang === 'pt') {
            window.location.href = 'index.html';
        } else if (lang === 'en') {
            window.location.href = 'index-en.html';
        }
    });
});