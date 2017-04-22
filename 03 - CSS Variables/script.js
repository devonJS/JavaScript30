const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  // this.dataset returns object with properties that follow "data-" on an attribute
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
  console.log(document.documentElement)
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));