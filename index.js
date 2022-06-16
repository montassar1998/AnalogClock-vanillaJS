const hour = document.querySelector(".hour")
const minute = document.querySelector(".minute")
const second = document.querySelector(".second")
const backHour = document.querySelector(".backHour")
const backMinute = document.querySelector(".backMinute")
const backSeconds = document.querySelector(".backSeconds")

function tick() {
  const currentDate = new Date()
  const seconds_time = currentDate.getSeconds() / 60
  const minutes_time = currentDate.getMinutes() / 60
  const hours_time = currentDate.getHours() / 12
  
  rotation(hour, hours_time)
  rotation(minute, minutes_time)
  rotation(second, seconds_time)
  moveBack(backHour , hours_time)
  moveBack(backMinute , minutes_time)

  moveBack(backSeconds , seconds_time)

  //backHour.style.setProperty("--rotation" , 360* hours_time - 180 * hours_time);
}

function rotation(element, rotation) {
  element.style.setProperty("--rotation", rotation * 360);
}
function moveBack(element, rotation) {
  element.style.setProperty("--rotation",  (rotation * 360)%360 - 180 );
}
/*  you can omit this setClock call but it will start from midnight then jump to the 
 current date , it will still work */
tick();
setInterval(tick, 1000);
