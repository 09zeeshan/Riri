const fs = require('fs');
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
  
  // Check if canvas style exists in aesthetic-override, if not, add it
  if (!content.includes('canvas {')) {
    content = content.replace(
      '  #fluid-bg-container, .fluid-bg-container {',
      '  canvas {\n    position: fixed !important;\n    top: 0 !important;\n    left: 0 !important;\n    width: 100vw !important;\n    height: 100vh !important;\n    z-index: 9999 !important;\n    pointer-events: none !important;\n    opacity: 0.3 !important;\n    mix-blend-mode: screen !important;\n  }\n\n  #fluid-bg-container, .fluid-bg-container {'
    );
    fs.writeFileSync(file, content);
  }
});
