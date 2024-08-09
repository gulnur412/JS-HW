// //  zadacha-1
// const array = document.getElementById("main-heading");
// array.style.color = "blue";
// array.style.fontSize = "x-larger";
// array.style.fontFamily =
//   "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";
// array.style.fontWeight = "200";

// zadacha-2

// const array1 = document.getElementById("main-heading");
// array1.textContent = "Popular products";
// const nameAside = document.getElementsByTagName("aside");
// nameAside[0].remove();
// console.log(nameAside);

// // zadacha - 3;
// const nameClass = document.getElementsByClassName("section")[0];
// const nameClass1 = document.getElementsByClassName("heading");

// nameClass.firstElementChild.classList.remove("heading");
// console.log(nameClass);

// // zadacha-4
// const user = [
//   {
//     icon: "https://img.icons8.com/?size=80&id=112164&format=png",
//     title: "TELEGRAM",
//     description:
//       " Telegram Passport[48]. Этот сервис может хранить персональные данные — паспорта, загранпаспорта, квитанции, коммунальные счета, и другие документы.",
//     link: "https://web.telegram.org/a/",
//   },

//   {
//     icon: "https://static-00.iconduck.com/assets.00/google-icon-2048x2048-pks9lbdv.png",
//     title: "GOOGLE",
//     description:
//       "Sign in to your Google Account and learn how to set up security and other account notifications to create a personalized, secure experience.",
//     link: "https://www.google.co.uk/",
//   },

// ];

// const wrapperul = document.getElementById("wrapperul");
// user.map((element) => {
//   const liTeg = document.createElement("li");
//   liTeg.className = "li";
//   const aTeg = document.createElement("a");
//   aTeg.href = element.link;
//   const images = document.createElement("img");
//   images.src = element.icon;
//   images.className = "img";
//   images.textContent = element.title;
//   images.style.width = "200px";
//   images.style.height = "150px";

//   const h1 = document.createElement("h1");
//   h1.textContent = element.title;
//   h1.className = "title";
//   h1.style.fontSize = "30px";

//   const users = document.createElement("p");
//   users.textContent = element.description;
//   users.className = "description";

//   const button1 = document.createElement("button");
//   // button1.href = element.link;
//   button1.className = "button";
//   aTeg.textContent = "READ MARE";

//   // const parent = document.createElement("a");
//   // parent=element.link
//   aTeg.addEventListener("click", () => {
//     aTeg.href = element.link;
//   });

//   button1.append(aTeg);
//   liTeg.append(images, h1, users, button1);
//   wrapperul.append(liTeg);
// });
