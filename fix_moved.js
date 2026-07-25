const fs = require('fs');
let code = fs.readFileSync('public/script.js', 'utf8');
code = code.replace(/pointer\.moved = Math\.abs\(pointer\.deltaX\) > 0 \|\| Math\.abs\(pointer\.deltaY\) > 0;/g, 'pointer.moved = true;');
fs.writeFileSync('public/script.js', code);
