let color = document.getElementById("colorPicker");
let table = document.querySelector("#pixelCanvas");
let sizePicker = document.querySelector("#sizePicker");

let height = document.getElementById("inputHeight").value;
let width = document.getElementById("inputWeight").value;
makeGrid(height, width);

sizePicker.addEventListener("click", (e) => {

  e.preventDefault();

  let height = document.getElementById("inputHeight").value;
  let width = document.getElementById("inputWeight").value;
  table.firstElementChild.remove();

  makeGrid(height, width);

});

function makeGrid(height, width) {

  for (let i = 0; i < height; i++) {
    let row = table.insertRow(i);
    for (let j = 0; j < width; j++) {
      let cell = row.insertCell(j);
      cell.addEventListener("click", (e) => {
        cell.style.backgroundColor = color.value;
      })
    }
  }

}
