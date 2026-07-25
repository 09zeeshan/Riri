const fs = require('fs');
let code = fs.readFileSync('public/script.js', 'utf8');

code = code.replace(/window\.addEventListener\('touchstart'[\s\S]*?window\.addEventListener\('touchmove'/m, `window.addEventListener('touchstart', e => {
    const touches = e.touches;
    for (let i = 0; i < touches.length; i++) {
        let pointer = pointers.find(p => p.id == touches[i].identifier);
        if (!pointer) {
            pointer = pointers.find(p => p.id == -1 && !p.down) || new pointerPrototype();
            if (!pointers.includes(pointer)) pointers.push(pointer);
        }
        let posX = scaleByPixelRatio(touches[i].clientX);
        let posY = scaleByPixelRatio(touches[i].clientY);
        updatePointerDownData(pointer, touches[i].identifier, posX, posY);
    }
});
window.addEventListener('touchmove'`);

code = code.replace(/window\.addEventListener\('touchmove'[\s\S]*?window\.addEventListener\('touchcancel'/m, `window.addEventListener('touchmove', e => {
    const touches = e.touches;
    for (let i = 0; i < touches.length; i++) {
        let pointer = pointers.find(p => p.id == touches[i].identifier);
        if (!pointer) continue;
        let posX = scaleByPixelRatio(touches[i].clientX);
        let posY = scaleByPixelRatio(touches[i].clientY);
        updatePointerMoveData(pointer, posX, posY);
    }
}, false);
window.addEventListener('touchcancel'`);

fs.writeFileSync('public/script.js', code);
