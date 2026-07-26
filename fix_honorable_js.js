const fs = require('fs');
let html = fs.readFileSync('public/honorable/honorable.html', 'utf8');

// Remove the script block
html = html.replace(/<script>\s*const observer = new IntersectionObserver[\s\S]*?<\/script>/, '');

fs.writeFileSync('public/honorable/honorable.html', html);
