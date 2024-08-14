const form = document.getElementById("form");
const ul = document.getElementById("ul");
const input = document.getElementById("user_input");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let userArray = [];

  userArray = JSON.parse(localStorage.getItem("data")) || [];

  if (!input.value.trim()) {
    alert("Please fill in the input.");
  } else {
    const userObject = {
      name: input.value,
      done: false,
      id: Date.now().toString(),
    };
    userArray.push(userObject);

    form.reset();
    renderData(userArray);
  }
});

// renderData(JSON.parse(localStorage.getItem("data")), []);

function renderData(data) {
  ul.innerHTML = "";
  data.forEach((v) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = v.name;

    const button = document.createElement("button");
    button.textContent = "Delete";
    button.addEventListener("click", () => {
      const res = data.filter((f) => f.id !== v.id);
      localStorage.setItem("data", JSON.stringify(res));
      renderData(res);
    });
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.checked = v.done;
    checkbox.addEventListener("change", () => {
      v.done = checkbox.checked;
      localStorage.setItem("data", JSON.stringify(data));
      span.classList.toggle("line")
    });

    li.append(span, checkbox, button);
    ul.appendChild(li);
  });
}

// const h3=document.createElement("h3")
// h3.textContent="container1"
// h3.className='list'

// console.log(h3);
