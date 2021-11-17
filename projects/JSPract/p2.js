// function sumOf(num1, num2, num3, num4, num5){
//     let sum;
//     sum = num1 + num2 + num3 + num4 + num5;
//     return sum;
// }
// function sumOf(num1, num2, num3, num4, num5){
//     return num1 + num2 + num3 + num4 + num5;
// }
// let a = sumOf(5,1,2,3,1)
// let b = sumOf(5,1,1,1,1)
// console.log(a, b);

// function calcRem(num1, num2){
//     let rem = num1 % num2;
//     return rem;
// }
// result1 = calcRem(10, 3)
// result2 = calcRem(10, 2)
// console.log(result1, result2);


// function calcRem(num1, num2){
//     return  num1 % num2;
// }
// console.log(calcRem(10, 3), calcRem(10, 6));


// function multi(n1, n2, n3){
//     return n1 * n2 * n3;
// }
// console.log(multi(2, 3, 4));

// setInterval
// function logg(){
//     console.log("Logging something");
//     return function(){
//         // This will run every 2 seconds in the setInterval
//     }

// }
// setInterval(logg(), 2000)


// function logg(){
//     console.log("Logging something");
//     return None
// }
// setInterval(logg(), 2000) // Error coz None is returned and the setInterval needs a function to run every 2 seconds. It cant run "None". logg will be called once


// Somewhat used method when necessary
// function logg(){
//     console.log("Logging something");
// }
// setInterval(logg, 2000)


// Most used method
// setInterval(
//     function (){ // function name nahi dila tari chalel as we wont be using it anywhere else.
//         console.log("Logging something");
//     },
//     2000
// ) 

// console.log('Before interval');
// setInterval(
//     function (){ // function name nahi dila tari chalel as we wont be using it anywhere else.
//         console.log("Logging something");
//     },
//     2000
// ) 
// console.log('After Interval');


// setTimeout
// console.log("Starting timeout");
// setTimeout(
//     function (){
//         console.log('Inside Timeout');
//     },
    
// )
// console.log('Outside timeout');
// console.log('Outside timeout');
// console.log('Outside timeout');

// console.log('Outside timeout');
// console.log('Outside timeout');

// obj = {
//     nmbr: 1,
//     bool: true, // Boolean
//     strng: 'hello world',
//     ar: [1, 2, [1, 3, {
//         a: 1,
//         b: 2,
//         c: [1,3]
//     }]],
//     fnctn:[1,2, function (){console.log('Function inside an object'); return 'hi';}]
// }

// console.log(obj.fnctn[2]())

function a(){
    c = 20;
    console.log('..');
}
a();
console.log(c);



