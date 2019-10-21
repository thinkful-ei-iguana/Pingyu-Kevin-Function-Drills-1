function getYearOfBirth(age) {
    return 2019-age;
}
console.log(getYearOfBirth(30));

function createGreeting(name, age) {
    let yearOfBirth = 2019-age;
    return 'I was born in ' + yearOfBirth + '.';
}
const greeting1 = createGreeting('Kevin', 30);
console.log(greeting1);