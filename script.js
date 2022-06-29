document.querySelector("form").addEventListener("submit", () => {
  const task = document.querySelector("#todo").value;
  const NewTask = document.createElement("div");
  NewTask.setAttribute("class", "todo");
  // NewTask.setAttribute("onclick", "Completed()");
  const CheckDiv = document.createElement("div");
  CheckDiv.setAttribute("class", "check");
  const CheckIcon = document.createElement("img");
  CheckIcon.setAttribute("src", "./images/icon-check.svg");
  CheckDiv.append(CheckIcon);
  const AddedTask = document.createElement("p");
  AddedTask.innerHTML = task;
  const CancelIcon = document.createElement("img");
  CancelIcon.setAttribute("src", "./images/icon-cross.svg");
  CancelIcon.setAttribute("onclick", "RemoveTasks()");
  CancelIcon.setAttribute("class", "Cancel");

  NewTask.append(CheckDiv);
  NewTask.append(AddedTask);
  NewTask.append(CancelIcon);
  document.querySelector(".tasks").prepend(NewTask);

  document.querySelector("#todo").value = "";
});

// function Completed() {
//   remove();
// }

document.addEventListener("click", (event) => {
  const element = event.target;
  if (element.classList.contains("todo")) {
    element.classList.toggle("completed");
  }
});

function Completed() {
  document.querySelectorAll(".todo").forEach((div) => {
    div.style.display = "none";

    if (div.classList.contains("completed")) {
      div.style.display = "flex";
    }
  });
  document.querySelectorAll("span").forEach((span) => {
    span.style.color = "hsl(234, 11%, 52%)";
    span.addEventListener("click", () => {
      span.style.color = "hsl(220, 98%, 61%)";
    });
  });
}

function Active() {
  document.querySelectorAll(".todo").forEach((div) => {
    div.style.display = "none";

    if (!div.classList.contains("completed")) {
      div.style.display = "flex";
  
    }
  });
  document.querySelectorAll("span").forEach((span) => {
    span.style.color = "hsl(234, 11%, 52%)";
    span.addEventListener("click", () => {
      span.style.color = "hsl(220, 98%, 61%)";
    });
  });
}

function clearAll() {
  document.querySelectorAll(".todo").forEach((div) => {
    if (div.classList.contains("completed")) {
      div.remove();
    }
  });
  document.querySelectorAll("span").forEach((span) => {
    span.style.color = "hsl(234, 11%, 52%)";
    span.addEventListener("click", () => {
      span.style.color = "hsl(220, 98%, 61%)";
    });
  });
}

function showAll() {
  document.querySelectorAll(".todo").forEach((div) => {
    div.style.display = "flex";
  });
  document.querySelectorAll("span").forEach((span) => {
    span.style.color = "hsl(234, 11%, 52%)";
    span.addEventListener("click", () => {
      span.style.color = "hsl(220, 98%, 61%)";
    });
  });
}

function RemoveTasks() {
  document.addEventListener("click", (event) => {
    const element = event.target;
    if (element === document.querySelector("img.Cancel"))
      element.parentElement.remove();
  });
}

const DarkLight = document.querySelector(".toggle");
const Body = document.querySelector("body");
const Tasks = document.querySelector(".tasks");

const Input = document.querySelector(".todoform");
const Footer = document.querySelector(".task-footer");
const TextArea = document.querySelector("input");
// const CheckArea = document.querySelectorAll(".check");

DarkLight.addEventListener("click", () => {
  const ToDo = document.querySelectorAll(".todo");

  DarkLight.src = "./images/icon-moon.svg";
  Body.classList.toggle("light");

  ToDo.forEach((div) => {
    div.classList.toggle("light");
  });
  Tasks.classList.toggle("light");
  Input.classList.toggle("light");
  TextArea.classList.toggle("light");
  Footer.classList.toggle("light");
  // CheckArea.forEach(div => {
  //   div.classList.toggle("light")
  // })
});

// } else {
//   console.log("IT is not")
// }
// })

// document.addEventListener("DOMContentLoaded", ()=> {
//   document.querySelectorAll(".todo").forEach(div => {
//     const AllToArray = (!div.classList.contains("completed"))
//   });
//  console.log(AllToArray.length)
// })
