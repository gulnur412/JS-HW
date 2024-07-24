// 1-Function - Declaration

// // zadacha-1
// function addNamder(x, y) {
//   for (let i = x; i < y; i++) console.log(i);
// }
//  addNamder( 0,100);

// // // zadacha-2
// function addNamder1(x, y) {
//   for (let i = x; i <= y; i++){
//      if(i%2===0 ){
//         console.log(i);
//      }
//   }
// }
// addNamder1(0, 100)

// zadacha-3

// function addNamder2(x, y) {
//   let res = 0;
//   for (let str = x; x< y; x++) {
//     if (str % 2 === 0) {
//       res = res + str;
//     }
//   }
//   return res;
// }
// const result = addNamder2(4, 50);
// console.log(result);

// zadacha-4
// function addNamder3(Bill, Gates) {
//     for( let nam = Bill.length - 1;nam >= 0;nam--){
//         let add = Bill.charAt(nam);
//         if(add===Gates) {
//             console.log(true);
//         }
//         else{
//             console.log(false);

//         }
//     }

// }
// addNamder3("gulnur", "u");

// zadacha-5
// function addNamder4(top) {
//     let string = ''
//   for (let count = top.length; count >= 0;count--) {
//     string=string+top
//      console.log(top[count]);
//   }
// }
// addNamder4("hello");

// //
// 2 Function -Arrow

// zadacha-1
//   const top1 =   (x, y)=> {

//   for (let i = x; i < y; i++) console.log(i);
// }
//   top1( 0,100);

// // zadacha-2
// const getadd= (x, y) =>{
//   for (let i = x; i <= y; i++){
//      if(i%2===0 ){
//         console.log(i);
//      }
//   }
// }
// getadd(0, 100)

// // zadacha-3

// const wor=(x, y)=> {
//   let res = 0;
//   for (let str = x; x< y; x++) {
//     if (str % 2 === 0) {
//       res = res + str;
//     }
//   }
//   return res;
// }
// const result = wor(4, 50);
// console.log(result);

// zadacha-4
// const namber=(Bill, Gates)=> {
//     for( let nam = Bill.length - 1;nam >= 0;nam--){
//         let add = Bill.charAt(nam);
//         if(add===Gates) {
//             console.log(true);
//         }
//         else{
//             console.log(false);

//         }
//     }

// }
// namber("gulnur", "u");

// zadacha-5
// const false1=(top)=> {
//     let string = ''
//   for (let count = top.length; count >= 0;count--) {
//     string=string+top
//      console.log(top[count]);
//   }
// }
// false1("hello");

// // 3 Function - Expression
// zadacha-1

// const top1 = function  (x, y) {

//     for (let i = x; i < y; i++) console.log(i);
//   }
//     top1( 0,100);

// // zadacha-2
  
// const getadd= function (x, y) {
//   for (let i = x; i <= y; i++){
//      if(i%2===0 ){
//         console.log(i);
//      }
//   }
// }
// getadd(0, 100)

// // zadacha-3

// const wor= function(x, y) {
//   let res = 0;
//   for (let str = x; x< y; x++) {
//     if (str % 2 === 0) {
//       res = res + str;
//     }
//   }
//   return res;
// }
// const result = wor(4, 50);
// console.log(result);

// zadacha-4
// const namber= function(Bill, Gates) {
//     for( let nam = Bill.length - 1;nam >= 0;nam--){
//         let add = Bill.charAt(nam);
//         if(add===Gates) {
//             console.log(true);
//         }
//         else{
//             console.log(false);

//         }
//     }

// }
// namber("gulnur", "u");

// zadacha-5
// const false1= function(top) {
//     let string = ''
//   for (let count = top.length; count >= 0;count--) {
//     string=string+top
//      console.log(top[count]);
//   }
// }
// false1("hello");

