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
      
    }
    daysText.textContent = dayss;
    horText.textContent = hours;
    minText.textContent = mins;
    secText.textContent = secs;
   
  }, 10);


  // new CountdownTimer({
  //   selector: '#timer-1',
  //   targetDate: new Date('Jul 17, 2019'),
  // })


/*
 * Дні, що залишилися: ділимо значення UTC на 1000 * 60 * 60 * 24, кількість
 * мілісекунд в один день (мілісекунди * секунди * хвилини * години)
 */
// const dayss = Math.floor(time / (1000 * 60 * 60 * 24));
// ​
/*
 * Решта годин: отримуємо залишок від попереднього розрахунку за допомогою оператора
 * залишку% і ділимо його на кількість мілісекунд в одній годині
 * (1000 * 60 * 60 = мілісекунди * хвилини * секунди)
 */
// const hourss = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// ​
/*
 * Решта хвилин: отримуємо хвилини, що залишилися і ділимо їх на кількість
 * мілісекунд в одній хвилині (1000 * 60 = мілісекунди * секунди)
 */
// const minss = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
// ​
// /*
//  * Решта секунд: отримуємо секунди, які залишилися і ділимо їх на кількість
//  * миллисекунд в одной секунде (1000)
//  */
// const secss = Math.floor((time % (1000 * 60)) / 1000);


