document.addEventListener("DOMContentLoaded", () => {

// Initialize Icons
        lucide.createIcons();

        /**
         * MOBILE MENU TOGGLE
         */
        const menuToggle = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');

        menuToggle.addEventListener('click', () => {
            const isActive = mobileMenu.classList.toggle('active');
            
            // Update Icon
            if (isActive) {
                menuToggle.innerHTML = '<i data-lucide="x"></i>';
                document.body.style.overflow = 'hidden'; // Prevent scroll
            } else {
                menuToggle.innerHTML = '<i data-lucide="menu"></i>';
                document.body.style.overflow = ''; // Allow scroll
            }
            lucide.createIcons();
        });

        // Close menu on link click
        mobileMenu.querySelectorAll('.nav-link, .btn').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                menuToggle.innerHTML = '<i data-lucide="menu"></i>';
                document.body.style.overflow = '';
                lucide.createIcons();
            });
        });

        /**
         * SAFE REVEAL LOGIC
         */
        const targets = document.querySelectorAll('.reveal-target');
        
        if ('IntersectionObserver' in window) {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            targets.forEach(el => {
                el.classList.add('reveal-ready');
                observer.observe(el);
            });
        }

        /**
         * NAVBAR SCROLL EFFECT
         */
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                nav.style.borderBottomColor = 'rgba(0,0,0,0.1)';
                nav.style.background = 'rgba(255, 255, 255, 0.9)';
            } else {
                nav.style.borderBottomColor = 'rgba(0,0,0,0.08)';
                nav.style.background = 'var(--glass)';
            }
        });

        /**
         * SMOOTH SCROLL
         */
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                e.preventDefault();
                const target = document.querySelector(targetId);
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 52,
                        behavior: 'smooth'
                    });
                }
            });
        });
        });