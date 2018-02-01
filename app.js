


'use strict';
alert('Hello There');
const name = prompt('What is your name?');
alert('Hi there ' + name);
console.log('name is ' + name);
console.log('name is: ' + name);

const likesIcecream = prompt('Do you like ice cream?');
alert (name + ' likes Ice cream ' + likesIcecream);
console.log('likes Ice cream: ' + likesIcecream);

const funny = prompt('Are you funny?');
if (funny === 'yes') {
    alert ('Wow!');
} else if (funny == 'no') {
    alert ('Sorry your not ');
}
console.log('funny: ' + funny);

const sunny = prompt('Is it sunny today? ');
if (sunny === 'yes') {
    alert ('We\'re so happy! ');
} else if (sunny == 'no') {
    alert ('Maybe tomorrow! ');
}
console.log('is sunny: ' + sunny);

for (let i = 0; i < 4; i++) {
    const guess = parseInt(prompt('Guess how many sunny days we had last week?'));
    // TODO give them 4 guesses, and if they guess correctly, don't ask again
    if (guess === 0) {
        alert('Where are those sunny days?');
    } else if (guess < 4) {
        alert('We had more than that.');
    } else if (guess > 4) {
        alert('Okay, not quite that many...');
    } else if (guess === 4) {
        alert('You got it!');
        break;
    }
}

for (let i = 0; i < 7; i++) {
    const guess = parseInt(prompt('How many weird faces can I make?'));
    // TODO give them 4 guesses, and if they guess correctly, don't ask again
    if (guess === 0) {
        alert('Seriously! Have you ever met me?');
    } else if (guess < 7) {
        alert('Guess again');
    } else if (guess > 7) {
        alert('Yep, you must have seen my You Tube Channel');
    } else if (guess === 7) {
        alert('Oh Ya, you got it');{
        toVisit.push('weird faces');
        }
        break;
    }
}


