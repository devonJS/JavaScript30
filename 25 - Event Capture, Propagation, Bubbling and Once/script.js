const divs = document.querySelectorAll('div');

function logText(e) {
  console.log(this.classList.value);
  e.stopPropagation();
}
divs.forEach(div => div.addEventListener('click', logText, {
    // true: bubbles down, defaults to false for bubble up
    capture: false,
    // Listens for event, then unbinds itself, similar to removeEventListener
    // Will bubble up to next if its available
    once: true
}));