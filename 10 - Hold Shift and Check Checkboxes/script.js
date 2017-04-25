

//*** MY VERSION ***

let shiftHeldDown;
let firstChecked;

window.addEventListener('keydown', e => {
    if(e.keyCode === 16) shiftHeldDown = true;
});

window.addEventListener('keyup', e => {
    if(e.keyCode === 16) shiftHeldDown = false;
});

function checkAggregateBoxes() {
    if(this.checked && shiftHeldDown) {
        let inRange;
        for(let i = 0; i < inputs.length; i++) {
            if(inputs[i] === this || inputs[i] === firstChecked) inRange = !inRange;
            if(inRange) inputs[i].checked = true;
        }
    }
    firstChecked = this; 
}

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('click', checkAggregateBoxes);
});

// function handleCheck(e) {
//     let inBetween = false
//     if(e.shiftKey && this.checked) {
//         checkboxes.forEach(checkBox => {
//             if(checkBox === this || checkBox === lastChecked) inBetween = !inBetween;
//             if(inBetween) checkBox.checked = true;
//         });
//     }
//     lastChecked = this;
// }
// 
// const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')
// let lastChecked
// 
// checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))