function getYearOfBirth(age) {
    if(age < 0)
        throw new Error('Age cannot be negative');
    return 2019-age;
}
console.log(getYearOfBirth(-1));
try {
    const greeting1 = createGreeting();
} catch (error) {
console.log(`${error.age}: Age is negative`);
}

function createGreeting(name, age) {
    return 'Hi my name is ' + name + 'and I am ' + age + ' years old.';
}
const greeting1 = createGreeting('Kevin', 30);
console.log(greeting1);