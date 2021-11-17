notes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

target = 946;

total = 0; // 946
index = 0; // 9
notes_to_give = []; // [500, 200, 200, 20, 20, 5, 1]

while(total < target){
    if(total + notes[index] <= target){
        total +=  notes[index];
        notes_to_give.push(notes[index]);
    } else {
        index += 1;
    }
}

console.log(target, total, notes_to_give);