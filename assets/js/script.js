// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Add glow effect to cursor
document.addEventListener('mousemove', (e) => {
    const glow = document.createElement('div');
    glow.style.position = 'fixed';
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
    glow.style.width = '5px';
    glow.style.height = '5px';
    glow.style.background = 'rgba(0, 255, 136, 0.5)';
    glow.style.borderRadius = '50%';
    glow.style.pointerEvents = 'none';
    glow.style.transform = 'translate(-50%, -50%)';
    glow.style.animation = 'fadeOut 0.5s ease-out forwards';
    document.body.appendChild(glow);
    
    setTimeout(() => glow.remove(), 500);
});

// Parallax effect for sections
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    document.querySelectorAll('section').forEach((section, index) => {
        const speed = 0.5;
        section.style.transform = `translateY(${scrolled * speed * 0.1}px)`;
    });
});