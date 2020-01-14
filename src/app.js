/* Example Code
      The following is just some example code for you to play around with.
      No need to keep this---it's just some code so you don't feel too lonely.
*/

// How can we use require here if it's frontend? We can thank webpack.
const HeapSort = require("./Sort");

// A link to our styles!
require("./index.css");

const i0 = document.getElementById("0");
const i1 = document.getElementById("1");
const i2 = document.getElementById("2");
const i3 = document.getElementById("3");
const i4 = document.getElementById("4");
const i5 = document.getElementById("5");
const i6 = document.getElementById("6");
const start = document.getElementById("start");

const sort = new HeapSort([3, 5, 2, 1, 6, 7, 8]);
sort.sort();
const steps = sort.returnValue();
console.log(steps);
let index = 0;

i0.style.width = steps[0][0] * 100;
i1.style.width = steps[0][1] * 100;
i2.style.width = steps[0][2] * 100;
i3.style.width = steps[0][3] * 100;
i4.style.width = steps[0][4] * 100;
i5.style.width = steps[0][5] * 100;
i6.style.width = steps[0][6] * 100;

start.addEventListener("click", () => {
  setInterval(() => {
    if (index < steps.length) {
      i0.style.width = steps[index][0] * 100;
      i1.style.width = steps[index][1] * 100;
      i2.style.width = steps[index][2] * 100;
      i3.style.width = steps[index][3] * 100;
      i4.style.width = steps[index][4] * 100;
      i5.style.width = steps[index][5] * 100;
      i6.style.width = steps[index][6] * 100;
      index++;
    }
  }, 50);
});

// function createCheesyTitle(slogan) {
//   const container = document.createElement("h1");
//   const textNode = document.createTextNode(slogan);
//   container.appendChild(textNode);
//   return container;
// }

// const title = createCheesyTitle(sort.returnValue("Re-Engineer Yourself"));
// document.getElementById("title").appendChild(title);

/*
    An simple example of how you can make your project a bit more
    interactive, if you would like.

    In our `index.html` page, we have a short form.
    Here is the code that talks to it.
  */
// functionchangeTitle(event) {
//   event.preventDefault();
//   // console.log('What is an event?', event);
// }

// const form = document.querySelector("form");
// document.addEventListener("DOMContentLoaded", () => {
//   form.onsubmit = changeTitle;
// });
