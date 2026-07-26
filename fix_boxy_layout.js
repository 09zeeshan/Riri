const fs = require('fs');

const newAestheticStyles = `
<style id="aesthetic-override">
  :root {
    --text-primary: #ffffff;
    --text-secondary: rgba(255, 255, 255, 0.85);
    --accent-1: #FF9A9E;
    --accent-2: #FECFEF;
  }

  html, body {
    font-family: 'Outfit', sans-serif !important;
    background: #0f0914 !important;
  }
  
  #fluid-bg-container, .fluid-bg-container {
    background: linear-gradient(-45deg, #1A0B2E, #2d1033, #17183B, #200f26) !important;
    background-size: 400% 400% !important;
    animation: gradientBG 15s ease infinite !important;
  }
  
  h1, h2, h3, h4, .honorable-header {
    font-family: 'Playfair Display', serif !important;
    font-weight: 700 !important;
    background: linear-gradient(45deg, var(--accent-1), var(--accent-2), #fbc2eb) !important;
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
    letter-spacing: 1px !important;
    text-shadow: none !important;
    margin-bottom: 24px !important;
    border: none !important;
    box-shadow: none !important;
    padding: 0 !important;
  }
  
  #welcome .content-wrapper h2 {
    font-size: 4em !important;
  }

  /* Remove all section boxes */
  .section-background {
    background: transparent !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
    border: none !important;
    box-shadow: none !important;
    padding: 100px 20px !important;
    margin: 0 !important;
    width: 100% !important;
    max-width: 100% !important;
    border-radius: 0 !important;
  }
  
  .section-background:hover {
    transform: none !important;
    box-shadow: none !important;
    background: transparent !important;
  }
  
  /* Retain card styling for staff and honorable pages but clean them up */
  .flip-card-front, .flip-card-back, .user-card {
    background: rgba(255, 255, 255, 0.03) !important;
    backdrop-filter: blur(20px) !important;
    -webkit-backdrop-filter: blur(20px) !important;
    border: 1px solid rgba(255, 255, 255, 0.08) !important;
    border-radius: 20px !important;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3) !important;
  }
  
  .content-wrapper {
    max-width: 800px !important;
    margin: 0 auto !important;
    padding: 0 !important;
    text-align: center !important;
  }
  
  /* Remove old nested box styles from paragraphs and lists */
  p, .user-description, .quote {
    font-family: 'Outfit', sans-serif !important;
    font-weight: 300 !important;
    color: var(--text-secondary) !important;
    line-height: 1.8 !important;
    font-size: 1.25em !important;
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    padding: 0 20px !important;
    margin-bottom: 24px !important;
    text-align: center !important;
  }
  
  ul {
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    padding: 0 20px !important;
    max-width: 600px !important;
    margin: 0 auto 30px auto !important;
    text-align: left !important;
  }
  
  ul li {
    font-family: 'Outfit', sans-serif !important;
    font-weight: 300 !important;
    color: var(--text-secondary) !important;
    font-size: 1.15em !important;
    background: transparent !important;
    border: none !important;
    border-bottom: 1px solid rgba(255,255,255,0.05) !important;
    padding: 16px 0 16px 35px !important;
    margin: 0 !important;
    transition: all 0.3s ease !important;
    line-height: 1.5 !important;
  }
  
  ul li:last-child {
    border-bottom: none !important;
  }
  
  ul li:hover {
    transform: translateX(10px) !important;
    color: #fff !important;
    background: transparent !important;
  }
  
  ul li::before {
    content: '✦' !important;
    color: var(--accent-1) !important;
    font-size: 1.2em !important;
    left: 5px !important;
    top: 16px !important;
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
    box-shadow: 0 4px 15px rgba(0,0,0,0.1) !important;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
    font-size: 0.9em !important;
    margin: 10px !important;
    display: inline-block !important;
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
  
  /* Fix the 2 words in a line issue caused by narrow containers on mobile */
  @media (max-width: 768px) {
    #welcome .content-wrapper h2 {
      font-size: 2.5em !important;
    }
    .section-background {
      padding: 60px 0 !important;
    }
    .content-wrapper {
      max-width: 100% !important;
      padding: 0 15px !important;
    }
    p, .user-description, .quote, ul {
      padding: 0 15px !important;
    }
  }
</style>
`;

const files = [
  'public/index.html',
  'public/home.html',
  'public/staff/staff.html',
  'public/honorable/honorable.html',
  'public/rules/rules.html',
  'public/moments/moments.html'
];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace the entire aesthetic-override style block
  content = content.replace(/<style id="aesthetic-override">[\s\S]*?<\/style>/, newAestheticStyles);
  
  fs.writeFileSync(file, content);
});
