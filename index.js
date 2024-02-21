const daysText = document.querySelector(`[data-value="days"]`)
const horText = document.querySelector(`[data-value="hours"]`)
const minText = document.querySelector(`[data-value="mins"]`)
const secText = document.querySelector(`[data-value="secs"]`)

const data = new Date();
const prldata = new Date('Jul 17, 2019');


const dateValue1 = data.getDate();
let days = data.getDay();
let hors = data.getHours();
let minn = data.getMinutes();
let secc = data.getSeconds();

const dateValue2 = prldata.getDate();
let daysM = prldata.getDay();
let horsM = prldata.getHours();
let minnM = prldata.getMinutes();
let seccM = prldata.getSeconds();

let time = data - prldata;
let dayss = Math.floor(time / (1000 * 60 * 60 * 24));
let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
let secs = Math.floor((time % (1000 * 60)) / 1000);

const timerInterval = setInterval(() => {
    


  secs--;
   
    if (secs < 0) {
      mins--;
      secs = 59;
    }

   

    if (mins === 0) {
      hours--;
      mins = 60;
      secs = 59;
    }
  
    if (hours === 0) {
      dayss--;
      hors = 24;
      minn = 60;
      secs = 59;
    }

    

    if (mins === 0 && secs === 0 && dayss === 0 && hours === 0) {
      clearInterval(timerInterval);
      console.log("stop")
    }
    daysText.textContent = dayss;
    horText.textContent = hours;
    minText.textContent = mins;
    secText.textContent = secs;
   
  }, 1000);




