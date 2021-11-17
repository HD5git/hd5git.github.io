target = 33 // 32 31

inputs = [1, 2, 3, 1, 28, 30, 31, 34, 39, 38, 28, 29, 34, 35, 36, 34]
expected = ['wrong', true, true, false, true, true, true, false, false, true, false, true, false, false, false, true]

outputs = []
index = 0

first = true // false
while(index < inputs.length){

    if(first){  // or if(first == true){}
        if(inputs[index] == target){
            outputs.push('correct');
            break;
        } else {
            outputs.push('wrong')
        }
        first = false
    } else {
        current_difference = target - inputs[index];
        prev_difference = target - inputs[index-1];

        // Check if correct answer given. If given then add 'correct' to outputs and exit program.
        if(current_difference == 0){
            outputs.push('correct');
            break;
        }
        current_sign = Math.abs(current_difference) == current_difference // current_diff = -4   === true
        prev_sign =  Math.abs(prev_difference) == prev_difference // prev_diff = -9 === false

        // Check if sign change. If changed, directly say 'colder'. Else, calculate if warmer or colder. 
        if(current_sign != prev_sign){
            outputs.push(false);
        } else {
            if(Math.abs(prev_difference) > Math.abs(current_difference)){
                outputs.push(true);
            } else {
                outputs.push(false);
            }
        }
    }
    index += 1
}

console.log(outputs.toString() == expected.toString(), outputs);