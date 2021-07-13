/* 
Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F
*/

var nota = 48;
if (nota>=80 && nota<=100){
    console.log("A")
}
if (nota>=70 && nota<=89){
    console.log("B")
}
if (nota>=60 && nota<=69){
    console.log("C")
}
if (nota>=50 && nota<=59){
    console.log("D")
}
if (nota>=0 && nota<=49){
    console.log("F")
}