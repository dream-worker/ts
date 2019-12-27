interface Person {
  firstName: string,
  lastName: string
}

// interface 就是参数数据类型的demo
function gr(person: Person) {
  return 'hello,' + person.firstName + '' + person.lastName
}
// 真正的参数, 参照demo来定义即可

let student = { firstName: 'aa', lastName: 'bb' }
console.log(gr(student))