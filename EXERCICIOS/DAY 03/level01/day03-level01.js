/*Declare firstName, lastName, country, city, age, isMarried, year variable and assign value
 to it and use the typeof operator to check different data types.
*/
//DECLARANDO VARIÁVEIS
const firstName = "Anne"
const lastName = "Carmo"
const country = "Brasil"
const city = "Belo Horizonte"
const age = 28
const isMarrige = false;
const year = 2021;
//VERIFICANDO TIPOS DE DADOS
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarrige);
console.log(typeof year);


/*Check if type of '10' is equal to 10
*/
console.log(typeof "10" === typeof 10);

/*
Check if parseInt('9.8') is equal to 10
*/
console.log(typeof parseInt('9.8') === 10)

/* 
Boolean value is either true or false.
 -Write three JavaScript statement which provide truthy value.
 -Write three JavaScript statement which provide falsy value.
*/
var isTrue = true;
var isOk = true;
console.log(typeof isTrue === typeof isOk)
console.log(typeof "Maria" === typeof "Jose")
console.log(typeof "22" === typeof "Pelé")

console.log(typeof parseInt('10') === 10)
console.log(typeof 12.2 === parseFloat("12.2"))
var name = "Eloisa"
console.log(typeof name === Boolean )



/* Figure out the result of the following comparison expression first without using console.log(). 
After you decide the result confirm it using console.log()

    4 > 3 //TRUE
    4 >= 3 //TRUE
    4 < 3 //FALSE
    4 <= 3 //FALSE
    4 == 4 //TRUE
    4 === 4 //TRUE
    4 != 4 //FALSE
    4 !== 4 //FALSE
    4 != '4' //FALSE
    4 == '4' //TRUE
    4 === '4' //FALSE
    Find the length of python and jargon and make a falsy comparison statement.
*/
console.log("Realizando comparações")
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);  
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');

/*Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

    4 > 3 && 10 < 12 //TRUE
    4 > 3 && 10 > 12 //FALSE
    4 > 3 || 10 < 12 //TRUE
    4 > 3 || 10 > 12 //TRUE
    !(4 > 3) //FALSE
    !(4 < 3) //TRUE
    !(false) //TRUE
    !(4 > 3 && 10 < 12) //FALSE
    !(4 > 3 && 10 > 12) //TRUE
    !(4 === '4') //TRUE
    There is no 'on' in both dragon and python
*/
console.log("Operacoes Logicas")
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));


/*
    Use the Date object to do the following activities

What is the year today?
What is the month today as a number?
What is the date today?
What is the day today as a number?
What is the hours now?
What is the minutes now?
Find out the numbers of seconds elapsed from January 1, 1970 to now.
*/

console.log("Trabalhando com DATE OBJECT")
const dataExercicio = new Date();
console.log(dataExercicio.getFullYear())
console.log(dataExercicio.getMonth() + 1)
console.log(dataExercicio.getDate())
console.log(dataExercicio.getDay())
console.log(dataExercicio.getHours())
console.log(dataExercicio.getMinutes())