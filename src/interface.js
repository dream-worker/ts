function greeter(person) {
    return 'hello,' + person.firstName + '' + person.lastName;
}
var student = { firstName: 'aa', lastName: 'bb' };
console.log(greeter(student));
