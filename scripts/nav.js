const body = document.getElementById('body');
const overlay = document.getElementById('overlay');
const menuBars = document.getElementById('menu-icon');

const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const nav6 = document.getElementById('nav-6');
const navItems = [nav1, nav2, nav3, nav4, nav5, nav6];

// Control Navigation Animation
function navAnimation(direction1, direction2) {
    navItems.forEach((nav, i) => {
        nav.classList.replace(`slide-${direction1}-${i + 1}`, `slide-${direction2}-${i + 1}`);
    });
}

function toggleNav() {
    // Toggle: Menu Active
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains('overlay-active')) {
        // Animate In - Overlay 
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right')
        // Animate In - Nav Items
        navAnimation('out', 'in');
    } else {
        // Animate Out - Overlay
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left')
        // Animate Out - Nav Items
        navAnimation('in', 'out');
    }
}

function clickOffNav(event) {
    console.log(event.target.id);
    if (event.target.id === 'menu-bars') {
        console.log('open menu');
    } else if (overlay.classList.contains('overlay-active')) {
        console.log('shift out');
        // Animate In - Overlay 
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left')
        // Animate In - Nav Items
        navAnimation('out', 'in');
        overlay.classList.toggle('overlay-active');
    }
}

// Event Listeners
menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav) => {
    nav.addEventListener('click', toggleNav);
});
body.onclick = clickOffNav;
