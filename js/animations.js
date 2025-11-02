// Advanced Animation Controller
class AnimationController {
    constructor() {
        this.observers = new Map();
        this.init();
    }

    init() {
        this.initScrollReveal();
        this.init3DCards();
        this.initParallax();
        this.initRippleEffects();
    }

    // Scroll-triggered animations using Intersection Observer
    initScrollReveal() {
        const revealObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        this.observers.set('reveal', revealObserver);

        // Observe elements when they're added
        this.observeElements();
    }

    observeElements() {
        const revealElements = document.querySelectorAll(
            '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right'
        );
        
        const observer = this.observers.get('reveal');
        if (observer) {
            revealElements.forEach(el => observer.observe(el));
        }
    }

    // 3D Card Tilt Effect
    init3DCards() {
        document.addEventListener('mousemove', (e) => {
            const cards = document.querySelectorAll('.card-3d');
            
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
                    card.style.setProperty('--rotate-x', `${rotateX}deg`);
                    card.style.setProperty('--rotate-y', `${rotateY}deg`);
                }
            });
        });

        document.addEventListener('mouseleave', () => {
            const cards = document.querySelectorAll('.card-3d');
            cards.forEach(card => {
                card.style.setProperty('--rotate-x', '0deg');
                card.style.setProperty('--rotate-y', '0deg');
            });
        });
    }

    // Parallax scroll effect
    initParallax() {
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    this.updateParallax();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    updateParallax() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax-layer');
        
        parallaxElements.forEach(el => {
            const speed = el.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            el.style.transform = `translateY(${yPos}px)`;
        });
    }

    // Enhanced ripple effect
    initRippleEffects() {
        document.addEventListener('click', (e) => {
            const target = e.target.closest('.ripple-effect');
            if (!target) return;

            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            
            const rect = target.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            target.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    }

    // Animate counter numbers
    animateCounter(element, target, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = Math.round(target);
                clearInterval(timer);
            } else {
                element.textContent = Math.round(current);
            }
        }, 16);
    }

    // Create confetti effect
    createConfetti(x, y, count = 30) {
        const colors = ['#22c55e', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6'];
        
        for (let i = 0; i < count; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = x + 'px';
            confetti.style.top = y + 'px';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
            confetti.style.setProperty('--x', (Math.random() - 0.5) * 200);
            
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 3000);
        }
    }

    // Magnetic button effect
    initMagneticButtons() {
        const buttons = document.querySelectorAll('.magnetic-btn');
        
        buttons.forEach(button => {
            button.addEventListener('mousemove', (e) => {
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                button.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translate(0, 0)';
            });
        });
    }
}

// Initialize animation controller
let animationController;
document.addEventListener('DOMContentLoaded', () => {
    animationController = new AnimationController();
});

// Export for use in other scripts
window.AnimationController = AnimationController;
