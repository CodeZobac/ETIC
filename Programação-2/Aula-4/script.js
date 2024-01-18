import Car from "./Car.js";
import Motorcycle from "./Motorcycle.js";

// let a = 1;
// let b = 0;

// const fibonnaci = () => {
//   for (let i = 0; i < 10; i++) {
//     const temp = a;
//     a += b;
//     b = temp;
//     console.log(a);
//   }
// };

// fibonnaci();

// let user = {
//   id: 0,
//   name: "Afonso",
//   age: 22,
//   gender: "male",
//   dob: "20/09/2001",
//   hobbies: ["gym", "read", "programming", "cooking"],
// };

// console.table(user);

// for (const key in user) {
//   if (Object.hasOwnProperty.call(user, key)) {
//     const element = user[key];
//     console.log(key);
//     console.log(element);
//   }
// }

// let originalObject = {
//   key1: "value1",
//   key2: "value2",
//   key3: "value3",
// };

// const entriesArray = Object.entries(originalObject)

// console.log(entriesArray)

// const transformedArray = entriesArray.map([key, value]) => {
//     return{
//         originalKey: key,
//         originalValue: value,
//         transformedValue: value.toUpperCase(),
//     }
// }

// let user = {
//   id: 0,
//   name: "Afonso",
//   age: 22,
//   gender: "male",
//   dob: "20/09/2001",
//   hobbies: ["gym", "read", "programming", "cooking"],
// };

// class User {
//   #name;
//   age;

//   constructor(user) {
//     this.#name = user.name;
//     this.age = user.age;
//     console.log("Class user initiated");
//   }

//   getName() {
//     console.log("Return user name");
//     return this.name;
//   }
//   getAge() {
//     console.log("Return user age");
//     return this.age;
//   }
//   set name(value) {
//     this.#name = value;
//   }
//   get name() {
//     return this.#name;
//   }
// }

// const userr = new User(user);

// console.log(userr.name);
// console.log(userr.getAge());

const car = new Car();
const motorcycle = new Motorcycle();
