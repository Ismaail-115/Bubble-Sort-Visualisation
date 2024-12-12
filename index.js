let numArray = [];
for (let i = 0; i < 40; i++) numArray.push(i);

function shuffle(array) {
  let tmp,
    current,
    top = array.length;
  if (top)
    while (--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }
  return array;
}

numArray = shuffle(numArray);

function updateVisualisation() {
  const container = document.getElementById("container");

  container.innerHTML = "";

  for (let i = 0; i < numArray.length; i++) {
    let bar = document.createElement("div");

    bar.classList.add("bar");

    bar.style.height = numArray[i] * 5 + "px";

    let number = document.createElement("div");

    number.classList.add("number");

    number.innerText = numArray[i];

    bar.appendChild(number);

    container.appendChild(bar);
  }
}

function bubbleSort() {
  let n = numArray.length;

  let swapped;

  function sortStep() {
    swapped = false;

    for (let i = 0; i < n - 1; i++) {
      if (numArray[i] > numArray[i + 1]) {
        let temp = numArray[i];

        numArray[i] = numArray[i + 1];

        numArray[i + 1] = temp;

        swapped = true;
      }
    }

    updateVisualisation();

    n--;

    if (swapped) {
      setTimeout(sortStep, 500);
    }
  } //immediately invoke the sortStep function to start the sorting
  sortStep();
}

updateVisualisation();

bubbleSort();
