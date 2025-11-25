// Reusable Components - Clean Code Principles

class ComponentFactory {
  // Service Card Component
  static createServiceCard(service) {
    return `
      <div class="service-card">
        <i class="fas ${service.icon} service-icon"></i>
        <h3 class="service-title texan-font">${service.title}</h3>
        <p class="service-description">${service.description}</p>
      </div>
    `;
  }
  
  // Contact Card Component
  static createContactCard(contact) {
    return `
      <div class="contact-card">
        <div class="contact-icon">
          <i class="fas ${contact.icon}"></i>
        </div>
        <h3 class="contact-title texan-font">${contact.title}</h3>
        <p class="contact-text">${contact.content}</p>
      </div>
    `;
  }
  
  // Stat Item Component
  static createStatItem(stat) {
    return `
      <div class="stat-item">
        <div class="stat-number texan-font" data-target="${stat.number}">0</div>
        <div class="stat-label">${stat.label}</div>
      </div>
    `;
  }
  
  // Carousel Slide Component - Clean without overlay
  static createCarouselSlide(project) {
    return `
      <div class="carousel-slide">
        <img src="${project.image}" alt="${project.title}" loading="lazy">
      </div>
    `;
  }
  
  // Complete Carousel Component
  static createCarousel(projects, carouselId) {
    const slides = projects.map(project => this.createCarouselSlide(project)).join('');
    
    return `
      <div class="carousel-container" data-carousel="${carouselId}">
        <div class="carousel-track-container">
          <div class="carousel-track">
            ${slides}
          </div>
        </div>
        <button class="carousel-btn prev" aria-label="Previous slide">
          <i class="fas fa-chevron-left"></i>
        </button>
        <button class="carousel-btn next" aria-label="Next slide">
          <i class="fas fa-chevron-right"></i>
        </button>
        <div class="carousel-dots"></div>
      </div>
    `;
  }
}

// DOM Manipulation Helper
class DOMHelper {
  static renderComponents(containerId, components) {
    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = components.join('');
    }
  }
  
  static addClass(selector, className) {
    const element = document.querySelector(selector);
    if (element) {
      element.classList.add(className);
    }
  }
  
  static removeClass(selector, className) {
    const element = document.querySelector(selector);
    if (element) {
      element.classList.remove(className);
    }
  }
}

// Animation Controller
class AnimationController {
  static animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
      current += increment;
      if (current < target) {
        element.textContent = Math.floor(current) + '+';
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target + '+';
      }
    };
    
    updateCounter();
  }
  
  static initScrollAnimations() {
    const observerOptions = {
      threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counters = document.querySelectorAll('.stat-number');
          counters.forEach(counter => {
            if (counter.textContent === '0') {
              this.animateCounter(counter);
            }
          });
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }
  }
}

// Navigation Controller
class NavigationController {
  static initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }
  
  static initActiveSection() {
    window.addEventListener('scroll', () => {
      this.updateActiveNavLink();
      this.updateNavbarStyle();
    });
  }
  
  static updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }
  
  static updateNavbarStyle() {
    const navbar = document.getElementById('navbar');
    if (window.pageYOffset > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  
  static initMobileMenu() {
    window.toggleMenu = () => {
      const navLinks = document.getElementById('navLinks');
      navLinks.classList.toggle('active');
    };
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        const navLinks = document.getElementById('navLinks');
        navLinks.classList.remove('active');
      });
    });
  }
}

// Parallax Effect Controller
class ParallaxController {
  static initHeroParallax() {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const heroBg = document.getElementById('heroBg');
      if (heroBg) {
        heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    });
  }
}

// Main Application Controller
class App {
  static init() {
    console.log('Houston Pro Handyman - Application Initialized');
    
    // Initialize all controllers
    NavigationController.initSmoothScroll();
    NavigationController.initActiveSection();
    NavigationController.initMobileMenu();
    ParallaxController.initHeroParallax();
    AnimationController.initScrollAnimations();
    
    console.log('All controllers initialized successfully');
  }
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => App.init());
} else {
  App.init();
}
