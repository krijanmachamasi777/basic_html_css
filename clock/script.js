function updateclock(){
const a = new Date();
let hours=a.getHours();
let minutes=a.getMinutes();
let seconds=a.getSeconds();
let d=a.getDate();

 const ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours === 0 ? 12 : hours; 

hours = padZero(hours);
minutes = padZero(minutes);
seconds = padZero(seconds);


const time=`${hours}:${minutes}:${seconds} ${ampm}`;
document.getElementById("clock").textContent=time;
}
function padZero(num) {
  return num < 10 ? '0' + num : num;
}


setInterval(updateclock,1000);
updateclock();

