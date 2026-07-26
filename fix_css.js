const fs = require('fs');

const refinedAestheticStyles = `
<style id="aesthetic-override">
  :root {
    --text-primary: #ffffff;
    --text-secondary: rgba(255, 255, 255, 0.85);
    --accent-1: #FF9A9E;
    --accent-2: #FECFEF;
    --glass-bg: rgba(20, 10, 45, 0.4);
    --glass-border: rgba(255, 255, 255, 0.1);
  }

  html, body {
    font-family: 'Outfit', sans-serif !important;
    background: #0f0914 !important;
    color: var(--text-secondary) !important;
    scroll-behavior: smooth;
  }
  
  #fluid-bg-container, .fluid-bg-container {
    background: linear-gradient(-45deg, #1A0B2E, #2d1033, #17183B, #200f26) !important;
    background-size: 400% 400% !important;
    animation: gradientBG 15s ease infinite !important;
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    z-index: -1;
  }
  
  h1, h2, h3, h4, .honorable-header {
    font-family: 'Playfair Display', serif !important;
    font-weight: 600 !important;
    background: linear-gradient(45deg, var(--accent-1), var(--accent-2), #ffffff) !important;
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
    letter-spacing: 1px !important;
    margin-bottom: 24px !important;
    border: none !important;
    box-shadow: none !important;
    padding: 0 !important;
    text-align: center;
  }
  
  #welcome .content-wrapper h2 {
    font-size: 4em !important;
    text-shadow: 0 4px 20px rgba(255, 154, 158, 0.2) !important;
  }

  /* Refined Glassmorphism Sections */
  .section-background {
    background: var(--glass-bg) !important;
    backdrop-filter: blur(16px) !important;
    -webkit-backdrop-filter: blur(16px) !important;
    border: 1px solid var(--glass-border) !important;
    border-radius: 24px !important;
    padding: 60px 40px !important;
    margin: 40px auto !important;
    width: 90% !important;
    max-width: 1000px !important;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3) !important;
    transition: transform 0.4s ease, box-shadow 0.4s ease !important;
  }
  
  .section-background:hover {
    transform: translateY(-5px) !important;
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.4), 0 0 20px rgba(255, 154, 158, 0.1) !important;
  }
  
  .content-wrapper {
    max-width: 100% !important;
    margin: 0 auto !important;
    padding: 0 !important;
    text-align: center !important;
  }
  
  /* Text and lists */
  p, .user-description, .quote {
    font-family: 'Outfit', sans-serif !important;
    font-weight: 300 !important;
    color: var(--text-secondary) !important;
    line-height: 1.8 !important;
    font-size: 1.15em !important;
    text-align: center !important;
    margin: 0 auto 24px auto !important;
    max-width: 700px !important;
  }
  
  ul {
    padding: 20px 30px !important;
    max-width: 600px !important;
    margin: 0 auto 30px auto !important;
    text-align: left !important;
    list-style: none !important;
    background: rgba(0,0,0,0.1) !important;
    border-radius: 16px !important;
    border: 1px solid rgba(255,255,255,0.05) !important;
    display: inline-block;
  }
  
  ul li {
    font-weight: 300 !important;
    color: var(--text-secondary) !important;
    font-size: 1.1em !important;
    padding: 12px 0 12px 28px !important;
    border-bottom: 1px solid rgba(255,255,255,0.05) !important;
    transition: all 0.3s ease !important;
    line-height: 1.5 !important;
    position: relative !important;
    display: block !important;
    text-align: left;
  }
  
  ul li:last-child { border-bottom: none !important; }
  
  ul li::before {
    content: '✦' !important;
    color: var(--accent-1) !important;
    font-size: 1.1em !important;
    position: absolute !important;
    left: 0 !important;
    top: 13px !important;
  }
  
  ul li:hover {
    color: #fff !important;
    transform: translateX(5px) !important;
  }
  
  /* Buttons */
  .button, .read-more, .back-btn, a.button {
    background: rgba(255, 255, 255, 0.05) !important;
    color: var(--text-primary) !important;
    border: 1px solid rgba(255, 255, 255, 0.3) !important;
    border-radius: 100px !important;
    padding: 12px 32px !important;
    font-family: 'Outfit', sans-serif !important;
    font-weight: 400 !important;
    letter-spacing: 1.5px !important;
    text-transform: uppercase !important;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
    font-size: 0.9em !important;
    margin: 10px !important;
    display: inline-block !important;
    text-decoration: none !important;
    backdrop-filter: blur(8px) !important;
  }
  
  .button:hover, .read-more:hover, .back-btn:hover, a.button:hover {
    background: linear-gradient(45deg, var(--accent-1), var(--accent-2)) !important;
    color: #111 !important;
    border-color: transparent !important;
    transform: translateY(-3px) scale(1.05) !important;
    box-shadow: 0 10px 20px rgba(255, 154, 158, 0.3) !important;
  }
  
  /* Honorable / Royal Agents Specific Layout */
  .user-container {
    display: flex !important;
    flex-wrap: wrap !important;
    justify-content: center !important;
    gap: 30px !important;
    max-width: 1000px !important;
    margin: 0 auto !important;
    padding: 20px !important;
  }
  
  .user-row, .user-card {
    background: rgba(255,255,255,0.03) !important;
    border: 1px solid rgba(255,255,255,0.05) !important;
    border-radius: 20px !important;
    padding: 24px !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    text-align: center !important;
    transition: transform 0.4s ease, box-shadow 0.4s ease, background 0.4s ease !important;
    backdrop-filter: blur(10px) !important;
    flex: 1 1 280px;
    max-width: 320px;
  }
  
  .user-row:hover, .user-card:hover {
    transform: translateY(-8px) !important;
    background: rgba(255,255,255,0.06) !important;
    box-shadow: 0 15px 35px rgba(0,0,0,0.4), 0 0 15px rgba(255,154,158,0.2) !important;
  }
  
  .user-image-wrap { margin-bottom: 16px !important; }
  
  .user-image-wrap img, .user-image {
    width: 90px !important;
    height: 90px !important;
    border-radius: 50% !important;
    object-fit: cover !important;
    filter: grayscale(40%) contrast(110%) !important;
    transition: filter 0.4s ease, transform 0.4s ease !important;
    border: 2px solid rgba(255,255,255,0.15) !important;
  }
  
  .user-row:hover .user-image-wrap img, .user-card:hover .user-image {
    filter: grayscale(0%) contrast(100%) !important;
    transform: scale(1.05) !important;
  }
  
  .user-details { width: 100% !important; }
  
  .user-name {
    font-family: 'Playfair Display', serif !important;
    font-size: 1.6em !important;
    color: #fff !important;
    text-decoration: none !important;
    display: block !important;
    margin-bottom: 8px !important;
    font-weight: 500 !important;
  }
  
  .user-name:hover { color: var(--accent-1) !important; }
  
  .user-description {
    font-size: 0.95em !important;
    margin: 0 0 16px 0 !important;
    text-align: center !important;
    font-style: italic !important;
    color: rgba(255,255,255,0.6) !important;
    line-height: 1.4 !important;
  }
  
  .badge-container {
    display: flex !important;
    gap: 8px !important;
    flex-wrap: wrap !important;
    justify-content: center !important;
  }
  
  .badge-icon {
    width: 28px !important;
    height: 28px !important;
    border-radius: 50% !important;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3)) !important;
    transition: transform 0.3s ease !important;
  }
  
  .badge-icon:hover {
    transform: scale(1.2) rotate(5deg) !important;
  }
  
  /* Staff Minimal Layout */
  .staff-profile {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    gap: 24px !important;
    margin: 20px auto 40px !important;
    background: rgba(0,0,0,0.1) !important;
    padding: 40px !important;
    border-radius: 24px !important;
    border: 1px solid rgba(255,255,255,0.05) !important;
  }
  
  .staff-profile img {
    width: 180px !important;
    height: 180px !important;
    border-radius: 50% !important;
    object-fit: cover !important;
    filter: grayscale(40%) contrast(110%) !important;
    transition: all 0.5s ease !important;
    border: 3px solid rgba(255,255,255,0.2) !important;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5) !important;
  }
  
  .staff-profile:hover img {
    filter: grayscale(0%) contrast(100%) !important;
    transform: scale(1.05) !important;
    border-color: var(--accent-1) !important;
  }
  
  .staff-badges {
    display: flex !important;
    gap: 15px !important;
    justify-content: center !important;
    margin-top: 15px !important;
  }
  
  .staff-badges img {
    width: 48px !important;
    height: 48px !important;
    border: none !important;
    border-radius: 0 !important;
  }
  
  .back-button-container {
    margin-top: 40px !important;
    text-align: center !important;
  }

  @media (max-width: 768px) {
    #welcome .content-wrapper h2 { font-size: 3em !important; }
    .section-background { padding: 40px 20px !important; width: 95% !important; }
    p, .user-description, .quote { font-size: 1.05em !important; }
    .user-container { flex-direction: column !important; padding: 10px !important; }
    .user-row { max-width: 100% !important; }
  }
</style>
`;

const files = [
  'public/index.html',
  'public/home.html',
  'public/rules/rules.html',
  'public/moments/moments.html',
  'public/honorable/honorable.html',
  'public/staff/staff.html'
];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/<style id="aesthetic-override">[\s\S]*?<\/style>/, refinedAestheticStyles);
  // Also reduce the fluid opacity from 0.5 to 0.3
  content = content.replace(/opacity:\s*0\.5;/g, 'opacity: 0.3;');
  fs.writeFileSync(file, content);
});
