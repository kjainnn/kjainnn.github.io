function averageThreeNumbers(a,b,c) {
    let sum = a + b + c; 
    let average  = sum / 3; 
    return  average; 
}


function createSentence (num, noun) {
    let sentencefunction = "On average, a Berkeley student has " + num + " " + noun + "." ; 
    return sentencefunction;
}

function getRandomNum (max) {
    let randomnum = Math.random() * max
    return randomnum;
}

let x = getRandomNum(20);
let y = getRandomNum(10);
let z = getRandomNum(13);

var name = "avg";
avg = averageThreeNumbers(20,10,13)

var name = "sentence";
sentence = createSentence (avg, "monkeys")

console.log(sentence);
