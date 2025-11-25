import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { cors } from 'hono/cors'

const app = new Hono()

// Enable CORS
app.use('/api/*', cors())

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

// Single Page Website with smooth scroll sections
app.get('/', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>F&A Construction Services - Roofing & Drywall Experts</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <link href="/static/premium-styles.css" rel="stylesheet">
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Rye&family=Alfa+Slab+One&family=Pirata+One&family=Metal+Mania&family=Special+Elite&family=Rubik+Dirt&display=swap');
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          html {
            scroll-behavior: smooth;
          }
          
          body {
            font-family: 'Special Elite', 'Courier New', monospace;
            background: #2a1810;
            color: #f5e6d3;
            overflow-x: hidden;
            background-image: 
              repeating-linear-gradient(90deg, rgba(0,0,0,0.03) 0px, transparent 1px, transparent 2px, rgba(0,0,0,0.03) 3px),
              repeating-linear-gradient(0deg, rgba(0,0,0,0.03) 0px, transparent 1px, transparent 2px, rgba(0,0,0,0.03) 3px);
            background-size: 40px 40px;
          }
          
          .western-font {
            font-family: 'Rye', serif;
            letter-spacing: 3px;
            text-shadow: 3px 3px 0px rgba(0,0,0,0.3);
          }
          
          .texan-font {
            font-family: 'Alfa Slab One', cursive;
            letter-spacing: 2px;
            text-shadow: 2px 2px 0px rgba(0,0,0,0.3);
          }
          
          .stencil-font {
            font-family: 'Metal Mania', cursive;
            letter-spacing: 4px;
          }
          
          /* Hero Section with Parallax */
          .hero-section {
            position: relative;
            height: 100vh;
            overflow: hidden;
          }
          
          .hero-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 120%;
            background-image: url('/static/images/Create_an_aerial_view_image_of_a_house_in_Texas_f-1764107116997.png');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
            transform: translateY(0);
            transition: transform 0.5s ease-out;
          }

          @media (min-width: 768px) {
            .hero-bg {
              background-position: center 30%;
            }
          }

          .hero-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, rgba(66, 35, 18, 0.4), rgba(42, 24, 16, 0.6));
            box-shadow: inset 0 0 200px rgba(0,0,0,0.3);
          }
          
          .hero-overlay::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: 
              repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px);
            pointer-events: none;
          }
          
          .hero-content {
            position: relative;
            z-index: 10;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 2rem;
          }
          
          .hero-title {
            font-size: clamp(3rem, 10vw, 8rem);
            font-weight: 900;
            text-transform: uppercase;
            line-height: 1.1;
            margin-bottom: 1rem;
            font-family: 'Rye', serif;
            color: #DAA520;
            text-shadow: 
              4px 4px 0 #000,
              6px 6px 0 #8B4513,
              8px 8px 20px rgba(0,0,0,0.8),
              0 0 40px rgba(218, 165, 32, 0.5);
            animation: fadeInUp 1s ease-out;
            letter-spacing: 5px;
            -webkit-text-stroke: 2px #3E2723;
          }
          
          .hero-subtitle {
            font-size: clamp(1rem, 3vw, 2rem);
            font-weight: 400;
            letter-spacing: 4px;
            margin-bottom: 2rem;
            animation: fadeInUp 1.2s ease-out;
            font-family: 'Special Elite', cursive;
            color: #F4E4CD;
            text-shadow: 2px 2px 4px #000, 0 0 10px rgba(0,0,0,0.5);
          }
          
          .hero-cta {
            display: inline-block;
            padding: 1.5rem 4rem;
            background: linear-gradient(135deg, #DAA520 0%, #F4C542 50%, #DAA520 100%);
            color: #2a1810;
            text-decoration: none;
            font-weight: 900;
            font-size: 1.3rem;
            text-transform: uppercase;
            letter-spacing: 3px;
            border-radius: 8px;
            border: 4px solid #8B4513;
            box-shadow: 
              0 4px 0 #6B3410,
              0 8px 20px rgba(0,0,0,0.5),
              inset 0 2px 0 rgba(255,255,255,0.3),
              inset 0 -2px 0 rgba(0,0,0,0.3);
            transition: all 0.3s ease;
            animation: fadeInUp 1.4s ease-out, pulse 2s infinite;
            font-family: 'Alfa Slab One', cursive;
            text-shadow: 1px 1px 0 rgba(255,255,255,0.5);
            position: relative;
          }
          
          .hero-cta::before {
            content: '★';
            position: absolute;
            left: 1rem;
            font-size: 1.5rem;
          }
          
          .hero-cta::after {
            content: '★';
            position: absolute;
            right: 1rem;
            font-size: 1.5rem;
          }
          
          .hero-cta:hover {
            transform: translateY(-5px);
            box-shadow: 
              0 6px 0 #6B3410,
              0 12px 30px rgba(0,0,0,0.7),
              inset 0 2px 0 rgba(255,255,255,0.4),
              0 0 20px rgba(218, 165, 32, 0.6);
          }
          
          .hero-cta:active {
            transform: translateY(-2px);
            box-shadow: 
              0 2px 0 #6B3410,
              0 4px 15px rgba(0,0,0,0.5);
          }
          
          .scroll-indicator {
            position: absolute;
            bottom: 3rem;
            left: 50%;
            transform: translateX(-50%);
            z-index: 10;
            animation: bounce 2s infinite;
          }
          
          .scroll-indicator i {
            font-size: 2rem;
            color: #DAA520;
          }
          
          /* Animations */
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes pulse {
            0%, 100% {
              box-shadow: 0 10px 40px rgba(212, 175, 55, 0.4);
            }
            50% {
              box-shadow: 0 10px 60px rgba(212, 175, 55, 0.7);
            }
          }
          
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateX(-50%) translateY(0);
            }
            40% {
              transform: translateX(-50%) translateY(-10px);
            }
            60% {
              transform: translateX(-50%) translateY(-5px);
            }
          }
          
          /* Navigation - Western Saloon Style */
          nav {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            background: linear-gradient(180deg, #4A2511 0%, #3E2723 100%);
            backdrop-filter: blur(10px);
            padding: 1.5rem 5%;
            transition: all 0.3s ease;
            border-bottom: 4px solid #DAA520;
            box-shadow: 0 4px 0 #000, 0 8px 20px rgba(0,0,0,0.5);
            background-image: 
              repeating-linear-gradient(90deg, transparent 0px, rgba(0,0,0,0.1) 1px, transparent 2px, transparent 100px),
              linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 50%);
          }
          
          nav.scrolled {
            background: linear-gradient(180deg, #3E2723 0%, #2a1810 100%);
            box-shadow: 0 4px 0 #DAA520, 0 8px 30px rgba(218, 165, 32, 0.3);
            border-bottom: 3px solid #D2691E;
          }
          
          .nav-container {
            max-width: 1400px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          
          .logo {
            font-size: 2.5rem;
            font-weight: 900;
            color: #DAA520;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-family: 'Rye', serif;
            text-shadow: 3px 3px 0 #000, 5px 5px 10px rgba(0,0,0,0.5);
            letter-spacing: 3px;
          }
          
          .logo i {
            color: #D2691E;
            filter: drop-shadow(2px 2px 0 #000);
          }
          
          .nav-links {
            display: flex;
            gap: 2.5rem;
            list-style: none;
          }
          
          .nav-links a {
            color: #F4E4CD;
            text-decoration: none;
            font-weight: 700;
            font-size: 1.1rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            transition: all 0.3s ease;
            position: relative;
            font-family: 'Alfa Slab One', cursive;
            text-shadow: 2px 2px 0 #000;
            padding: 0.5rem 1rem;
          }
          
          .nav-links a::before {
            content: '★';
            position: absolute;
            left: -10px;
            opacity: 0;
            color: #DAA520;
            transition: all 0.3s ease;
          }
          
          .nav-links a:hover::before,
          .nav-links a.active::before {
            opacity: 1;
            left: -15px;
          }
          
          .nav-links a::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 3px;
            background: linear-gradient(90deg, #DAA520, #D2691E);
            transition: width 0.3s ease;
            box-shadow: 0 0 10px #DAA520;
          }
          
          .nav-links a:hover::after,
          .nav-links a.active::after {
            width: 100%;
          }
          
          /* Services Section */
          .services-section {
            padding: 8rem 5%;
            background: linear-gradient(180deg, #3E2723 0%, #8B4513 100%);
          }
          
          .section-title {
            text-align: center;
            font-size: clamp(3rem, 6vw, 5rem);
            font-weight: 900;
            text-transform: uppercase;
            margin-bottom: 1rem;
            color: #DAA520;
          }
          
          .section-subtitle {
            text-align: center;
            font-size: 1.2rem;
            font-weight: 300;
            color: #ccc;
            margin-bottom: 5rem;
            letter-spacing: 2px;
          }
          
          .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 3rem;
            max-width: 1400px;
            margin: 0 auto;
          }
          
          .service-card {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 20px;
            padding: 2rem;
            text-align: center;
            transition: all 0.5s ease;
            cursor: pointer;
            border: 2px solid transparent;
            position: relative;
            overflow: hidden;
          }
          
          .service-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, rgba(255, 69, 0, 0.1), rgba(139, 0, 0, 0.1));
            opacity: 0;
            transition: opacity 0.5s ease;
          }
          
          .service-card:hover::before {
            opacity: 1;
          }
          
          .service-card:hover {
            transform: translateY(-10px) scale(1.02);
            border-color: #DAA520;
            box-shadow: 0 20px 60px rgba(255, 69, 0, 0.3);
          }
          
          .service-icon {
            font-size: 4rem;
            color: #DAA520;
            margin-bottom: 1.5rem;
            display: inline-block;
            transition: all 0.5s ease;
          }
          
          .service-card:hover .service-icon {
            transform: scale(1.2) rotate(10deg);
          }
          
          .service-title {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 1rem;
            text-transform: uppercase;
          }
          
          .service-description {
            font-size: 1rem;
            line-height: 1.6;
            color: #ccc;
          }
          
          /* Stats Section */
          .stats-section {
            padding: 6rem 5%;
            background: rgba(255, 69, 0, 0.1);
            text-align: center;
          }
          
          .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 3rem;
            max-width: 1200px;
            margin: 0 auto;
          }
          
          .stat-item {
            padding: 2rem;
          }
          
          .stat-number {
            font-size: 4rem;
            font-weight: 900;
            color: #DAA520;
            margin-bottom: 0.5rem;
          }
          
          .stat-label {
            font-size: 1.2rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: #ccc;
          }
          
          /* Projects Section */
          .projects-section {
            padding: 8rem 5%;
            background: linear-gradient(180deg, #8B4513 0%, #3E2723 100%);
          }
          
          .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
            gap: 2rem;
            max-width: 1400px;
            margin: 0 auto;
          }
          
          .project-card {
            position: relative;
            height: 500px;
            border-radius: 20px;
            overflow: hidden;
            cursor: pointer;
            transition: all 0.5s ease;
          }
          
          .project-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
          }
          
          .project-card:hover .project-image {
            transform: scale(1.1);
          }
          
          .project-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, transparent 50%);
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding: 2rem;
            transition: all 0.5s ease;
          }
          
          .project-card:hover .project-overlay {
            background: linear-gradient(to top, rgba(139, 0, 0, 0.95) 0%, rgba(255, 69, 0, 0.7) 100%);
          }
          
          .project-category {
            display: inline-block;
            padding: 0.5rem 1rem;
            background: #DAA520;
            color: white;
            font-size: 0.8rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            border-radius: 20px;
            margin-bottom: 1rem;
            width: fit-content;
          }
          
          .project-title {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
            text-transform: uppercase;
            transform: translateY(0);
            transition: transform 0.5s ease;
          }
          
          .project-card:hover .project-title {
            transform: translateY(-10px);
          }
          
          .project-description {
            font-size: 1rem;
            line-height: 1.6;
            color: #eee;
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.5s ease;
          }
          
          .project-card:hover .project-description {
            opacity: 1;
            transform: translateY(0);
          }
          
          .project-stats {
            display: flex;
            gap: 2rem;
            margin-top: 1rem;
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.5s ease 0.1s;
          }
          
          .project-card:hover .project-stats {
            opacity: 1;
            transform: translateY(0);
          }
          
          .stat-item-project {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: #fff;
          }
          
          .stat-icon {
            color: #DAA520;
          }
          
          /* Contact Section */
          .contact-section {
            padding: 8rem 5%;
            background: linear-gradient(180deg, #3E2723 0%, #8B4513 100%);
            position: relative;
            overflow: hidden;
          }
          
          .contact-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 50%, rgba(30, 58, 95, 0.3) 0%, transparent 50%);
            pointer-events: none;
          }
          
          .contact-container {
            max-width: 1200px;
            margin: 3rem auto;
            position: relative;
            z-index: 1;
          }
          
          .contact-premium-card {
            background: linear-gradient(135deg, rgba(30, 58, 95, 0.4), rgba(10, 22, 40, 0.6));
            border-radius: 30px;
            padding: 4rem;
            backdrop-filter: blur(10px);
            border: 2px solid rgba(212, 175, 55, 0.3);
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
          }
          
          .contact-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
          }
          
          .contact-info {
            display: flex;
            flex-direction: column;
            gap: 2.5rem;
          }
          
          .contact-item {
            display: flex;
            align-items: flex-start;
            gap: 1.5rem;
            opacity: 0;
            animation: fadeInUp 0.6s ease forwards;
          }
          
          .contact-item:nth-child(1) { animation-delay: 0.1s; }
          .contact-item:nth-child(2) { animation-delay: 0.2s; }
          .contact-item:nth-child(3) { animation-delay: 0.3s; }
          .contact-item:nth-child(4) { animation-delay: 0.4s; }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .contact-item-icon {
            width: 60px;
            height: 60px;
            min-width: 60px;
            background: linear-gradient(135deg, #DAA520, #f4d03f);
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            color: #3E2723;
            box-shadow: 0 8px 20px rgba(212, 175, 55, 0.4);
            transition: all 0.3s ease;
          }
          
          .contact-item:hover .contact-item-icon {
            transform: scale(1.1) rotate(-5deg);
            box-shadow: 0 12px 30px rgba(212, 175, 55, 0.6);
          }
          
          .contact-item-content h3 {
            font-size: 1rem;
            color: #DAA520;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 0.5rem;
            font-weight: 600;
          }
          
          .contact-item-content p {
            font-size: 1.1rem;
            color: #fff;
            line-height: 1.6;
            margin: 0;
          }
          
          .contact-item-content a {
            color: #fff;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            display: inline-block;
          }
          
          .contact-item-content a:hover {
            color: #DAA520;
            transform: translateX(5px);
          }
          
          .contact-cta {
            text-align: center;
          }
          
          .contact-cta-title {
            font-size: 2.5rem;
            font-weight: 900;
            color: #fff;
            margin-bottom: 1rem;
            text-transform: uppercase;
            text-shadow: 0 4px 20px rgba(212, 175, 55, 0.3);
          }
          
          .contact-cta-subtitle {
            font-size: 1.2rem;
            color: rgba(255, 255, 255, 0.8);
            margin-bottom: 2rem;
            line-height: 1.6;
          }
          
          .contact-phone-big {
            display: inline-block;
            font-size: 3.5rem;
            font-weight: 900;
            color: #DAA520;
            text-decoration: none;
            margin-bottom: 2rem;
            transition: all 0.3s ease;
            text-shadow: 0 4px 20px rgba(212, 175, 55, 0.5);
          }
          
          .contact-phone-big:hover {
            color: #fff;
            transform: scale(1.05);
            text-shadow: 0 8px 30px rgba(212, 175, 55, 0.8);
          }
          
          .contact-badges {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1rem;
            margin-top: 2rem;
          }
          
          .contact-badge {
            background: rgba(212, 175, 55, 0.15);
            border: 1px solid rgba(212, 175, 55, 0.4);
            border-radius: 30px;
            padding: 0.6rem 1.5rem;
            font-size: 0.9rem;
            color: #DAA520;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }
          
          .contact-badge i {
            font-size: 1rem;
          }
          
          /* Emergency Banner */
          .emergency-banner {
            background: linear-gradient(135deg, #DAA520, #f4d03f);
            padding: 3rem 3rem;
            text-align: center;
            border-radius: 25px;
            max-width: 1200px;
            margin: 4rem auto 0;
            box-shadow: 0 20px 60px rgba(212, 175, 55, 0.4);
            position: relative;
            overflow: hidden;
          }
          
          .emergency-banner::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(255, 255, 255, 0.1) 10px,
              rgba(255, 255, 255, 0.1) 20px
            );
            animation: emergency-stripes 20s linear infinite;
            pointer-events: none;
          }
          
          @keyframes emergency-stripes {
            0% { transform: translate(0, 0); }
            100% { transform: translate(50px, 50px); }
          }
          
          .emergency-title {
            font-size: 1.8rem;
            font-weight: 900;
            text-transform: uppercase;
            margin-bottom: 1rem;
            color: #3E2723;
            letter-spacing: 2px;
            position: relative;
            z-index: 1;
          }
          
          .emergency-title i {
            color: #c41e3a;
            animation: pulse 2s ease-in-out infinite;
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.7; transform: scale(1.1); }
          }
          
          .emergency-phone {
            font-size: 3.5rem;
            font-weight: 900;
            color: #3E2723;
            text-decoration: none;
            display: inline-block;
            transition: all 0.3s ease;
            position: relative;
            z-index: 1;
          }
          
          .emergency-phone:hover {
            transform: scale(1.05);
            text-shadow: 0 4px 20px rgba(10, 22, 40, 0.3);
          }
          
          .emergency-text {
            font-size: 1.1rem;
            margin-top: 1rem;
            color: #3E2723;
            font-weight: 600;
            position: relative;
            z-index: 1;
          }
          
          /* Footer */
          footer {
            background: #000;
            padding: 4rem 5% 2rem;
          }
          
          .footer-content {
            max-width: 1400px;
            margin: 0 auto;
          }
          
          .footer-main {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            margin-bottom: 3rem;
          }
          
          .footer-info h3 {
            font-size: 2rem;
            color: #DAA520;
            margin-bottom: 1rem;
            text-transform: uppercase;
          }
          
          .footer-info p {
            color: #ccc;
            line-height: 1.8;
            margin-bottom: 1rem;
          }
          
          .footer-map {
            border-radius: 15px;
            overflow: hidden;
            height: 300px;
            border: 2px solid rgba(255, 69, 0, 0.3);
          }
          
          .footer-map iframe {
            width: 100%;
            height: 100%;
            border: none;
            filter: grayscale(0.3) brightness(0.9);
          }
          
          .footer-bottom {
            border-top: 1px solid rgba(255, 69, 0, 0.2);
            padding-top: 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 2rem;
          }
          
          .footer-social {
            display: flex;
            gap: 1rem;
          }
          
          .social-icon {
            width: 50px;
            height: 50px;
            background: rgba(255, 69, 0, 0.1);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #DAA520;
            font-size: 1.5rem;
            transition: all 0.3s ease;
            border: 2px solid #DAA520;
            text-decoration: none;
          }
          
          .social-icon:hover {
            background: #DAA520;
            color: #fff;
            transform: translateY(-5px);
          }
          
          .copyright {
            color: #666;
            font-size: 0.9rem;
          }
          
          /* Mobile Menu */
          .mobile-menu-btn {
            display: none;
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
          }
          
          @media (max-width: 768px) {
            .nav-links {
              display: none;
              flex-direction: column;
              position: absolute;
              top: 100%;
              left: 0;
              right: 0;
              background: rgba(0, 0, 0, 0.98);
              padding: 2rem;
            }
            
            .nav-links.active {
              display: flex;
            }
            
            .mobile-menu-btn {
              display: block;
            }
            
            .services-grid,
            .projects-grid {
              grid-template-columns: 1fr;
            }
            
            .contact-content {
              grid-template-columns: 1fr;
              gap: 3rem;
            }
            
            .contact-premium-card {
              padding: 2.5rem 1.5rem;
            }
            
            .contact-phone-big {
              font-size: 2.5rem;
            }
            
            .contact-cta-title {
              font-size: 2rem;
            }
            
            .emergency-phone {
              font-size: 2.5rem;
            }
            
            .emergency-title {
              font-size: 1.5rem;
            }
            
            .footer-main {
              grid-template-columns: 1fr;
            }
            
            .footer-bottom {
              flex-direction: column;
              text-align: center;
            }
          }
        </style>
    </head>
    <body>
        <!-- Navigation -->
        <nav id="navbar">
            <div class="nav-container">
                <a href="#home" class="logo texan-font">
                    <i class="fas fa-tools"></i>
                    F&A CONSTRUCTION
                </a>
                <button class="mobile-menu-btn" onclick="toggleMenu()">
                    <i class="fas fa-bars"></i>
                </button>
                <ul class="nav-links" id="navLinks">
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#services">SERVICES</a></li>
                    <li><a href="#projects">PROJECTS</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>
            </div>
        </nav>

        <!-- Hero Section -->
        <section id="home" class="hero-section">
            <div class="hero-bg" id="heroBg"></div>
            <div class="hero-overlay"></div>
            <div class="hero-content">
                <div>
                    <p class="hero-subtitle">Roofing • Drywall • Complete Home Solutions</p>
                    <a href="#contact" class="hero-cta">GET FREE ESTIMATE</a>
                </div>
            </div>
            <div class="scroll-indicator">
                <i class="fas fa-chevron-down"></i>
            </div>
        </section>

        <!-- Services Section -->
        <section id="services" class="services-section">
            <h2 class="section-title texan-font">OUR EXPERTISE</h2>
            <p class="section-subtitle">Professional Services for Your Home</p>
            
            <div class="services-grid">
                <div class="service-card">
                    <i class="fas fa-home service-icon"></i>
                    <h3 class="service-title texan-font">ROOFING</h3>
                    <p class="service-description">
                        Expert roof installation, repair, and maintenance. We specialize in all types of roofing materials 
                        and guarantee quality that stands the test of Texas weather.
                    </p>
                </div>
                
                <div class="service-card">
                    <i class="fas fa-paint-roller service-icon"></i>
                    <h3 class="service-title texan-font">DRYWALL</h3>
                    <p class="service-description">
                        Professional drywall installation, repair, and finishing. From new construction to renovations, 
                        we deliver smooth, flawless walls every time.
                    </p>
                </div>
                
                <div class="service-card">
                    <i class="fas fa-wrench service-icon"></i>
                    <h3 class="service-title texan-font">HANDYMAN</h3>
                    <p class="service-description">
                        Complete home maintenance and repair services. Whatever your home needs, 
                        we've got the skills and experience to get it done right.
                    </p>
                </div>
                
                <div class="service-card">
                    <i class="fas fa-hammer service-icon"></i>
                    <h3 class="service-title texan-font">REMODELING</h3>
                    <p class="service-description">
                        Transform your space with our expert remodeling services. Kitchen, bathroom, 
                        or whole-home renovations done with precision and care.
                    </p>
                </div>
                
                <div class="service-card">
                    <i class="fas fa-bolt service-icon"></i>
                    <h3 class="service-title texan-font">EMERGENCY</h3>
                    <p class="service-description">
                        24/7 emergency repair services available. When disaster strikes, 
                        we're here to help restore your home quickly and efficiently.
                    </p>
                </div>
                
                <div class="service-card">
                    <i class="fas fa-star service-icon"></i>
                    <h3 class="service-title texan-font">QUALITY</h3>
                    <p class="service-description">
                        Licensed, insured, and committed to excellence. We take pride in every project 
                        and ensure complete customer satisfaction.
                    </p>
                </div>
            </div>
        </section>

        <!-- Stats Section -->
        <section class="stats-section">
            <div class="stats-grid">
                <div class="stat-item">
                    <div class="stat-number texan-font" data-target="15">0</div>
                    <div class="stat-label">YEARS EXPERIENCE</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number texan-font" data-target="500">0</div>
                    <div class="stat-label">HAPPY CLIENTS</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number texan-font" data-target="1000">0</div>
                    <div class="stat-label">PROJECTS COMPLETED</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number texan-font" data-target="100">0</div>
                    <div class="stat-label">5-STAR REVIEWS</div>
                </div>
            </div>
        </section>

        <!-- Projects Section -->
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

        <!-- Contact Section -->
        <section id="contact" class="contact-section">
            <h2 class="section-title texan-font">GET IN TOUCH</h2>
            <p class="section-subtitle">Your San Antonio Home Experts</p>
            
            <div class="contact-container">
                <div class="contact-premium-card">
                    <div class="contact-content">
                        <!-- Contact Information -->
                        <div class="contact-info">
                            <div class="contact-item">
                                <div class="contact-item-icon">
                                    <i class="fas fa-phone"></i>
                                </div>
                                <div class="contact-item-content">
                                    <h3 class="texan-font">Call Us Now</h3>
                                    <p><a href="tel:+17135551234">(713) 555-1234</a></p>
                                    <p style="font-size: 0.9rem; color: rgba(255,255,255,0.7); margin-top: 0.3rem;">Mon-Sat: 7AM - 7PM</p>
                                </div>
                            </div>
                            
                            <div class="contact-item">
                                <div class="contact-item-icon">
                                    <i class="fas fa-envelope"></i>
                                </div>
                                <div class="contact-item-content">
                                    <h3 class="texan-font">Email Us</h3>
                                    <p><a href="mailto:info@sanantoniopro.com">info@sanantoniopro.com</a></p>
                                    <p style="font-size: 0.9rem; color: rgba(255,255,255,0.7); margin-top: 0.3rem;">24-hour response time</p>
                                </div>
                            </div>
                            
                            <div class="contact-item">
                                <div class="contact-item-icon">
                                    <i class="fas fa-map-marker-alt"></i>
                                </div>
                                <div class="contact-item-content">
                                    <h3 class="texan-font">Service Area</h3>
                                    <p>Greater San Antonio Area</p>
                                    <p style="font-size: 0.9rem; color: rgba(255,255,255,0.7); margin-top: 0.3rem;">San Antonio • New Braunfels • Boerne<br>Stone Oak • Alamo Heights</p>
                                </div>
                            </div>
                            
                            <div class="contact-item">
                                <div class="contact-item-icon">
                                    <i class="fas fa-star"></i>
                                </div>
                                <div class="contact-item-content">
                                    <h3 class="texan-font">Our Guarantee</h3>
                                    <p>Free Estimates</p>
                                    <p style="font-size: 0.9rem; color: rgba(255,255,255,0.7); margin-top: 0.3rem;">Licensed & Insured<br>Quality Workmanship</p>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Call to Action -->
                        <div class="contact-cta">
                            <h3 class="contact-cta-title texan-font">Ready to Start<br>Your Project?</h3>
                            <p class="contact-cta-subtitle">
                                Get your free estimate today!<br>
                                Professional service you can trust.
                            </p>
                            <a href="tel:+17135551234" class="contact-phone-big texan-font">
                                (713) 555-1234
                            </a>
                            <div class="contact-badges">
                                <div class="contact-badge">
                                    <i class="fas fa-shield-alt"></i>
                                    Licensed
                                </div>
                                <div class="contact-badge">
                                    <i class="fas fa-certificate"></i>
                                    Insured
                                </div>
                                <div class="contact-badge">
                                    <i class="fas fa-clock"></i>
                                    24/7 Emergency
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Emergency Banner -->
            <div class="emergency-banner">
                <h2 class="emergency-title texan-font">
                    <i class="fas fa-exclamation-triangle"></i> 24/7 EMERGENCY SERVICE AVAILABLE
                </h2>
                <a href="tel:+17135551234" class="emergency-phone texan-font">
                    (713) 555-1234
                </a>
                <p class="emergency-text">
                    Storm Damage • Roof Leaks • Water Damage • Urgent Repairs
                </p>
            </div>
        </section>

        <!-- Footer -->
        <footer>
            <div class="footer-content">
                <div class="footer-main">
                    <div class="footer-info">
                        <h3 class="texan-font">F&A CONSTRUCTION HANDYMAN</h3>
                        <p>
                            <i class="fas fa-map-marker-alt" style="color: #DAA520;"></i>
                            Serving Greater San Antonio Area, TX
                        </p>
                        <p>
                            <i class="fas fa-phone" style="color: #DAA520;"></i>
                            <a href="tel:+17135551234" style="color: #ccc; text-decoration: none;">(713) 555-1234</a>
                        </p>
                        <p>
                            <i class="fas fa-envelope" style="color: #DAA520;"></i>
                            <a href="mailto:info@sanantoniopro.com" style="color: #ccc; text-decoration: none;">info@sanantoniopro.com</a>
                        </p>
                        <p style="margin-top: 2rem;">
                            Licensed, Insured & Certified<br>
                            15+ Years of Excellence in San Antonio
                        </p>
                    </div>
                    
                    <div class="footer-map">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221697.43718031652!2d-98.73463844999999!3d29.4246002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c58af04d00eaf%3A0x856e13b10a016bc!2sSan%20Antonio%2C%20TX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus" 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <p class="copyright">&copy; 2025 F&A Construction Services. All Rights Reserved.</p>
                    
                    <div class="footer-social">
                        <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </footer>

        <script>
          // Parallax Effect
          window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroBg = document.getElementById('heroBg');
            if (heroBg) {
              heroBg.style.transform = 'translateY(' + scrolled * 0.5 + 'px)';
            }
            
            // Navbar scroll effect
            const navbar = document.getElementById('navbar');
            if (scrolled > 100) {
              navbar.classList.add('scrolled');
            } else {
              navbar.classList.remove('scrolled');
            }
            
            // Active nav link based on scroll position
            updateActiveNavLink();
          });
          
          // Update active nav link
          function updateActiveNavLink() {
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.nav-links a');
            
            let current = '';
            sections.forEach(section => {
              const sectionTop = section.offsetTop;
              const sectionHeight = section.clientHeight;
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
          
          // Counter Animation
          const animateCounter = (element) => {
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
          };
          
          // Intersection Observer for counter animation
          const observerOptions = {
            threshold: 0.5
          };
          
          const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                const counters = document.querySelectorAll('.stat-number');
                counters.forEach(counter => {
                  if (counter.textContent === '0') {
                    animateCounter(counter);
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
          
          // Mobile Menu Toggle
          function toggleMenu() {
            const navLinks = document.getElementById('navLinks');
            navLinks.classList.toggle('active');
          }
          
          // Close mobile menu when clicking a link
          document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
              const navLinks = document.getElementById('navLinks');
              navLinks.classList.remove('active');
            });
          });
          
          // Service Card Hover Effect
          const serviceCards = document.querySelectorAll('.service-card');
          serviceCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
              this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
              this.style.transform = 'translateY(0) scale(1)';
            });
          });
          
          // Smooth scroll for anchor links
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
        </script>
        
        <!-- Application Scripts - Clean Code Architecture -->
        <script src="/static/data.js"></script>
        <script src="/static/components.js"></script>
        
        <!-- Initialize Carousels -->
        <script>
          // Wait for all scripts to load
          window.addEventListener('load', () => {
            console.log('Initializing carousels...');
            console.log('PORTFOLIO_DATA:', typeof PORTFOLIO_DATA);
            console.log('ComponentFactory:', typeof ComponentFactory);
            
            // Render Roofing Carousel
            const roofingContainer = document.getElementById('roofing-carousel');
            if (roofingContainer && typeof ComponentFactory !== 'undefined' && typeof PORTFOLIO_DATA !== 'undefined') {
              console.log('Rendering roofing carousel with', PORTFOLIO_DATA.roofing.length, 'images');
              roofingContainer.innerHTML = ComponentFactory.createCarousel(PORTFOLIO_DATA.roofing, 'roofing');
            } else {
              console.error('Roofing carousel failed:', {
                container: !!roofingContainer,
                factory: typeof ComponentFactory,
                data: typeof PORTFOLIO_DATA
              });
            }
            
            // Render Drywall Carousel
            const drywallContainer = document.getElementById('drywall-carousel');
            if (drywallContainer && typeof ComponentFactory !== 'undefined' && typeof PORTFOLIO_DATA !== 'undefined') {
              console.log('Rendering drywall carousel with', PORTFOLIO_DATA.drywall.length, 'images');
              drywallContainer.innerHTML = ComponentFactory.createCarousel(PORTFOLIO_DATA.drywall, 'drywall');
            } else {
              console.error('Drywall carousel failed');
            }
            
            // Render Kitchen Carousel
            const kitchenContainer = document.getElementById('kitchen-carousel');
            if (kitchenContainer && typeof ComponentFactory !== 'undefined' && typeof PORTFOLIO_DATA !== 'undefined') {
              console.log('Rendering kitchen carousel with', PORTFOLIO_DATA.kitchen.length, 'images');
              kitchenContainer.innerHTML = ComponentFactory.createCarousel(PORTFOLIO_DATA.kitchen, 'kitchen');
            } else {
              console.error('Kitchen carousel failed');
            }
            
            console.log('All carousels rendered successfully');
            
            // Small delay to ensure DOM is updated before carousel.js runs
            setTimeout(() => {
              const script = document.createElement('script');
              script.src = '/static/carousel.js';
              document.body.appendChild(script);
            }, 100);
          });
        </script>
    </body>
    </html>
  `)
})

export default app
