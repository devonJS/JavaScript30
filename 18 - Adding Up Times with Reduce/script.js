const timeNodes = document.querySelectorAll('[data-time]');
//Convert from node list to array
const timeArr = [...timeNodes];
const seconds = timeArr
  .map(node => node.dataset.time)
  .map(time => {
      const [mins, secs] = time.split(":").map(strSecs => parseInt(strSecs, 10))
      return (mins * 60) + secs;
  })
  .reduce((total, secs) => total + secs, 0);
  
let secondsLeft = seconds;
const hours = Math.floor(seconds / 3600);
secondsLeft = seconds - (hours * 3600);

const minutes = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft - (minutes * 60);

console.log(hours, minutes, secondsLeft)