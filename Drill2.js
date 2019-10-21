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


function decode(word) {

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