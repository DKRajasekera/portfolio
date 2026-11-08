// ========= toggle icon navbar ========== 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    header.classList.toggle('active');
};


// ========= scroll sections active link ========== 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// ========= scroll reveal ========== 
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// ========= typed js ========== 
const typed = new Typed('.multiple-text', {
    strings: ['A Software Engineer', 'A Web Developer', 'A Full Stack Developer', 'A UI/UX Designer'],
    typeSpeed: 110,
    backSpeed: 80,
    backDelay: 1000,
    loop: true
});

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls
window.onscroll = function () {
    scrollFunction();

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document
                    .querySelector('header nav a[href*=' + id + ']')
                    .classList.add('active');
            });
        }
    });

    // ========= sticky navbar ========== 
    let header = document.querySelector('header');
    header.classList.toggle('stickly', window.scrollY > 100);

    // ========= remove toggle icon and navbar when scroll ========== 
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    header.classList.remove('active');
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const hoverSkills = {
    web: [
        "• HTML, CSS, JavaScript",
        "• React.js, Angular",
        "• Responsive design",
        "• REST API integration",
        "• PHP & basic backend"
    ],
    frontend: [
        "• UI/UX design principles",
        "• React & Angular components",
        "• Figma design skills",
        "• Animations & smooth UI",
        "• Optimized frontend performance"
    ],
    backend: [
        "• Node.js, NestJS, Java",
        "• REST API architecture",
        "• MySQL & PostgreSQL",
        "• Firebase (Realtime DB, Firestore)",
        "• Docker basics & deployments"
    ]
};

// Just populate text once
document.querySelectorAll(".services-box").forEach(box => {
    const key = box.getAttribute("data-skill");
    const ul = box.querySelector(".details");

    hoverSkills[key].forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });
});
