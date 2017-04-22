const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
var secondIncrementer = 0;
var minuteIncrementer = 0;
var hourIncrementer = 0;

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();  
  if(seconds === 0) secondIncrementer++;
  const secondsDegrees = ((seconds / 60) * 360);
  
  const minutes = now.getMinutes();
  if(minutes === 0 && seconds === 0) minuteIncrementer++;
  const minutesDegrees = ((minutes / 60) * 360);
  
  const hours = now.getHours();
  if(hours === 0 && minutes === 0 && seconds === 0) hourIncrementer++;
  const hoursDegrees = hours <= 12 ? ((hours / 12) * 360) : (((hours % 12) / 12) * 360);
  
  secondHand.style.transform = `rotate(${90 + (360 * secondIncrementer) + secondsDegrees}deg)`;
  // secondHand.style.setProperty("transform", `rotate(${90 + (360 * secondIncrementer) + secondsDegrees}deg)`);
  minuteHand.style.transform = `rotate(${90 + (360 * minuteIncrementer) + minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${90 + (360 * hourIncrementer) + hoursDegrees}deg)`;
}

setInterval(setDate, 1000);