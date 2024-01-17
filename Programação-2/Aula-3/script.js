// const addNumbers = (a, b) => {
//   return a + b;
// };

// console.log(addNumbers(24, 2000));

// let a = "Cenas";
// if (a == "Cenas") {
//   console.log("É cenas");
// } else {
//   console.log("Não é cenas");
// }

// a == "10" ? console.log(true) : console.log(false);

// switch (a) {
//   case 10:
//     console.log(true);
//     break;
//   case "10":
//     console.log(false);
//     break;
//   case "20":
//     console.log(false);
//     break;
//   default: {
//     console.log(false);
//   }
// }

// let a = 10;
// let b = 100;

// if (a === "10" || b == "100") {
//   console.log(true);
// }

// while (a <= 20) {
//   console.log(a);
//   a++;
// }

// let arr = ["praia", "campo", "cidade", "floresta", "montanha", 10];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// arr.forEach((element, i) => {
//   console.log(element);
//   console.log(i);
// });

const req = await fetch("api.com");
const res = await req.json();

let obj = {
  name: "afonso",
  age: 22,
  gender: "male",
};

for (const key in obj) {
  // if (Object.hasOwnProperty.call(object, key)) {
  //     const element = object[key];

  // }
  console.log(key);
  console.log(obj[key]);
}
