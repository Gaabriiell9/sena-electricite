// Animation des onglets de la navbar
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-links li a");

    links.forEach(link => {
        link.addEventListener("click", () => {
            // Retirer l'état actif de tous les liens
            links.forEach(l => l.classList.remove("active"));
            // Ajouter l'état actif au lien cliqué
            link.classList.add("active");
        });
    });
});

// Burger menu
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Animation des sections au scroll
const fadeElements = document.querySelectorAll('.fade-in');

const appearOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    fadeElements.forEach(el => {
        const elTop = el.getBoundingClientRect().top;

        if(elTop < triggerBottom){
            el.classList.add('show');
        }
    });
};

window.addEventListener('scroll', appearOnScroll);

// Déclenche au chargement pour les sections visibles dès le début
appearOnScroll();

// Smooth scroll pour le bouton "Demandez un devis"
const btnDevis = document.getElementById('btn-devis');
if (btnDevis) {
    btnDevis.addEventListener('click', (e) => {
        e.preventDefault(); // Empêche le saut instantané
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Smooth scroll pour tous les liens de la navbar
const navLinksSmooth = document.querySelectorAll('.nav-links li a');

navLinksSmooth.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // empêche le saut instantané
        const targetId = link.getAttribute('href'); // récupère l'ancre (#hero, #services, etc.)
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }

        // Fermer le menu burger si ouvert (utile sur mobile)
        if (navLinks.classList.contains('show')) {
            navLinks.classList.remove('show');
        }
    });
});

// Lightbox pour agrandir les images
const images = document.querySelectorAll('.service-image img');

const lightboxOverlay = document.createElement('div');
lightboxOverlay.classList.add('lightbox-overlay');
document.body.appendChild(lightboxOverlay);

const lightboxImg = document.createElement('img');
lightboxOverlay.appendChild(lightboxImg);

// Clic sur image pour ouvrir en plein écran
images.forEach(img => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightboxOverlay.classList.add('show');
    });
});

// Clic sur overlay pour fermer
lightboxOverlay.addEventListener('click', () => {
    lightboxOverlay.classList.remove('show');
});

// Effet ilumination
const logoText = document.querySelector('.logo-text.orbitron');

logoText.addEventListener('click', () => {
    // Effet lumineux
    logoText.classList.add('lightup');
    setTimeout(() => logoText.classList.remove('lightup'), 2000); // dure 2 secondes

    // Générer des éclairs
    for (let i = 0; i < 10; i++) { // un peu plus d’éclairs
        const spark = document.createElement('div');
        spark.classList.add('spark');
        document.body.appendChild(spark);

        // Position aléatoire autour du logo
        const rect = logoText.getBoundingClientRect();
        spark.style.left = rect.left + Math.random() * rect.width + 'px';
        spark.style.top = rect.top + Math.random() * rect.height + 'px';

        // Supprimer après 2 secondes
        setTimeout(() => spark.remove(), 2000);
    }
});
