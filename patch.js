const fs = require('fs');
let code = fs.readFileSync('public/script.js', 'utf8');
code = code.replace("window.addEventListener('touchend', e => {", "window.addEventListener('touchcancel', e => {\n    const touches = e.changedTouches;\n    for (let i = 0; i < touches.length; i++) {\n        let pointer = pointers.find(p => p.id == touches[i].identifier);\n        if (pointer == null) continue;\n        updatePointerUpData(pointer);\n    }\n});\nwindow.addEventListener('touchend', e => {");
fs.writeFileSync('public/script.js', code);
