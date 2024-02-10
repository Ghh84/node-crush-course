// Module Wrapper Function
// (function (exports, require, module, __filename, __dirname) {

// })

// console.log(__dirname, __filename);
class Person{
    constructor(name,age,city){
        this.name=name;
        this.age=age;
        this.city=city;
    }
    greeting(){
        console.log(`My name is ${this.name} and I am ${this.age}. Currently I am living in ${this.city}`)
    }
}
module.exports = Person;