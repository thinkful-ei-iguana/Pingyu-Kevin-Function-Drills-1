function jediName(firstName, lastName) {
    const first = lastName.slice(0, 3);
    const last = firstName.slice(0, 2);
    return first + last;
}
console.log(jediName('Beyonce', 'Knowles'));