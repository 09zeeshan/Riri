const fs = require('fs');

// Patch index.html
let indexHtml = fs.readFileSync('public/index.html', 'utf8');
const indexStyleInject = `
    .hero-content h1 {
      animation: fadeInDown 1.2s ease-out, glowPulse 3s infinite alternate;
    }
    .button {
      animation: fadeInUp 1.2s ease-out;
      box-shadow: 0 0 10px rgba(0, 221, 235, 0.2);
    }
    .button:hover {
      box-shadow: 0 0 20px rgba(0, 221, 235, 0.6), 0 0 40px rgba(255, 105, 180, 0.4);
      transform: translateY(-3px) scale(1.05);
    }
    @keyframes fadeInDown {
      from { opacity: 0; transform: translateY(-30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes glowPulse {
      0% { text-shadow: 0 0 10px rgba(255, 105, 180, 0.5); }
      100% { text-shadow: 0 0 20px rgba(0, 221, 235, 0.8), 0 0 30px rgba(255, 105, 180, 0.6); }
    }
    .background-video {
      animation: videoFade 2s ease-in;
    }
    @keyframes videoFade {
      from { opacity: 0; filter: blur(10px); }
      to { opacity: 0.8; filter: blur(0); }
    }
`;
if (!indexHtml.includes('fadeInDown')) {
    indexHtml = indexHtml.replace('</style>', indexStyleInject + '</style>');
    // Remove the old animation on hero-content to prevent conflict
    indexHtml = indexHtml.replace('animation: fadeIn 1s ease-out;', '');
    fs.writeFileSync('public/index.html', indexHtml);
}

// Patch home.html
let homeHtml = fs.readFileSync('public/home.html', 'utf8');
const homeStyleInject = `
    /* Scroll Reveal Animations */
    .reveal {
      opacity: 0;
      transform: translateY(40px);
      transition: all 0.8s cubic-bezier(0.5, 0, 0, 1);
    }
    .reveal.active {
      opacity: 1;
      transform: translateY(0);
    }
    /* Hover effects for sections */
    .section-background {
      transition: transform 0.4s ease, box-shadow 0.4s ease, background 0.4s ease;
    }
    .section-background:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 50px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 221, 235, 0.15);
      background: rgba(0, 0, 0, 0.9);
    }
    /* List items stagger animation */
    ul li {
      transition: transform 0.3s ease, color 0.3s ease;
    }
    ul li:hover {
      transform: translateX(10px);
      color: #fff;
    }
    /* Header subtle pulse on hover */
    h2 {
      transition: transform 0.3s ease;
    }
    .section-background:hover h2 {
      transform: scale(1.02);
    }
`;

const homeScriptInject = `
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      // Add reveal class to all sections
      const sections = document.querySelectorAll('.section-background');
      sections.forEach(sec => sec.classList.add('reveal'));

      // Intersection Observer for scroll reveal
      const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
      };

      const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            return;
          } else {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      }, revealOptions);

      sections.forEach(sec => revealOnScroll.observe(sec));
    });
  </script>
`;

if (!homeHtml.includes('reveal.active')) {
    homeHtml = homeHtml.replace('</style>', homeStyleInject + '</style>');
    homeHtml = homeHtml.replace('</body>', homeScriptInject + '</body>');
    fs.writeFileSync('public/home.html', homeHtml);
}
