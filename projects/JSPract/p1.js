
// i = 0
// while(i <= 10){
//     i = i + 1;

//     console.log('Started ' + i);

//     if(i == 5){
//         break
//     }

//     console.log('Ended ' + i + '\n');
// }
// code


function f(i){
    console.log('i is ' + i);
    if(i == 5){
        return
    }
    console.log('next \n');
}
f(4)
f(1)
f(5)
f(6)