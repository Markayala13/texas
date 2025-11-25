// Carousel Module - Following Single Responsibility Principle

class CarouselConfig {
  static DEFAULT_AUTO_PLAY_DELAY = 5000;
  static TRANSITION_DURATION = 500;
  static SWIPE_THRESHOLD = 50;
}

class CarouselState {
  constructor(totalSlides) {
    this.currentIndex = 0;
    this.totalSlides = totalSlides;
    this.isAnimating = false;
  }
  
  canGoNext() {
    return this.totalSlides > 0;
  }
  
  canGoPrev() {
    return this.totalSlides > 0;
  }
  
  next() {
    if (this.canGoNext()) {
      this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
    }
    return this.currentIndex;
  }
  
  prev() {
    if (this.canGoPrev()) {
      this.currentIndex = this.currentIndex === 0 ? this.totalSlides - 1 : this.currentIndex - 1;
    }
    return this.currentIndex;
  }
  
  goTo(index) {
    if (index >= 0 && index < this.totalSlides) {
      this.currentIndex = index;
    }
    return this.currentIndex;
  }
}

class CarouselUI {
  constructor(container) {
    this.container = container;
    this.track = container.querySelector('.carousel-track');
    this.slides = Array.from(this.track?.children || []);
    this.prevBtn = container.querySelector('.carousel-btn.prev');
    this.nextBtn = container.querySelector('.carousel-btn.next');
    this.dotsContainer = container.querySelector('.carousel-dots');
    this.dots = [];
  }
  
  createDots(count, onDotClick) {
    if (!this.dotsContainer) return;
    
    this.dotsContainer.innerHTML = '';
    this.dots = [];
    
    for (let i = 0; i < count; i++) {
      const dot = document.createElement('button');
      dot.classList.add('carousel-dot');
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      if (i === 0) dot.classList.add('active');
      
      dot.addEventListener('click', () => onDotClick(i));
      
      this.dotsContainer.appendChild(dot);
      this.dots.push(dot);
    }
  }
  
  updateSlidePosition(index, animate = true) {
    if (!this.track || this.slides.length === 0) return;
    
    const slideWidth = this.slides[0].getBoundingClientRect().width;
    
    this.track.style.transition = animate ? `transform ${CarouselConfig.TRANSITION_DURATION}ms ease-in-out` : 'none';
    this.track.style.transform = `translateX(-${index * slideWidth}px)`;
  }
  
  updateDots(activeIndex) {
    this.dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === activeIndex);
      dot.setAttribute('aria-current', index === activeIndex ? 'true' : 'false');
    });
  }
  
  updateButtons(state) {
    // Keep buttons always enabled for infinite loop
    if (this.prevBtn) {
      this.prevBtn.style.opacity = '1';
      this.prevBtn.disabled = false;
    }
    if (this.nextBtn) {
      this.nextBtn.style.opacity = '1';
      this.nextBtn.disabled = false;
    }
  }
  
  update(state, animate = true) {
    this.updateSlidePosition(state.currentIndex, animate);
    this.updateDots(state.currentIndex);
    this.updateButtons(state);
  }
}

class AutoPlayController {
  constructor(interval, onAutoPlay) {
    this.interval = interval;
    this.onAutoPlay = onAutoPlay;
    this.timer = null;
    this.isEnabled = interval > 0;
  }
  
  start() {
    if (!this.isEnabled || this.timer) return;
    this.timer = setInterval(() => this.onAutoPlay(), this.interval);
  }
  
  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
  
  reset() {
    this.stop();
    this.start();
  }
}

class TouchController {
  constructor(track, onSwipeLeft, onSwipeRight) {
    this.track = track;
    this.onSwipeLeft = onSwipeLeft;
    this.onSwipeRight = onSwipeRight;
    this.startX = 0;
    this.currentX = 0;
    this.isDragging = false;
    
    this.initListeners();
  }
  
  initListeners() {
    this.track.addEventListener('touchstart', (e) => this.handleTouchStart(e));
    this.track.addEventListener('touchmove', (e) => this.handleTouchMove(e));
    this.track.addEventListener('touchend', () => this.handleTouchEnd());
  }
  
  handleTouchStart(e) {
    this.startX = e.touches[0].clientX;
    this.isDragging = true;
    this.track.style.transition = 'none';
  }
  
  handleTouchMove(e) {
    if (!this.isDragging) return;
    this.currentX = e.touches[0].clientX;
  }
  
  handleTouchEnd() {
    if (!this.isDragging) return;
    this.isDragging = false;
    
    const diff = this.currentX - this.startX;
    
    if (Math.abs(diff) > CarouselConfig.SWIPE_THRESHOLD) {
      if (diff > 0) {
        this.onSwipeRight();
      } else {
        this.onSwipeLeft();
      }
    }
  }
}

class Carousel {
  constructor(container, options = {}) {
    if (!container) {
      console.error('Carousel: Container element not found');
      return;
    }
    
    this.ui = new CarouselUI(container);
    
    if (this.ui.slides.length === 0) {
      console.warn('Carousel: No slides found');
      return;
    }
    
    this.state = new CarouselState(this.ui.slides.length);
    this.autoPlay = new AutoPlayController(
      options.autoPlay ? (options.autoPlayDelay || CarouselConfig.DEFAULT_AUTO_PLAY_DELAY) : 0,
      () => this.next()
    );
    
    this.init();
  }
  
  init() {
    // Create dots
    this.ui.createDots(this.state.totalSlides, (index) => this.goTo(index));
    
    // Set initial position
    this.ui.update(this.state, false);
    
    // Button listeners
    if (this.ui.prevBtn) {
      this.ui.prevBtn.addEventListener('click', () => this.prev());
    }
    if (this.ui.nextBtn) {
      this.ui.nextBtn.addEventListener('click', () => this.next());
    }
    
    // Touch gestures
    if (this.ui.track) {
      new TouchController(
        this.ui.track,
        () => this.next(),
        () => this.prev()
      );
    }
    
    // Auto play
    if (this.autoPlay.isEnabled) {
      this.autoPlay.start();
      
      this.ui.container.addEventListener('mouseenter', () => this.autoPlay.stop());
      this.ui.container.addEventListener('mouseleave', () => this.autoPlay.start());
    }
    
    // Handle resize
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        this.ui.update(this.state, false);
      }, 250);
    });
  }
  
  next() {
    if (this.state.isAnimating) return;
    
    this.state.isAnimating = true;
    this.state.next();
    this.ui.update(this.state);
    this.autoPlay.reset();
    
    setTimeout(() => {
      this.state.isAnimating = false;
    }, CarouselConfig.TRANSITION_DURATION);
  }
  
  prev() {
    if (this.state.isAnimating) return;
    
    this.state.isAnimating = true;
    this.state.prev();
    this.ui.update(this.state);
    this.autoPlay.reset();
    
    setTimeout(() => {
      this.state.isAnimating = false;
    }, CarouselConfig.TRANSITION_DURATION);
  }
  
  goTo(index) {
    if (this.state.isAnimating) return;
    
    this.state.isAnimating = true;
    this.state.goTo(index);
    this.ui.update(this.state);
    this.autoPlay.reset();
    
    setTimeout(() => {
      this.state.isAnimating = false;
    }, CarouselConfig.TRANSITION_DURATION);
  }
}

// Carousel Factory
class CarouselFactory {
  static createAll() {
    const carouselConfigs = [
      { selector: '[data-carousel="roofing"]', autoPlay: true },
      { selector: '[data-carousel="drywall"]', autoPlay: true },
      { selector: '[data-carousel="kitchen"]', autoPlay: true }
    ];
    
    carouselConfigs.forEach(config => {
      const container = document.querySelector(config.selector);
      if (container) {
        new Carousel(container, {
          autoPlay: config.autoPlay,
          autoPlayDelay: CarouselConfig.DEFAULT_AUTO_PLAY_DELAY
        });
        console.log(`Carousel initialized: ${config.selector}`);
      }
    });
  }
}

// Initialize carousels when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => CarouselFactory.createAll());
} else {
  CarouselFactory.createAll();
}
