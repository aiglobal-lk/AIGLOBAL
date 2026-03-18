document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu Toggle ---
    const btn = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }

    // --- Navbar Scroll Effect ---
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 30) {
                navbar.classList.add('glass-nav-scrolled');
                navbar.classList.remove('bg-transparent');
                
                // Adjust text colors if navbar started transparent over dark background
                const navLinks = navbar.querySelectorAll('.nav-link');
                navLinks.forEach(link => {
                    link.classList.remove('text-white');
                    link.classList.add('text-slate-800');
                });
                const logo = navbar.querySelector('.nav-logo');
                if(logo) {
                    logo.classList.remove('text-white');
                    logo.classList.add('text-slate-900');
                }
                const btnIcon = navbar.querySelector('.menu-icon');
                if(btnIcon) {
                    btnIcon.classList.remove('text-white');
                    btnIcon.classList.add('text-slate-800');
                }

            } else {
                navbar.classList.remove('glass-nav-scrolled');
                navbar.classList.add('bg-transparent');
                
                // Revert text colors
                const navLinks = navbar.querySelectorAll('.nav-link');
                navLinks.forEach(link => {
                    link.classList.remove('text-slate-800');
                    link.classList.add('text-white');
                });
                const logo = navbar.querySelector('.nav-logo');
                if(logo) {
                    logo.classList.remove('text-slate-900');
                    logo.classList.add('text-white');
                }
                const btnIcon = navbar.querySelector('.menu-icon');
                if(btnIcon) {
                    btnIcon.classList.remove('text-slate-800');
                    btnIcon.classList.add('text-white');
                }
            }
        });
        
        // Trigger once on load
        window.dispatchEvent(new Event('scroll'));
    }

    // --- Scroll Animations (Intersection Observer) ---
    const fadeElements = document.querySelectorAll('.fade-in-up');
    
    if (fadeElements.length > 0) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Animate only once
                }
            });
        }, observerOptions);

        fadeElements.forEach(el => {
            observer.observe(el);
        });
    }

    // --- Dynamic Form Handling (Contact Page) ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = '<svg class="animate-spin h-5 w-5 mr-3 inline-block" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Sending...';
            btn.disabled = true;

            // Simulate form submission
            setTimeout(() => {
                btn.innerHTML = 'Message Sent Successfully!';
                btn.classList.add('bg-green-600');
                btn.classList.remove('bg-blue-600');
                
                setTimeout(() => {
                    contactForm.reset();
                    btn.innerHTML = originalText;
                    btn.disabled = false;
                    btn.classList.remove('bg-green-600');
                    btn.classList.add('bg-blue-600');
                }, 3000);
            }, 1500);
        });
    }
});
