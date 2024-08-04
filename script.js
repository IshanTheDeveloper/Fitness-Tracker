const workout = document.querySelector("#input1");
const duration = document.querySelector("#input2");
const submit = document.querySelector("#button2");
let outputs = document.querySelector(".output");
const body1 = document.querySelector("body");
const container = document.querySelector(".container");
const innerOperation = () => {
  const span = document.createElement("span");
  const para1 = document.createElement("p");
  const para2 = document.createElement("p");
  para1.innerText = workout.value;
  para2.innerText = duration.value;
  span.setAttribute("class", "output-value");
  para1.setAttribute("id", "workout-name");
  para2.setAttribute("id", "timeTaken");
  span.appendChild(para1);
  span.appendChild(para2);
  outputs.appendChild(span);
};

submit.addEventListener("click", innerOperation);
