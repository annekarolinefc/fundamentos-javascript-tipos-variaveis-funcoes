/*
Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let myAge = 250
let yourAge = 25
I am 225 years older than you.
*/

let myAge = 38
let yourAge = 20
if(myAge>yourAge){
    let diferenca = myAge-yourAge
    console.log(`I am ${diferenca} years older than you`)
} else if(yourAge>myAge){
    let diferenca = yourAge-myAge
    console.log(`You have ${diferenca} years older than me`)
} else{
    console.log("Our ages are equals.")
}