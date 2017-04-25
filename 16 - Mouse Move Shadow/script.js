const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100;

function shadow(e) {
    // Sets consts width and height to the properties offsetWidth and offsetHeight of hero, respectively
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;
    
    // this refers to the thing you listened on, hero in this case
    // e refers to where your mouse is hovering
    // normalizes 
    if(this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
    
    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));
    
    text.style.textShadow = `
        ${xWalk}px ${yWalk}px 0 red,
        ${-xWalk}px ${yWalk}px 0 blue,
        ${xWalk}px ${-yWalk}px 0 green
    `;
}

hero.addEventListener('mousemove', shadow);