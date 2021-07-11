/*
ERRO

Create a human readable time format using the Date time object. 
The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
YYY-MM-DD HH:mm eg. 20120-01-02 07:05
*/


var now = new Date();

function getHours(){
    if(now.getHours()<10){
        console.log(("0"+now.getHours()))
    }else{
        console.log(now.getHours())  
    }
}

function getMinutes(){
    if(now.getMinutes()<10){
        console.log("0"+now.getMinutes())
    }else{
        console.log(now.getMinutes())
    } 
}
var minutes = parseFloat(getMinutes());
var hour = parseFloat(getHours());

console.log("YYYY-MM-DD HH:mm eg. " + now.getFullYear() + "-" + now.getMonth() + "-" + now.getDay() + " " + hour +":"+ minutes)



