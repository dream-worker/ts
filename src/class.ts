class Student {
  // TODO:这里不加分号, 会有问题吗
  fullName: string
  constructor(public firstName: string, public middleName: string, public lastName: string) {
    this.fullName = firstName + '' + middleName + '' + lastName
  }
}
// 定义接口:参数格式
interface Person {
  firstName: string
  lastName: string
}
// 定义函数
function greeter(person: Person) {
  return 'hello,' + person.firstName + '' + person.lastName
}
// 定义参数 会报错
// let child = { 'firstname', 'lastname'},
// greeter(child)

// 调用类并赋值给类的实例
let baby = new Student('he', 'll', 'o')
// console.log()
// 类的实例, 作为参数, 传给函数
greeter(baby)