const fs = require('fs');

const aestheticStyles = `
<style id="aesthetic-override">
  :root {
    --text-primary: #ffffff;
    --text-secondary: rgba(255, 255, 255, 0.7);
    --accent-1: #FF9A9E;
    --accent-2: #FECFEF;
  }

  html, body {
    font-family: 'Outfit', sans-serif !important;
    background: #0f0914 !important;
    color: var(--text-secondary) !important;
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
    font-weight: 400 !important;
    background: linear-gradient(45deg, var(--accent-1), var(--accent-2), #ffffff) !important;
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
    letter-spacing: 1px !important;
    margin-bottom: 32px !important;
    border: none !important;
    box-shadow: none !important;
    padding: 0 !important;
    text-align: center;
  }
  
  #welcome .content-wrapper h2 {
    font-size: 4.5em !important;
  }

  /* Core layout elements - strip ALL boxes */
  .section-background, .user-card, .flip-card, .flip-card-front, .flip-card-back {
    background: transparent !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
    border: none !important;
    box-shadow: none !important;
    margin: 0 !important;
    border-radius: 0 !important;
  }
  
  .section-background {
    padding: 100px 20px !important;
    width: 100% !important;
    max-width: 100% !important;
  }
  
  .content-wrapper {
    max-width: 900px !important;
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
    margin: 0 auto 32px auto !important;
    max-width: 700px !important;
  }
  
  ul {
    padding: 0 !important;
    max-width: 600px !important;
    margin: 0 auto 40px auto !important;
    text-align: left !important;
    list-style: none;
  }
  
  ul li {
    font-weight: 300 !important;
    color: var(--text-secondary) !important;
    font-size: 1.15em !important;
    padding: 16px 0 !important;
    border-bottom: 1px solid rgba(255,255,255,0.05) !important;
    transition: all 0.3s ease !important;
    line-height: 1.6 !important;
    display: flex;
    align-items: flex-start;
  }
  
  ul li:last-child { border-bottom: none !important; }
  
  ul li::before {
    content: '✦' !important;
    color: var(--accent-1) !important;
    margin-right: 12px;
    font-size: 1em;
    margin-top: 2px;
  }
  
  /* Buttons */
  .button, .read-more, .back-btn, a.button {
    background: transparent !important;
    color: var(--text-primary) !important;
    border: 1px solid rgba(255, 255, 255, 0.3) !important;
    border-radius: 100px !important;
    padding: 14px 40px !important;
    font-family: 'Outfit', sans-serif !important;
    font-weight: 400 !important;
    letter-spacing: 2px !important;
    text-transform: uppercase !important;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
    font-size: 0.9em !important;
    margin: 10px !important;
    display: inline-block !important;
    text-decoration: none !important;
  }
  
  .button:hover, .read-more:hover, .back-btn:hover, a.button:hover {
    background: rgba(255,255,255,1) !important;
    color: #000 !important;
    border-color: #fff !important;
    transform: translateY(-2px) !important;
  }
  
  /* Honorable / Royal Agents Specific Layout */
  .user-container {
    display: flex;
    flex-direction: column;
    gap: 40px;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .user-row {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 30px;
    padding: 20px 0;
    border-bottom: 1px solid rgba(255,255,255,0.05);
    transition: transform 0.4s ease, opacity 0.4s ease;
    opacity: 0;
    transform: translateY(20px);
  }
  
  .user-row.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  .user-image-wrap {
    flex-shrink: 0;
  }
  
  .user-image-wrap img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    filter: grayscale(100%) contrast(120%);
    transition: filter 0.3s ease;
    border: 1px solid rgba(255,255,255,0.2);
  }
  
  .user-row:hover .user-image-wrap img {
    filter: grayscale(0%) contrast(100%);
  }
  
  .user-details {
    flex-grow: 1;
    text-align: left;
  }
  
  .user-name {
    font-family: 'Playfair Display', serif !important;
    font-size: 1.8em !important;
    color: #fff !important;
    text-decoration: none !important;
    display: block;
    margin-bottom: 4px;
    font-weight: 400 !important;
  }
  
  .user-name:hover {
    color: var(--accent-1) !important;
  }
  
  .user-description {
    font-size: 1em !important;
    margin: 0 !important;
    text-align: left !important;
    font-style: italic;
    color: rgba(255,255,255,0.5) !important;
  }
  
  .badge-container {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: 10px;
  }
  
  .badge-icon {
    width: 24px !important;
    height: 24px !important;
    border-radius: 50% !important;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));
  }
  
  /* Staff Minimal Layout */
  .staff-profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    margin: 40px auto 60px;
  }
  
  .staff-profile img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    filter: grayscale(80%) contrast(110%);
    transition: filter 0.5s ease;
    border: 2px solid rgba(255,255,255,0.1);
  }
  
  .staff-profile:hover img {
    filter: grayscale(0%) contrast(100%);
  }
  
  .staff-badges {
    display: flex;
    gap: 15px;
    justify-content: center;
  }
  
  .staff-badges img {
    width: 40px !important;
    height: 40px !important;
    border: none !important;
    border-radius: 0 !important;
  }
  
  .back-button-container {
    margin-top: 60px;
    text-align: center;
  }

  @media (max-width: 768px) {
    #welcome .content-wrapper h2 { font-size: 3em !important; }
    .section-background { padding: 80px 15px !important; }
    p, .user-description, .quote { font-size: 1.05em !important; }
    .user-row { flex-direction: column; text-align: center; gap: 15px; }
    .user-details { text-align: center; }
    .user-description { text-align: center !important; }
    .badge-container { justify-content: center; }
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
  content = content.replace(/<style id="aesthetic-override">[\s\S]*?<\/style>/, aestheticStyles);
  fs.writeFileSync(file, content);
});
