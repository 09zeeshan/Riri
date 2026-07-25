const fs = require('fs');
let code = fs.readFileSync('public/script.js', 'utf8');
code = code.replace(/pointers\.forEach\(p => {[\s\S]*?if \(p\.moved\) {/m, 'pointers.forEach(p => {\n        if (p.down) p.moved = true;\n        if (p.moved) {');
fs.writeFileSync('public/script.js', code);
