const fs = require('fs');
let code = fs.readFileSync('/tmp/fluid/script.js', 'utf8');

// 1-4
code = code.replace(/canvas\.addEventListener/g, 'window.addEventListener');
// 5
code = code.replace(/e\.offsetX/g, 'e.clientX').replace(/e\.offsetY/g, 'e.clientY');
// 7
code = code.replace(/e\.preventDefault\(\);/g, '');
// 9
code = code.replace(/if \(\!pointer\.down\) return;/g, '');
// 10
code = code.replace(/TRANSPARENT: false/g, 'TRANSPARENT: true');
// 11
code = code.replace(/drawCheckerboard\(target\);/g, '');
// 12
code = code.replace(/let gui = new dat\.GUI\(\{ width: 300 \}\);/g, 'let gui = new dat.GUI({ width: 300 }); gui.hide();');
// 13
code = code.replace(/promoPopup\.style\.display/g, 'if (typeof promoPopup !== "undefined" && promoPopup) promoPopup.style.display');
code = code.replace(/promoPopupClose\.addEventListener/g, 'if (promoPopupClose) promoPopupClose.addEventListener');
code = code.replace(/appleLink\.addEventListener/g, 'if (appleLink) appleLink.addEventListener');
code = code.replace(/googleLink\.addEventListener/g, 'if (googleLink) googleLink.addEventListener');
// fix ga
code = code.replace(/ga\('send'/g, '// ga("send"');

// Fix touch tracking using identifier and add touchcancel
code = code.replace(/window\.addEventListener\('touchstart'[\s\S]*?window\.addEventListener\('touchend'/m, `window.addEventListener('touchstart', e => {
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
window.addEventListener('touchmove', e => {
    const touches = e.touches;
    for (let i = 0; i < touches.length; i++) {
        let pointer = pointers.find(p => p.id == touches[i].identifier);
        if (!pointer) continue;
        let posX = scaleByPixelRatio(touches[i].clientX);
        let posY = scaleByPixelRatio(touches[i].clientY);
        updatePointerMoveData(pointer, posX, posY);
    }
}, false);
window.addEventListener('touchcancel', e => {
    const touches = e.changedTouches;
    for (let i = 0; i < touches.length; i++) {
        let pointer = pointers.find(p => p.id == touches[i].identifier);
        if (pointer == null) continue;
        updatePointerUpData(pointer);
    }
});
window.addEventListener('touchend'`);

code = code.replace(/window\.addEventListener\('touchend', e => \{[\s\S]*?\}\);/, `window.addEventListener('touchend', e => {
    const touches = e.changedTouches;
    for (let i = 0; i < touches.length; i++) {
        let pointer = pointers.find(p => p.id == touches[i].identifier);
        if (pointer == null) continue;
        updatePointerUpData(pointer);
    }
});`);

// Fix down data: make it appear immediately
code = code.replace(/pointer\.moved = false;/g, 'pointer.moved = true; pointer.deltaX = (Math.random() - 0.5) * 0.01; pointer.deltaY = (Math.random() - 0.5) * 0.01;');

// Fix applyInputs to allow continuous splats while held down
code = code.replace(/function applyInputs \(\) \{[\s\S]*?multipleSplats\(splatStack\.pop\(\)\);[\s\S]*?pointers\.forEach\(p => \{[\s\S]*?if \(p\.moved\) \{[\s\S]*?p\.moved = false;[\s\S]*?splatPointer\(p\);[\s\S]*?\}[\s\S]*?\}\);[\s\S]*?\}/m, `function applyInputs () {
    if (splatStack.length > 0)
        multipleSplats(splatStack.pop());
    pointers.forEach(p => {
        if (p.down) p.moved = true; // continue updating until finger is lifted
        if (p.moved) {
            p.moved = false;
            splatPointer(p);
        }
    });
}`);

fs.writeFileSync('public/script.js', code);
