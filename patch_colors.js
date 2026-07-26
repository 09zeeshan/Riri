const fs = require('fs');

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
  
  // 1. Replace background gradients
  content = content.replace(/linear-gradient\(135deg,\s*#1a1a2e\s*0%,\s*#16213e\s*100%\)/g, 'linear-gradient(-45deg, #140e36, #2d1445, #112a45, #360e22)');
  
  // 2. Add animation for the background
  if (!content.includes('gradientBG')) {
     const bgAnimationStyles = `
     <style>
       #fluid-bg-container, html, body {
         background-size: 400% 400% !important;
         animation: gradientBG 15s ease infinite !important;
       }
       @keyframes gradientBG {
         0% { background-position: 0% 50%; }
         50% { background-position: 100% 50%; }
         100% { background-position: 0% 50%; }
       }
     </style>
     `;
     content = content.replace('</head>', bgAnimationStyles + '</head>');
  }

  // 3. Replace base hex colors
  content = content.replace(/#00ddeb/gi, '#00E5FF');
  content = content.replace(/#ff69b4/gi, '#FF007A');

  // 4. Inject the purple into the text/button gradients to make it a 3-stop gradient
  content = content.replace(/linear-gradient\(45deg,\s*#FF007A,\s*#00E5FF\)/gi, 'linear-gradient(45deg, #FF007A, #9D00FF, #00E5FF)');
  content = content.replace(/linear-gradient\(45deg,\s*#00E5FF,\s*#FF007A\)/gi, 'linear-gradient(45deg, #00E5FF, #9D00FF, #FF007A)');

  // 5. Replace RGBA glow values
  content = content.replace(/rgba\(0,\s*221,\s*235/g, 'rgba(0, 229, 255');
  content = content.replace(/rgba\(255,\s*105,\s*180/g, 'rgba(255, 0, 122');
  
  // 6. Replace specific flip card backgrounds in staff.html
  content = content.replace(/linear-gradient\(45deg,\s*#222831,\s*#393e46\)/g, 'linear-gradient(45deg, #2b1845, #180929)');
  content = content.replace(/linear-gradient\(45deg,\s*#393e46,\s*#222831\)/g, 'linear-gradient(45deg, #180929, #2b1845)');
  
  // 7. Make panel backgrounds glassier and fun tinted
  content = content.replace(/background:\s*rgba\(0,\s*0,\s*0,\s*0\.85\)/g, 'background: rgba(20, 10, 45, 0.65)');
  content = content.replace(/background:\s*rgba\(0,\s*0,\s*0,\s*0\.9\)/g, 'background: rgba(40, 10, 60, 0.85)');
  content = content.replace(/background:\s*rgba\(0,\s*0,\s*0,\s*0\.6\)/g, 'background: rgba(30, 15, 60, 0.6)');
  
  // 8. Enhance backdrop blurs
  content = content.replace(/backdrop-filter:\s*blur\(5px\)/g, 'backdrop-filter: blur(12px)');

  fs.writeFileSync(file, content);
});
