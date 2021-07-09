// GET(leitura) + ANO, MES, DATA...

const now = new Date();
console.log(now); //2021-07-09T16:52:33:513Z

//EXTRAINDO INFORMAÇÕES

//OBTENDO ANO COMPLETO
console.log(now.getFullYear()); //2021

//OBTENDO MES
console.log(now.getMonth()); //06

//OBTENDO DATA
console.log(now.getDate()); //09

//OBTENDO DIA
console.log(now.getDay()); //05
//  Sunday is 0, Monday is 1 and Saturday is 6
// Getting the weekday as a number (0-6)

//OBTENDO HORAS
console.log(now.getHours());

//OBTENDO MINUTOS
console.log(now.getMinutes());

//OBTENDO SEGUNDOS
console.log(now.getSeconds());



const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)
//FORMATANDO
console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56

