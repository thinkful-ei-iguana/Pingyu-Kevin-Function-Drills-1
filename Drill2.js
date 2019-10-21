'use strict';

/*function jediName(firstName, lastName) {
    const first = lastName.slice(0, 3);
    const last = firstName.slice(0, 2);
    return first + last;
}
console.log(jediName('Beyonce', 'Knowles')); 
*/





/* function beyond(num) {
    if (num === Infinity) {
        return 'And beyond';
    } else if (isFinite(num) && num > 0) {
        return 'To infinity';
    } else if (isFinite(num) && num < 0) {
        return 'To negative infinity';
    } else {
        return 'staying home';
    }
}

console.log(beyond(2));
*/


/* function decode(word) {

    switch (word[0]) {
        case 'a':
            console.log(word[1]);
            break;
        case 'b':
            console.log(word[2]);
            break;
        case 'c':
            console.log(word[3]);
            break;
        case 'd':
            console.log(word[4]);
            break;
        default:
            console.log(' ');
    }
}

const result = `${decode('craft')}${decode('block')}${decode('argon')}${decode('meter')}${decode('bells')}${decode('brown')}${decode('croon')}${decode('droop')}`;

console.log(result);
*/
/*
function month(str) {
    let result = '';
    switch (str) {
        case 'January':
        case 'March':
        case 'May':
        case 'July':
        case 'August':
        case 'October':
        case 'December':
            result = 'has 31 days.';
            break;
        case 'April':
        case 'June':
        case 'September':
        case 'November':
            result = 'has 30 days.';
            break;
        default:
            console.log('Must provide a valid month.');
    }

    return str + ' ' + result;
}

month('');

*/

function game(num) {
    const randomNo = Math.floor(Math.random() * 3) + 1;

    if (randomNo === 3 && num === 2) {
        return 'Rock beats scissor';
    } else if (randomNo === 2 && num === 1) {
        return 'Scissor beats paper';
    } else if (randomNo === 1 && num === 3) {
        return 'paper beats rock';
    } else {
        return 'Its a draw';
    }
}

game(2);