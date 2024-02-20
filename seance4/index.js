console.log(Number("3.14"))

console.log(Number(" "))

console.log(Number(""))

console.log(Number("99 98"))

let y = "5"
let x = +y

String(x)
String(123)
String(100+123)



console.log(d.getDay(2))
console.log(d.getDate(2))
console.log(d.getYear())
console.log(d.getFullYear(2024))
console.log(d.getMilliseconds())
console.log(d.getSeconds(40))
console.log(d.getMinutes(27))
console.log(d.getHours(10))
console.log(d.getMonth(1))
console.log(d.getTimezoneOffset())

switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
}
  
console.log(day)
