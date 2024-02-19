const days = document.querySelector(`[data-value="days"]`)
const hor = document.querySelector(`[data-value="hours"]`)
const min = document.querySelector(`[data-value="mins"]`)
const sec = document.querySelector(`[data-value="secs"]`)
  console.log(days)

  new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2019'),
  })

const data = new Date();
console.log(data);
console.log(Date);
console.log(data.getDate());

const dateValue = data.getDate();
let hors = data.getHours();
let min = data.getMinutes();
let sec = data.getSeconds();

alert(`Сьогодні час за київом ${hors} годин ${min} хв ${sec} сек`)
/*
 * Дні, що залишилися: ділимо значення UTC на 1000 * 60 * 60 * 24, кількість
 * мілісекунд в один день (мілісекунди * секунди * хвилини * години)
 */
const dayss = Math.floor(time / (1000 * 60 * 60 * 24));
​
/*
 * Решта годин: отримуємо залишок від попереднього розрахунку за допомогою оператора
 * залишку% і ділимо його на кількість мілісекунд в одній годині
 * (1000 * 60 * 60 = мілісекунди * хвилини * секунди)
 */
const hourss = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
​
/*
 * Решта хвилин: отримуємо хвилини, що залишилися і ділимо їх на кількість
 * мілісекунд в одній хвилині (1000 * 60 = мілісекунди * секунди)
 */
const minss = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
​
/*
 * Решта секунд: отримуємо секунди, які залишилися і ділимо їх на кількість
 * миллисекунд в одной секунде (1000)
 */
const secss = Math.floor((time % (1000 * 60)) / 1000);


