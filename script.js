// // zadacha-1

// const student1 = {
//   name: "gulnur",
//   lang: "KG",
//   age: 19,
//   sayHello: () => {},
// };
// student1.sayHello();
// const student2 = Object.assign ({}, student1);
// delete student2.age;

// console.log(student2);

// console.log(student1, "student1");
// console.log(student2, "student2");

// // // zadacha-2

//                                                  GLOBAL EXECUTION CONTEXT

//                                    Ал жерде код болот                жана              Global  помить

//                                                          Алар экиге болунот
//                                         Stack-Ctek                              Heap-kucha
//    Примитивный озуно бир гана тип данныйды сактай алат жана .         НЕ пиримитивный озуно бир канча тип данныйды сактай алат
//Алар Stack-Ctekте сакталат.                                                       жана алар Heap-kuchaда сакталат.

//                      name1:12                                                  {name:'12',}
// //                      name2:12                                               {name :'12',}
//                       Object:link
//                     Object2:link
// let name1 = 12;

// let name2 = 12;

// console.log(name1 ===  name2);

// const Object={
//     name :"12",

// };
// const Object2 ={
//     name:"12",
// }

// console.log(Object===Object2);
// zadacha-3

// const array = [true, 5, "hobbies", "hello"];
// console.log([0][1], array);
// array.pop();
// console.log(array);
// array.unshift("Ибадат", "Алфия");
// array.push(20, 25);
// array.shift();
// array.slice(0, 3,"footboll");

// // zadacha-4

// const users = [
//   1,
//   2,
//   3,
//   "sdf",
//   4,
//   "sdf",
//   { name: "dsadf" },
//   3,
//   true,
//   2,
//   [1, 6, 3],
//   1,
// ];

// const getlengs = (firsArray) => {
//   let sum = 0;
//   for (const iterator of firsArray) {
//     if (iterator && typeof iterator === "object") {
//       for (let i = 0; i < iterator.length; i++) {
//         sum = sum + iterator[i];
//       }
//     }
//     if (iterator && typeof iterator === "number") {
//       sum = sum + iterator;
//     }
//   }
//   console.log(sum);
//   return sum;
// };



// let name1 = getlengs(users);

