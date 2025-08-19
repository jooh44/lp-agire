// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});

// Background image slideshow
document.addEventListener('DOMContentLoaded', function() {
    const bgImages = document.querySelectorAll('.hero-bg-image');
    let currentIndex = 0;
    
    function switchBackgroundImage() {
        // Remove active class from current image
        bgImages[currentIndex].classList.remove('active');
        
        // Move to next image
        currentIndex = (currentIndex + 1) % bgImages.length;
        
        // Add active class to new image
        bgImages[currentIndex].classList.add('active');
    }
    
    // Switch images every 6 seconds
    setInterval(switchBackgroundImage, 6000);
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Header scroll effect
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    function updateHeader() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.background = 'rgba(255, 87, 34, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(255, 87, 34, 0.4)';
        } else {
            header.style.background = 'rgba(255, 87, 34, 1)';
            header.style.boxShadow = '0 2px 10px rgba(255, 87, 34, 0.3)';
        }
        
        lastScrollTop = scrollTop;
    }
    
    window.addEventListener('scroll', updateHeader);
    updateHeader(); // Call once on load
});

// Intersection Observer for animations
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                // Optionally unobserve after animation to improve performance
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all elements with data-aos attribute
    document.querySelectorAll('[data-aos]').forEach(el => {
        observer.observe(el);
    });
});

// Staggered animation for grid items
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const staggerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const children = entry.target.querySelectorAll('[data-aos]');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('animate-in');
                    }, index * 100); // 100ms delay between each item
                });
                staggerObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Apply staggered animation to specific sections
    const staggerSections = [
        '.problems-list',
        '.solution-grid', 
        '.testimonials-grid',
        '.hero-features'
    ];
    
    staggerSections.forEach(selector => {
        const section = document.querySelector(selector);
        if (section) {
            staggerObserver.observe(section);
        }
    });
});

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Toggle icon between menu and X
            const icon = this.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.setAttribute('data-lucide', 'x');
            } else {
                icon.setAttribute('data-lucide', 'menu');
            }
            
            // Recreate icons to update the changed icon
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        });
        
        // Close mobile menu when clicking on a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                icon.setAttribute('data-lucide', 'menu');
                if (typeof lucide !== 'undefined') {
                    lucide.createIcons();
                }
            });
        });
    }
});





// WhatsApp floating button
document.addEventListener('DOMContentLoaded', function() {
    // Create WhatsApp button
    const whatsappBtn = document.createElement('a');
    whatsappBtn.innerHTML = '<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.51"/></svg>';
    whatsappBtn.className = 'whatsapp-float';
    whatsappBtn.href = 'https://wa.me/5511997736438?text=Olá! Quero fazer o diagnóstico gratuito de risco do meu restaurante.';
    whatsappBtn.target = '_blank';
    whatsappBtn.setAttribute('aria-label', 'Falar no WhatsApp');
    
    // Add styles for WhatsApp button
    const style = document.createElement('style');
    style.textContent = `
        .whatsapp-float {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: #25D366;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
            z-index: 1000;
            transition: all 0.3s ease;
            animation: whatsappPulse 2s ease-in-out infinite;
        }
        
        .whatsapp-float:hover {
            transform: scale(1.1);
            box-shadow: 0 6px 25px rgba(37, 211, 102, 0.6);
            animation-play-state: paused;
        }
        
        .whatsapp-float svg {
            filter: drop-shadow(0 1px 2px rgba(0,0,0,0.2));
        }
        
        @keyframes whatsappPulse {
            0%, 100% {
                box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
                transform: scale(1);
            }
            50% {
                box-shadow: 0 6px 25px rgba(37, 211, 102, 0.6);
                transform: scale(1.05);
            }
        }
        
        /* Responsivo */
        @media (max-width: 768px) {
            .whatsapp-float {
                bottom: 1.5rem;
                right: 1.5rem;
                width: 55px;
                height: 55px;
            }
            
            .whatsapp-float svg {
                width: 24px;
                height: 24px;
            }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(whatsappBtn);
});

// Form validation and WhatsApp integration (if forms are added later)
document.addEventListener('DOMContentLoaded', function() {
    // Function to format WhatsApp message
    function formatWhatsAppMessage(type = 'diagnostic') {
        const messages = {
            diagnostic: 'Olá! Quero fazer o diagnóstico gratuito de risco do meu restaurante.',
            consultation: 'Olá! Quero agendar uma consulta sobre segurança alimentar.',
            info: 'Olá! Quero tirar dúvidas sobre a consultoria AGIRE.'
        };
        
        return encodeURIComponent(messages[type] || messages.diagnostic);
    }
    
    // Update WhatsApp links if they don't have proper messages
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    whatsappLinks.forEach(link => {
        if (!link.href.includes('text=')) {
            const message = formatWhatsAppMessage('diagnostic');
            link.href += `?text=${message}`;
        }
    });
});

// Performance optimization: Lazy load images
document.addEventListener('DOMContentLoaded', function() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        observer.unobserve(img);
                    }
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
});

// Analytics tracking (ready for Google Analytics)
function trackEvent(action, category = 'Landing Page', label = '') {
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            event_category: category,
            event_label: label
        });
    }
    
    // Console log for development
    console.log(`Event tracked: ${category} - ${action} - ${label}`);
}

// Track important interactions
document.addEventListener('DOMContentLoaded', function() {
    // Track CTA clicks
    document.querySelectorAll('.btn-primary').forEach(btn => {
        btn.addEventListener('click', function() {
            const text = this.textContent.trim();
            trackEvent('CTA Click', 'Conversion', text);
        });
    });
    
    // Track section views
    const sections = document.querySelectorAll('section[id]');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                trackEvent('Section View', 'Engagement', sectionId);
            }
        });
    }, { threshold: 0.5 });
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // In production, you might want to send this to an error tracking service
});


// Console branding (fun touch)
console.log(
    '%cAGIRE Consultoria',
    'color: #2C5F2D; font-size: 24px; font-weight: bold;'
);
console.log(
    '%c🛡️ Protegendo restaurantes há 10 anos',
    'color: #FF6B35; font-size: 14px;'
);
console.log(
    '%cDesenvolvido com foco em conversão e performance',
    'color: #6B7280; font-size: 12px;'
);