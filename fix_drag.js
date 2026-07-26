const fs = require('fs');
let script = fs.readFileSync('public/script.js', 'utf8');
script = script.replace('pointer.moved = Math.abs(pointer.deltaX) > 0 || Math.abs(pointer.deltaY) > 0;', 'pointer.moved = pointer.down && (Math.abs(pointer.deltaX) > 0 || Math.abs(pointer.deltaY) > 0);');
fs.writeFileSync('public/script.js', script);
