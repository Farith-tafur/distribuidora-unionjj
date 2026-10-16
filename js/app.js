// ============================================
// DISTRIBUIDORA UNIÓNJJ - JAVASCRIPT PRINCIPAL
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    inicializarHeader();
    inicializarMenuMobile();
    inicializarReveal();
    inicializarSmoothScroll();
});

// ============================================
// HEADER CON SCROLL
// ============================================
function inicializarHeader() {
    const header = document.getElementById('header');
    if (!header) return;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scroll');
        } else {
            header.classList.remove('scroll');
        }
    }, { passive: true });
}

// ============================================
// MENÚ MOBILE
// ============================================
function inicializarMenuMobile() {
    const btnMenu = document.getElementById('btnMenuMobile');
    const navPrincipal = document.getElementById('navPrincipal');
    
    if (!btnMenu || !navPrincipal) return;
    
    btnMenu.addEventListener('click', function(e) {
        e.stopPropagation();
        navPrincipal.classList.toggle('abierto');
        
        const icon = this.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        }
    });
    
    navPrincipal.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navPrincipal.classList.remove('abierto');
            const icon = btnMenu.querySelector('i');
            if (icon) {
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            }
        });
    });
    
    document.addEventListener('click', function(e) {
        if (!navPrincipal.contains(e.target) && !btnMenu.contains(e.target)) {
            navPrincipal.classList.remove('abierto');
            const icon = btnMenu.querySelector('i');
            if (icon) {
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            }
        }
    });
}

// ============================================
// ANIMACIONES REVEAL AL SCROLL
// ============================================
function inicializarReveal() {
    const elementos = document.querySelectorAll('.reveal');
    
    if (elementos.length === 0) return;
    
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        elementos.forEach(el => observer.observe(el));
    } else {
        elementos.forEach(el => el.classList.add('visible'));
    }
}

// ============================================
// SMOOTH SCROLL
// ============================================
function inicializarSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}