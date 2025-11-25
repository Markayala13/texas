// Portfolio Section Template - Clean Separation of Concerns

export const createPortfolioSection = () => `
  <section id="projects" class="projects-section">
    <h2 class="section-title texan-font">OUR PORTFOLIO</h2>
    <p class="section-subtitle">Excellence in Every Project</p>
    
    <div class="portfolio-categories">
      <!-- Roofing Portfolio -->
      <div class="portfolio-category">
        <h3 class="category-title texan-font">
          <i class="fas fa-home"></i> Roofing Projects
        </h3>
        <div id="roofing-carousel"></div>
      </div>
      
      <!-- Drywall Portfolio -->
      <div class="portfolio-category">
        <h3 class="category-title texan-font">
          <i class="fas fa-paint-roller"></i> Drywall Projects
        </h3>
        <div id="drywall-carousel"></div>
      </div>
      
      <!-- Kitchen Portfolio -->
      <div class="portfolio-category">
        <h3 class="category-title texan-font">
          <i class="fas fa-utensils"></i> Kitchen Remodeling
        </h3>
        <div id="kitchen-carousel"></div>
      </div>
    </div>
  </section>
  
  <script>
    // Initialize portfolios with data
    document.addEventListener('DOMContentLoaded', () => {
      if (typeof PORTFOLIO_DATA === 'undefined' || typeof ComponentFactory === 'undefined') {
        console.error('Required dependencies not loaded');
        return;
      }
      
      // Render Roofing Carousel
      const roofingContainer = document.getElementById('roofing-carousel');
      if (roofingContainer) {
        roofingContainer.innerHTML = ComponentFactory.createCarousel(PORTFOLIO_DATA.roofing, 'roofing');
      }
      
      // Render Drywall Carousel
      const drywallContainer = document.getElementById('drywall-carousel');
      if (drywallContainer) {
        drywallContainer.innerHTML = ComponentFactory.createCarousel(PORTFOLIO_DATA.drywall, 'drywall');
      }
      
      // Render Kitchen Carousel
      const kitchenContainer = document.getElementById('kitchen-carousel');
      if (kitchenContainer) {
        kitchenContainer.innerHTML = ComponentFactory.createCarousel(PORTFOLIO_DATA.kitchen, 'kitchen');
      }
    });
  </script>
`;
