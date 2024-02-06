let a = 12;



const func = () => {
  console.log("hello");
};


// for (let i = 0; i < arr.length; i++) {

//     for (let j = 0; j < arr[i].length; j++) {
//         // console.log(arr[i][j]);

//         for (let k = 0; k < arr[i][j].length; k++) {
//         //   console.log(arr[i][j][k]);
//         }
//     }
// }

// console.log(arr[2]);
// arr[2][0] = "true";
// arr[2][1] = "false";
// arr[2][3] = "flase";
// console.log(arr[2]);




const obj = {
  name: "a",
  children: [
    {
      name: "a1",
      children: [
        {name: "a11"}, { name: "a12" }, { name: "a13",  children: [{ name: "a131" }]},
      ],
    },
    {
      name: "a2",
      children: [ 
        {  name: "a21", }, {  name: "a22", }, { name: "a23", },
      ],
    },
  ],
};


class Test {

    constructor() {

    }

    method1() {
        console.log("class mthod 1");
       this.#method2();
    }

    #method2() {

        console.log("class mthod 2");
    }
}

const test = new Test();
test.method1();
// test.method2();



const TestObj = {
    method1: () => {
        console.log("obj mthod 1");
    },
    method2: () => {
        console.log("obj mthod 2");
    }
}

TestObj.method1();
// const arr = ["11", 2, [31, 32,"33", 34, 35]]

// const recursion = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);

//         if(typeof(arr[i]) == "string") {

//             const arr2 = arr[i].split("");
//             for (let j = 0; j < arr2.length; j++) {
//                 recursion(parseInt(arr2[j]));
//             }
//         } else if(arr[i].length) {
//             recursion(arr[i]);
//         }
//     }
// }
// recursion(arr);

