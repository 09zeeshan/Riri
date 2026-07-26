const fs = require('fs');

const files = [
  'public/index.html',
  'public/home.html',
  'public/staff/staff.html',
  'public/honorable/honorable.html',
  'public/rules/rules.html',
  'public/moments/moments.html'
];

const aestheticStyles = `
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet">
<style id="aesthetic-override">
  :root {
    --glass-bg: rgba(255, 255, 255, 0.03);
    --glass-border: rgba(255, 255, 255, 0.1);
    --glass-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
    --text-primary: #ffffff;
    --text-secondary: rgba(255, 255, 255, 0.75);
    --accent-1: #FF9A9E;
    --accent-2: #FECFEF;
  }

  html, body {
    font-family: 'Outfit', sans-serif !important;
  }
  
  #fluid-bg-container, .fluid-bg-container {
    background: linear-gradient(-45deg, #1A0B2E, #4A1942, #17183B, #2B1445) !important;
    background-size: 400% 400% !important;
    animation: gradientBG 15s ease infinite !important;
  }
  
  h1, h2, h3, h4, .honorable-header {
    font-family: 'Playfair Display', serif !important;
    font-weight: 700 !important;
    background: linear-gradient(45deg, var(--accent-1), var(--accent-2), #fbc2eb) !important;
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
    letter-spacing: 2px !important;
    text-shadow: none !important;
    margin-bottom: 24px !important;
  }
  
  /* Fix the welcome h2 specifically */
  #welcome .content-wrapper h2 {
    border: none !important;
    background: linear-gradient(45deg, var(--accent-1), var(--accent-2), #fbc2eb) !important;
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
    box-shadow: none !important;
    padding: 0 !important;
    font-size: 4em !important;
  }

  .section-background, .flip-card-front, .flip-card-back, .user-card {
    background: var(--glass-bg) !important;
    backdrop-filter: blur(20px) !important;
    -webkit-backdrop-filter: blur(20px) !important;
    border: 1px solid var(--glass-border) !important;
    border-radius: 20px !important;
    box-shadow: var(--glass-shadow) !important;
  }
  
  .section-background {
    padding: 50px 40px !important;
    max-width: 800px !important;
  }
  
  p, .user-description, .quote, ul li {
    font-family: 'Outfit', sans-serif !important;
    font-weight: 300 !important;
    color: var(--text-secondary) !important;
    line-height: 1.8 !important;
    font-size: 1.1em !important;
  }
  
  ul {
    background: transparent !important;
    border: none !important;
    padding: 0 !important;
  }
  
  ul li {
    background: transparent !important;
    border-bottom: 1px solid rgba(255,255,255,0.05) !important;
    padding: 15px 0 15px 35px !important;
    margin: 0 !important;
    transition: all 0.3s ease !important;
  }
  
  ul li:last-child {
    border-bottom: none !important;
  }
  
  ul li:hover {
    transform: translateX(10px) !important;
    color: #fff !important;
    background: transparent !important;
    box-shadow: none !important;
  }
  
  ul li::before {
    content: '✦' !important;
    color: var(--accent-1) !important;
    font-size: 1.2em !important;
    left: 5px !important;
    top: 15px !important;
    animation: none !important;
  }
  
  .button, .read-more, .back-btn {
    background: rgba(255, 255, 255, 0.05) !important;
    backdrop-filter: blur(8px) !important;
    color: var(--text-primary) !important;
    border: 1px solid rgba(255, 255, 255, 0.2) !important;
    border-radius: 100px !important;
    padding: 12px 35px !important;
    font-family: 'Outfit', sans-serif !important;
    font-weight: 500 !important;
    letter-spacing: 2px !important;
    text-transform: uppercase !important;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2) !important;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
    font-size: 0.9em !important;
  }
  
  .button:hover, .read-more:hover, .back-btn:hover {
    background: linear-gradient(45deg, var(--accent-1), var(--accent-2)) !important;
    color: #111 !important;
    border-color: transparent !important;
    transform: translateY(-4px) scale(1.05) !important;
    box-shadow: 0 10px 25px rgba(255, 154, 158, 0.4) !important;
  }
  
  .scroll-arrow {
    color: var(--accent-1) !important;
  }
  
  /* Specific Fixes */
  .honorable-header {
    margin-top: 60px !important;
    font-size: 3.5em !important;
  }
  
  .badge-icon {
    border-radius: 50% !important;
    border: 1px solid rgba(255,255,255,0.1) !important;
  }
  
  .user-image {
    border-radius: 16px !important;
    border: 2px solid rgba(255, 255, 255, 0.15) !important;
  }
  
  .flip-card {
    box-shadow: 0 10px 30px rgba(0,0,0,0.4) !important;
  }
</style>
`;

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  
  // Remove old font link to avoid duplicates
  content = content.replace(/<link href="https:\/\/fonts\.googleapis\.com\/css2\?family=Orbitron[^>]*>/, '');
  
  // Clean up any old aesthetic styles if run multiple times
  if (content.includes('id="aesthetic-override"')) {
    content = content.replace(/<link href="https:\/\/fonts\.googleapis\.com\/css2\?family=Playfair\+Display[\s\S]*?<\/style>/, aestheticStyles);
  } else {
    content = content.replace('</head>', aestheticStyles + '</head>');
  }
  
  fs.writeFileSync(file, content);
});
