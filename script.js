const BASE_URL = "https://c0f46a644274bea9.mokky.dev/";

const getPost = async () => {
  try {
    const responce = await fetch(`${BASE_URL}/studenst`);
    const data = await responce.json();
    console.log(data);
    res(data);
  } catch (error) {
    console.error(error);
  }
};
getPost();



const res = (array) => {
  array.slice(0,5).map((item) => {

    const sesion = document.getElementById("section");

    const div = document.createElement("div");
    div.className = "divcls";
    const img = document.createElement("img");
    img.className = "img";
    img.src = item.img;
    const h1 = document.createElement("h1");
    h1.className = "h1";
    h1.textContent = item.name;

    const button = document.createElement("button");
    button.className = "button";
    button.innerHTML = "snow more";
    div.append(img, h1, button);
    sesion.append(div);
  });
};

