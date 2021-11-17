let words = {}

alert('This program handles information about word and word classes.');

while(true){
    let word = prompt('Give a word: '); // pine
    let word_class = prompt('Give the class of the word: '); // noun
    
    words[word] = word_class
    alert('Word was saved to the dictionary.\n');

    let res = prompt('Do you want to give more words (y/n) :');
    if(res == 'n'){
        break
    }
}
while(true){
    let asked_word = prompt('Give the word, which class you want to know: ');
    if(typeof words[asked_word] == 'undefined'){
        alert('Word was not found.')
    } else {
        alert('Word class is ' + words[asked_word])
    }
    let res = prompt('Do you want to ask about more words (y/n) :')
    if(res == 'n'){
        break;
    }
}