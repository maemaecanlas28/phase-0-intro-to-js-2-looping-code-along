// Code your solutions in this file

const graduate = ["Charlie", "Samip", "Ali"];

function writeCards (names, event) {
    const graduationGreeting = [];
    for (let i = 0; i < names.length; i++) {
       const graduationMessage = `Thank you, ${graduate[i]}, for the wonderful ${event} gift!`;
       graduationGreeting.push(graduationMessage);
    }
    return graduationGreeting;

}

console.log(writeCards(graduate,"birthday"));


function countDown (x) {
    while (x >= 0) {
        console.log(x);
        x -= 1;
    }

}
countDown(10);