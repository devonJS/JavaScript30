const panels = document.querySelectorAll(".panel");

panels.forEach(panel => {
    panel.addEventListener("click", toggleExpand);
    panel.addEventListener("transitionend", toggleActive)
});

function toggleExpand() {
    this.classList.toggle('open');
}

function toggleActive(e) {
    if(e.propertyName.includes("flex")) {
        this.classList.toggle('open-active');
    }
}