// //
// const BASE_URL = "https://64f657b812c0efcb.mokky.dev";

// const form = document.getElementById("form");
// const input = document.getElementById("input");
// const button = document.getElementById("button");
// const ul = document.getElementById("ul");

// button.addEventListener("click", (event) => {
//   event.preventDefault();
//   const todoValue = input.value.trim();
//   if (todoValue !== "") {
//     const newTodo = {
//       id: Date.now().toPrecision(),
//       title: todoValue,
//       completed: false,
//     };
//     console.log(newTodo);
//     postTodo(newTodo);
//     input.value = "";
//   } else {
//     alert("не верный имя");
//   }
// });

// const postTodo = async (obj) => {
//   try {
//     const responce = await fetch(`${BASE_URL}/items`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(obj),
//     });
//     getTodo();
//   } catch (error) {
//     console.log(error);
//   }
// };

// const getTodo = async () => {
//   try {
//     const responce = await fetch(`${BASE_URL}/items`);
//     const data = await responce.json();

//     renderTodo(data);
//   } catch (error) {
//     console.log(error);
//   }
// };
// getTodo();
// const renderTodo = (array) => {
//   console.log(array);

//   ul.innerHTML = "";
//   array.map((item) => {
//     const li = document.createElement("li");
//     li.className = "li";
//     // console.log(array);

//     const checkbox = document.createElement("input");
//     checkbox.type = "checkbox";
//     checkbox.checked = item.completed;
//     if (item.completed) {
//       checkbox.style.textDecoration = "line-through";
//     } else {
//       checkbox.style.textDecoration = "none";
//     }
//     const update = document.createElement("button");
//     update.textContent = "update";

//     update.addEventListener("click", () => {
//       updateTodo(item.id, array);
//     });
//     const delette = document.createElement("button");
//     delette.textContent = "Delete";
//     delette.addEventListener("click", () => {
//       deleteTodo(item.id);
//     });
//     const p = document.createElement("p");

//     p.textContent = item.title;
//     li.append(p, checkbox, delette, update);

//     ul.appendChild(li);
//   });
// };
// const deleteTodo = async (id) => {
//   try {
//     await fetch(`${BASE_URL}/items/${id}`, {
//       method: "DELETE",
//     });

//     getTodo();
//   } catch (error) {
//     console.log(error);
//   }
// };

// const updateTodo = async (id, newTodos) => {
//   const newFind = newTodos.find((item) => item.id === id);
//   input.value = newFind.value;
//   input.focus();
//   try {
//     await fetch(`${BASE_URL}/items/${id}`, {
//       method: "DELETE",
//     });


//     getTodo();
//   } catch (error) {
//     console.log(error);
//   }
// };

// const patchTodo=async (params) => {
//   try {
//     const responce =await fetch(`${BASE_URL}/items`{

//     })
//   } catch (error) {

//   }
// }

// const BASE_URL = "https://c0f46a644274bea9.mokky.dev/";

// const getPost = async () => {
//   try {
//     const responce = await fetch(`${BASE_URL}/studenst`);
//     const data = await responce.json();
//     console.log(data);
//     res(data);
//   } catch (error) {
//     console.error(error);
//   }
// };
// getPost();

// const res = (array) => {
//   array.slice(0,5).map((item) => {

//     const sesion = document.getElementById("section");

//     const div = document.createElement("div");
//     div.className = "divcls";
//     const img = document.createElement("img");
//     img.className = "img";
//     img.src = item.img;
//     const h1 = document.createElement("h1");
//     h1.className = "h1";
//     h1.textContent = item.name;

//     const button = document.createElement("button");
//     button.className = "button";
//     button.innerHTML = "snow more";
//     div.append(img, h1, button);
//     sesion.append(div);
//   });
// };

 const ul = document.getElementById("ul-list");
const input = document.getElementById("input");
const form = document.getElementById("form");

const BASE_URL = "https://50bcaa30f3d758cf.mokky.dev";

form.addEventListener("click", (e) => {
  e.preventDefault();
  const todoValue = input.value.trim();
  if (todoValue) {
    const newTodo = {
      id: Date.now().toString(),
      title: todoValue,
      completed: false,
    };
    input.value = "";
    postTodo(newTodo);
  }
});

// //! Request
const postTodo = async (objectTodo) => {
  try {
    await fetch(`${BASE_URL}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objectTodo),
    });

    getTodos();
  } catch (error) {
    console.log(error);
  }
};

//! Get Request
const getTodos = async () => {
  try {
    const response = await fetch(`${BASE_URL}/items`);
    const result = await response.json();
    if (response.status === 200) {
      renderTodos(result);
    }
  } catch (error) {
    console.log(error);
  }
};

//! Render
const renderTodos = (newTodos = []) => {
  ul.innerHTML = "";

  newTodos.map((item) => {
    const li = document.createElement("li");
    li.className="lishka"
    li.textContent = item.title;

    const input2 = document.createElement("input");
    input2.type = "checkbox";
    input2.checked = item.completed;


    const buttonUp = document.createElement("button");
    buttonUp.className = "buttonUp";
    buttonUp.textContent = "UPDATE";

    const buttonDe = document.createElement("button");
    buttonDe.className = "buttonDe";
    buttonDe.textContent = "DELETE";

    //! Event
    input2.addEventListener("click", () => {
      completedTodo(item.id, item.completed);
    });
    buttonDe.addEventListener("click", () => buttonDelete(item.id));
    buttonUp.addEventListener("click", () => {
      updateTodo(item.id, newTodos);
    });
    if (input2.checked) {
      li.style.textDecoration = "line-through";
      li.style.textDecorationColor = "red";
    } else {
      li.style.textDecoration = "none";
    }
    li.append(input2, buttonUp, buttonDe);
    ul.appendChild(li);
  });
};

//! Delete
const buttonDelete = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/items/${id}`, {
      method: "DELETE",
    });
    if (response.status === 200) {
      console.log("Request is succesfull");
    }
    getTodos();
  } catch {
    console.log(error);
  }
};

//! Update
const updateTodo = async (id, newTodos) => {
  const newFind = newTodos.find((item) => item.id === id);
  if (newFind !== undefined) {
    input.value = newFind.title;
    input.focus();
  }
  try {
    await fetch(`${BASE_URL}/items/${id}`, {
      method: "DELETE",
    });

    getTodos();
  } catch (error) {
    console.log(error);
  }
};
getTodos();

//! Completed
const completedTodo = async (id, completed) => {
  try {
    await fetch(`${BASE_URL}/items/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: !completed,
      }),
    });
    getTodos();
  } catch (error) {
    console.log(error);
  }
};