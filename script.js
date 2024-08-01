// // // zadacha-1
// const numbers = [1, 2, 3, 4, 5];

// const roost = numbers.map((num) => num ** 2);
// console.log(roost);

// zadacha-2

// const users = [
//   { firsName: "John", lastName: "obama", age: 34, gender: "male" },
//   { firsName: "Arina", lastName: "Grande", age: 22, gender: "female" },
//   { firsName: "Naruto", lastName: "Uzumaki", age: 19, gender: "male" },
//   { firsName: "Gristiano", lastNam: "Ronaldo", age: 38, gender: "male" },
// ];

// const array = users.map((item) => {
//   return {
//     fullname: item.firsName + " " + item.lastName,
//     age: item.age,
//     gender: item.gender,
//   };
// });
// console.log(array);
// zadacha-3

// const numbers1 = [1, 2, 3, 4, 5, 4, 8, 34, 3, 6];

// const result = numbers1.filter((item) => {
//   if (item % 2 !== 1) {
//     // console.log();
//     console.log(item);
//   }
// });

// // zadacha-4

// const array1 =[
//     {firstName:"John",lastName:"obama",age: 34, gender:"male"},
//     {firstName:"Ariana",lastName:"Grande",age: 18, gender:"female"},
//     {firstName:"Naruto",lastName:"Uzumaki",age: 19, gender:"male"},
//     {firstName:"Kakashi",lastName:"Hatake",age: 28, gender:"male"},
//     {firstName:"Sakura",lastName:"Chan",age: 18, gender:"female"},
// ];
// let users = array1.filter((item) => item.gender === "female")
// console.log(users);

// // zadacha-5

// const numbers2 = [1, 2, 3, 4, 5, 4, 8, 34, 3, 6];
// const res = numbers2.reduce((prevValue, initislValue) => {
//   return prevValue + initislValue;
// });
// console.log(res);

// zadacha-6

// let sam = 0;

// const numbers3 = [1, 2, 3, 4, 5, 4, 8, 34, 3, 6];

// numbers3.forEach((element) => {
//   if (element % 2 === 1) {
//     sam = element + sam;
//   }
// });
// console.log(sam);

// zadacha-7

// const users=[
//     {firstName:"John",latsName:"obama",age:34,gender:"male"},
//     {firstName:"Ariane",latsName:"Grande",age:18,gender:"male"},
//     {firstName:"Naruto",latsName:"Uzumaki",age:19,gender:"male"},
//     {firstName:"Kakashi",latsName:"Hatake",age:28,gender:"male"},
//     {firstName:"Sakura",latsName:"Chan",age:18,gender:"male"}
// ]
// const getfind=users.find((item)=>item.firstName === "Naruto");

// console.log(getfind);

// zadacha-8

// const numbers=[1,2,3,4,5,4,8,34,3,6];

// const num =numbers.findIndex((element)=>element ===34)
// console.log(num)