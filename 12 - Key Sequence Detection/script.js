let pressed = [];
const secretCode = 'wesbos';

window.addEventListener('keyup', (e) => {
    pressed.push(e.key)
    if(pressed.length > secretCode.length) {
        pressed.shift()
    }
    if(pressed.join("") === secretCode) cornify_add();
});