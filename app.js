


'use strict';

alert('What is this?');

const name = prompt('What is your name?');

function ask1() {
    alert('Hi there ' + name);
    console.log('name is ' + name);
    console.log('name is: ' + name);
}
ask1();

const likesBeer = prompt('Do you like Beer?');

if (likesBeer === 'yes') {
        alert ('Me Tooo!');  
    }  else if (likesBeer ==='no') {
        alert ('Good, more for Me');
console.log('likes Beer ' + likesBeer);
}


const funny = prompt('Do you think you are funny?');
function ask3() {
if (funny === 'yes') {
    alert ('Get real!');
} else if (funny === 'no') {
    alert ('At least you are honest ');
}
console.log('funny: ' + funny);
}
ask3();

const sunny = prompt('Is it sunny today? ');
function ask4() {
if (sunny === 'yes') {
    alert ('Are we really in Oregon still! ');
} else if (sunny === 'no') {
    alert ('Maybe tomorrow! ');
}
console.log('is sunny: ' + sunny);
}
ask4();

function ask5() {
for (let i = 0; i < 4; i++) {
    const question5 = parseInt(prompt('Guess how many sunny days we had last week?'));
    // TODO give them 4 guesses, and if they guess correctly, don't ask again
    if (question5 === 0) {
        alert('Where are those sunny days?');
    } else if (question5 < 4) {
        alert('We had more than that.');
    } else if (question5 > 4) {
        alert('Okay, not quite that many...');
    } else if (question5 === 4) {
        alert('You got it!');
        break;
    }
}
}
ask5();

function ask6() {
    for (let i = 0; i < 7; i++) {
    const guess = parseInt(prompt('How many sarcastic comments can I make in 2 minutes?'));
    // TODO give them 4 guesses, and if they guess correctly, don't ask again
        if (guess === 0) {
        alert('Seriously! Have you ever met me?');
    } else if (guess < 7) {
        alert('Guess again');
    } else if (guess > 7) {
        alert('Yep, you must have seen my You Tube Channel');
    } else if (guess === 7) {
        alert('Oh Ya, you got it');
        toVisit.push('sarcastic comments');
    }
        break;
    }
}
ask6();