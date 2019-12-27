var Student = /** @class */ (function () {
    function Student(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = firstName + '' + middleName + '' + lastName;
    }
    return Student;
}());
// 定义函数
function greeter(person) {
    return 'hello,' + person.firstName + '' + person.lastName;
}
// 定义参数 会报错
// let child = { 'firstname', 'lastname'},
// greeter(child)
// 调用类并赋值给类的实例
var baby = new Student('he', 'll', 'o');
// console.log()
// 类的实例, 作为参数, 传给函数
greeter(baby);
