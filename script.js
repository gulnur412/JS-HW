// const getposts = async () => {
//   const respons = await fetch("https://jsonplaceholder.typicode.com/users");
//   console.log(respons);

//   const data = await respons.json();

//   const photosArray = [
// "https://basket-01.wbbasket.ru/vol120/part12097/12097454/images/big/1.jpg",
// "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zC1waVps-UICKQRSYA2vgRuY82b3XJdCnSi0YwRaWYQ8KwLYU3jEpnac4dvIeBBTcyg&usqp=CAU",
// "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxGHKt5xHwms-_irWHFcPv2B3n0C37Z2Apgo0cL_PMGycBkKqbAgsGtldp2AUaLifUK3Y&usqp=CAU"
//   ];

//   const currentData = data.slice(0, 3).map((element, i) => {
//     return {
//       ...element,
//       thumbnailUrl: photosArray[i],
//     };
//   });

//   const ul = document.getElementById("ul");
//   currentData.map((v) => {
//     const li = document.createElement("li");
//     li.className = "licll";
//     const p = document.createElement("p");
//     p.className = "ptt";
//     p.textContent = "...";
//     const image = document.createElement("img");
//     image.className = "imagecll";
//     image.src = v.thumbnailUrl;
//     const h2 = document.createElement("h2");
//     h2.className = "h2cll";
//     h2.textContent = v.title;
  
//     li.append(image, h2, p);
//     ul.appendChild(li);
//   });
//   console.log(data[0]);
// };
// setTimeout(() => {
//   getposts();
// }, 8000);


// ! задча - 2

// const post = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   console.log(res);

//   const datas = await res.json();
//   const urlkartina = [
// "https://shorturl.at/rWIYR",
// "https://shorturl.at/CQ8JQ",
// "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwms4cmpBVES26VGdsKPNjoE4vxgtGahRrjw&s",
// "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTclA5jz6MGp2Vh5KmFzStkoJYtdAUFDPqRFQ&s"
//   ];

//   const curst = datas.slice(0, 4).map((element, i) => {
//     return {
//       ...element,
//       thum: urlkartina[i],
//     };
//   });
//   const ulclass = document.getElementById("ulclass");
//   curst.map((v) => {
//     const liclass = document.createElement("li");
//     liclass.className = "liclass";
//     const pteg = document.createElement("p");
//     pteg.className = "pteg";
//     pteg.textContent = "...";
//     const imgclass = document.createElement("img");
//     imgclass.className = "imgclass";
//     imgclass.src = v.thum;
//     const h2class = document.createElement("h2");
//     h2class.className = "h2class";
//     h2class.textContent = v.name;
//     const h3class = document.createElement("h3");
//     h3class.textContent = v.company["name"];
//     const pteg2 = document.createElement("p");
//     pteg2.className = "pteg2";
//     pteg2.textContent = v.phone;
//     const h22 = document.createElement("h2");
//     h22.className = "h2class2";
//     h22.textContent = v.email;
//     liclass.append(imgclass, h2class, h3class, pteg2, h22, pteg);
//     ulclass.appendChild(liclass);
//   });
//   console.log(datas[0]);
// };
// setTimeout(() => {
//   post();
// }, 1000);