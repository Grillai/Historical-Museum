



gsap.registerPlugin(ScrollTrigger);


gsap.from(".container_info_inziali #Key_moments", {
    x: -125,
    opacity: 0,
    duration: 1.4,
    delay: 1.2, // Anche con durata più lunga
    ease: "power2.out",
    force3D: true
});

gsap.from(".container_info_inziali #Explore_gallery", {
    
    opacity: 0,
    duration: 1.4,
    delay: 1, // Anche con durata più lunga
    ease: "power2.out",
    force3D: true
});


gsap.from(".Oggetto_Arte", {
    opacity: 0,
    duration: 1.4,
    delay: 2.3, // Anche con durata più lunga
    ease: "power2.out",
    force3D: true
});


gsap.from(".Parte_Destra h2",{
    y: 100,
    opacity: 0,
    duration: 1,
    scale: 0.6,
    delay: 2.5, // Anche con durata più lunga
    ease: "power3.out",
    force3D: true
});


gsap.from(".Categorie",{
    y: -100,
    opacity: 0,
    duration: 1,
    scale: 0.6,
    delay: 2.8, // Anche con durata più lunga
    ease: "power3.out",
    force3D: true
});


gsap.from("#data",{
    y: -100,
    opacity: 0,
    duration: 1,
    scale: 0.6,
    delay: 2.8, // Anche con durata più lunga
    ease: "power3.out",
    force3D: true
});


gsap.from(".Firma",{
    x: 100,
    opacity: 0,
    duration: 1,
    scale: 0.6,
    delay: 2.8, // Anche con durata più lunga
    ease: "power3.out",
    force3D: true
});

document.addEventListener("DOMContentLoaded", function () {
    const hoverText = document.getElementById("david-hover");
    const imageContainer = document.getElementById("image-container");

    hoverText.addEventListener("mousemove", function (event) {
        
        imageContainer.style.display = "block";
        imageContainer.style.top = `${event.pageY -400}px`; // Aggiunge un piccolo offset
        imageContainer.style.left = `${event.pageX -100}px`;
    });

    hoverText.addEventListener("mouseleave", function () {
        
        imageContainer.style.display = "none";
    });
});
