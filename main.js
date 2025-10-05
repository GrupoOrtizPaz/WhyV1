// Main JavaScript for Why! Landing Page
document.addEventListener('DOMContentLoaded', function() {
    
    // Header scroll effect
    const header = document.getElementById('header');
    let lastScrollTop = 0;
    
    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add scrolled class when scrolling down
        if (scrollTop > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
    }
    
    // Smooth scroll for navigation links
    function initSmoothScroll() {
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const headerHeight = header.offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    // FAQ Accordion functionality
    function initFAQ() {
        const faqQuestions = document.querySelectorAll('.faq-question');
        
        faqQuestions.forEach(question => {
            question.addEventListener('click', function() {
                const isExpanded = this.getAttribute('aria-expanded') === 'true';
                const answer = this.nextElementSibling;
                
                // Close all other FAQ items
                faqQuestions.forEach(otherQuestion => {
                    if (otherQuestion !== this) {
                        otherQuestion.setAttribute('aria-expanded', 'false');
                        otherQuestion.nextElementSibling.classList.remove('active');
                    }
                });
                
                // Toggle current FAQ item
                if (isExpanded) {
                    this.setAttribute('aria-expanded', 'false');
                    answer.classList.remove('active');
                } else {
                    this.setAttribute('aria-expanded', 'true');
                    answer.classList.add('active');
                }
            });
            
            // Keyboard navigation for FAQ
            question.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.click();
                }
            });
        });
    }
    
    // WhatsApp floating button behavior
    function initWhatsAppFloat() {
        const whatsappFloat = document.querySelector('.whatsapp-float');
        
        if (whatsappFloat) {
            // Show/hide based on scroll position
            let isVisible = true;
            
            function toggleWhatsAppButton() {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const windowHeight = window.innerHeight;
                const documentHeight = document.documentElement.scrollHeight;
                
                // Hide when at the very top or bottom
                if (scrollTop < 100 || scrollTop + windowHeight >= documentHeight - 100) {
                    if (isVisible) {
                        whatsappFloat.style.opacity = '0.7';
                        isVisible = false;
                    }
                } else {
                    if (!isVisible) {
                        whatsappFloat.style.opacity = '1';
                        isVisible = true;
                    }
                }
            }
            
            // Add click tracking (optional analytics)
            whatsappFloat.addEventListener('click', function() {
                // Track WhatsApp clicks
                console.log('WhatsApp button clicked');
                
                // Optional: Add analytics tracking here
                // gtag('event', 'click', {
                //     event_category: 'WhatsApp',
                //     event_label: 'Floating Button'
                // });
            });
        }
    }
    
    // Intersection Observer for animations
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Observe elements for animation
        const animatedElements = document.querySelectorAll('.servicio-card, .portafolio-main, .testimonio, .faq-item');
        
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }
    
    // Mobile menu toggle (if needed in future)
    function initMobileMenu() {
        const navMenu = document.querySelector('.nav-menu');
        const navToggle = document.querySelector('.nav-toggle');
        
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', function() {
                navMenu.classList.toggle('active');
                this.classList.toggle('active');
            });
            
            // Close menu when clicking on a link
            const navLinks = navMenu.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                });
            });
            
            // Close menu when clicking outside
            document.addEventListener('click', function(e) {
                if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                }
            });
        }
    }
    
    // Form validation for contact forms (if any are added)
    function initFormValidation() {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(form => {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Basic validation
                const inputs = form.querySelectorAll('input[required], textarea[required]');
                let isValid = true;
                
                inputs.forEach(input => {
                    if (!input.value.trim()) {
                        isValid = false;
                        input.classList.add('error');
                    } else {
                        input.classList.remove('error');
                    }
                });
                
                if (isValid) {
                    // Form is valid, proceed with submission
                    console.log('Form submitted successfully');
                }
            });
        });
    }
    
    // Performance optimization: Lazy loading for images
    function initLazyLoading() {
        const images = document.querySelectorAll('img[loading="lazy"]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src || img.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            images.forEach(img => imageObserver.observe(img));
        }
    }
    
    // Error handling for external links
    function initExternalLinkHandling() {
        const externalLinks = document.querySelectorAll('a[target="_blank"]');
        
        externalLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // Add small delay to ensure tracking fires
                setTimeout(() => {
                    console.log('External link clicked:', this.href);
                }, 100);
            });
        });
    }
    
    // Accessibility improvements
    function initAccessibility() {
        // Improve focus management
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
        });
        
        document.addEventListener('mousedown', function() {
            document.body.classList.remove('keyboard-navigation');
        });
    }
    
    // Hero Carousel functionality
    function initHeroCarousel() {
        const slides = document.querySelectorAll('.carousel-slide');
        let currentSlide = 0;
        
        function showSlide(index) {
            // Remove active class from all slides
            slides.forEach(slide => slide.classList.remove('active'));
            
            // Add active class to current slide
            slides[index].classList.add('active');
        }
        
        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }
        
        // Auto-advance carousel every 4 seconds
        setInterval(nextSlide, 4000);
        
        // Initialize first slide
        showSlide(0);
        
        // Optional: Pause on hover
        const carousel = document.querySelector('.hero-carousel');
        if (carousel) {
            let carouselInterval;
            
            function startCarousel() {
                carouselInterval = setInterval(nextSlide, 4000);
            }
            
            function stopCarousel() {
                clearInterval(carouselInterval);
            }
            
            carousel.addEventListener('mouseenter', stopCarousel);
            carousel.addEventListener('mouseleave', startCarousel);
            
            // Start the carousel
            startCarousel();
        }
    }
    
    // Initialize all functionality
    function init() {
        initSmoothScroll();
        initFAQ();
        initWhatsAppFloat();
        initScrollAnimations();
        initMobileMenu();
        initFormValidation();
        initLazyLoading();
        initExternalLinkHandling();
        initAccessibility();
        initHeroCarousel();
        
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        // Add resize event listener
        window.addEventListener('resize', function() {
            // Handle responsive adjustments if needed
            const isMobile = window.innerWidth <= 768;
            document.body.classList.toggle('mobile', isMobile);
        });
        
        // Initial call to handle scroll state
        handleScroll();
        
        // Add loaded class to body for CSS animations
        document.body.classList.add('loaded');
    }
    
    // Start initialization
    init();
    
    // Service Worker registration (optional, for PWA features)
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            navigator.serviceWorker.register('/sw.js')
                .then(function(registration) {
                    console.log('ServiceWorker registration successful');
                })
                .catch(function(err) {
                    console.log('ServiceWorker registration failed');
                });
        });
    }
    
    // Console welcome message
    console.log('%c¡Bienvenido a Why! 🎉', 'color: #C7A56B; font-size: 20px; font-weight: bold;');
    console.log('%cDesarrollado con ❤️ para maximizar conversiones', 'color: #666; font-size: 14px;');
});

// Utility functions
const Utils = {
    // Debounce function for performance
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Throttle function for scroll events
    throttle: function(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },
    
    // Check if element is in viewport
    isInViewport: function(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
};

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Utils;
}
