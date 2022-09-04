const hourEl = document.getElementsByClassName("hour-hand")[0]
const minuteEl = document.getElementsByClassName("minute-hand")[0]
const secondEl = document.getElementsByClassName("second-hand")[0]



function turnClockHands() {
const date = new Date;
const currentHour = date.getHours();
const currentMinutes = date.getMinutes();
const currentSeconds = date.getSeconds();

// setTimeout(turnClockHands, 1000);

const angHour = (currentHour / 12) * 360 + (currentMinutes / 60) * 30;
const angMinutes = (currentMinutes / 60) * 360 + (currentSeconds / 60) * 6;
const angSeconds = (currentSeconds / 60) * 360;

hourEl.style.transform = `rotate(${angHour}deg)`
minuteEl.style.transform = `rotate(${angMinutes}deg)`
secondEl.style.transform = `rotate(${angSeconds}deg)`


// console.log(date);

}

// turnClockHands();

setInterval(turnClockHands, 1000);
