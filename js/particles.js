// Particle Background System
class ParticleSystem {
    constructor(container) {
        this.container = container;
        this.particles = [];
        this.particleCount = 50;
        this.init();
    }

    init() {
        for (let i = 0; i < this.particleCount; i++) {
            this.createParticle();
        }
    }

    createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = '100%';
        
        const drift = (Math.random() - 0.5) * 200;
        particle.style.setProperty('--drift', drift);
        
        const duration = Math.random() * 10 + 15;
        particle.style.animationDuration = duration + 's';
        
        const delay = Math.random() * 5;
        particle.style.animationDelay = delay + 's';
        
        this.container.appendChild(particle);
        this.particles.push(particle);
        
        setTimeout(() => {
            particle.remove();
            this.createParticle();
        }, (duration + delay) * 1000);
    }
}

// Initialize particles when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    document.body.insertBefore(particlesContainer, document.body.firstChild);
    
    new ParticleSystem(particlesContainer);
});
