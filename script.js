// zadacha-1
// const computers = [
//   { title: "Macbook Air M1", price: 85000 },
//   { title: "Dell", price: 65000 },
//   { title: "Asus ZenBook", price: 40000 },
//   { title: "Acer Aspire", price: 45000 },
//   { title: "Macbook Pro", price: 100000 },
// ];
// const result = [...computers].sort((a, b) => a.price -b.price );
// const result2 = [...computers].sort((a, b) => b.price -a.price );

// console.log(result);
// console.log(result2);

// // zadacha-2
// const grades = [4, 4, 4, 5, 3, 5, 3, 3, 2, 5, 1];

// const num = grades.sort((a, b) => a - b);
// const num1 = grades.sort((a, b) => b - a);
// console.log(num1);

// console.log(num);

// // zadacha-3
// const fruits = ["strawbery", "mango", "watermelon", "grapes", "lemon", "kiwi"];
// const user1 = fruits.sort().join();
// const user2 = fruits.sort().reverse().join();
// console.log(user1);
// console.log(user2);

// // // zadacha-4
// // const numbers=[4,123,-5,6,100];
// // console.log(Math.min(...numbers));
// // console.log(Math.max(...numbers));
// // zadacha-5
// const formatData = (Date) => {
//   let dd = Date.getDate();
//   if (dd < 10) dd = "0" + dd;

//   let mm = Date.getMonth() + 1;
//   if (mm < 10) mm = "0" + mm;

//   let yyyy = Date.getYear() % 100;
//   if (yyyy < 10) yyyy = "0" + yyyy;
//   return dd + "." + mm + "." + yyyy;
// };
// let a = new Date(2024, 3, 5);
// console.log(formatData(a));

// const formatData1 = (Date) => {
//   let dd = math.Minute();
//   if (dd < 10) dd = "0" + dd;

//   let mm = Math.Second()  

//   if (mm < 10) mm = "0" + mm

//   return dd + "." + mm ;
// };
// let b = new Date(11, 25);
// console.log(formatData(b));


// const date = new Date();
// const hours = date.getHours();
// const minute = date.getMinutes();
// const seconds = date.getSeconds();
// if (hours < 10) {
//   const time = "0" + hours + ":" + minute + ":" + seconds;
//   console.log(time);
// } else if (minute < 10) {
//   const time1 = hours + ":" + "0" + minute + ":" + seconds;
//   console.log(time1);
// } else if (seconds < 10) {
//   const time2 = hours + ":" + minute + ":" + "0" + seconds;
//   console.log(time2);
// } else if (hours < 10 && minute < 10) {
//   const time3 = "0" + hours + ":" + "0" + minute + ":" + seconds;
//   console.log(time3);
// } else if (hours < 10 && minute < 10 && seconds < 10) {
//   const time4 = "0" + hours + ":" + "0" + minute + ":" + "0" + seconds;
//   console.log(time4);
// } else {
//   const time5 = hours + ":" + minute + ":" + seconds;
//   console.log(time5);
// }
// // zadacha-6
// const instagramUser={
//   userName:"Uzumaki123",
//   email:"user@gmail.com",
//   password:"123123",
//   avatarUrl:"https//www.google.com/search?q=cat",
//   followers:'1m',
//   follwing:512,
//   title:'Never Give up',
// };
// for (let key in instagramUser){console.log(key);
// }
// for (let value in instagramUser){console.log(instagramUser[value])}

// // zadacha-7
// const computers1 = [
//   { title: "Macbook Air M1",
//      price: 85000 },
// { title: "Dell",
//      price: 65000 },
//   { title: "Asus ZenBook",
//      price: 40000 },
//   { title: "Acer Aspire",
//      price: 45000 },
//   { title: "Macbook Pro",
//      price: 100000 },
// ];
// let sam=0
// for(let value of computers1 ){

// sam=sam+=value.price;
// };
//   console.log(sam);

// // zadacha-8
// const instagramUser1 = {
//   userName: "Uzumaki123",
//   email: "user@gmail.com",
//   password: "123123",
//   avatarUrl: "https//www.google.com/search?q=cat",
//   followers: "1m",
//   follwing: 512,
//   title: "Never Give up",
// };

// const keys = Object.keys(instagramUser1);
// for (let i = 0; i < keys.length; i++) {
//   console.log(keys[i]);
// }
// const keys1 = Object.keys(instagramUser1);
// let user3 = 0;
// while (user3 < keys1.length) {
//   const key = instagramUser1[keys1[user3]];

//   console.log(key);
//   user3++;
// }
// for (let [keys, keys1] of Object.entries(instagramUser1)) {
//   console.log(`${keys}:${keys1}`);
// }
