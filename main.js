// ARRAY VISUALIZER

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let myArray = [400, 200, 200, 400, 200, 200, 200, 400, 200, 200, 200, 200, 400];

// Main Program Loop
requestAnimationFrame(draw);

function draw() {
  // Logic
  let barWidth = cnv.width / myArray.length;

  // Drawing
  ctx.clearRect(0, 0, cnv.width, cnv.height);

  // Draw Bar Graph
  ctx.fillStyle = "#80FFDB";
  ctx.strokeStyle = "#190037";
  for (let i = 0; i < myArray.length; i++) {
    ctx.fillRect(i * barWidth, cnv.height - myArray[i], barWidth, myArray[i]);
    ctx.strokeRect(i * barWidth, cnv.height - myArray[i], barWidth, myArray[i]);
  }

  // Request another Animation Frame
  requestAnimationFrame(draw);
}

// Key Events
document.addEventListener("keydown", keydownHandler);
function keydownHandler(event) {


  if (event.code == "KeyT") {
    let newArray = [];
    for (let i = 0; i < myArray.length; i++) {
      if (myArray[i] != 200) {
        newArray.push(myArray[i]);
      }
    }
    myArray = newArray;
  }

  else if (event.code == "KeyY") {
    let newArray = [];
    for (let i = 0; i < myArray.length; i++) {
      if (myArray[i] != 400) {
        newArray.push(myArray[i]);
      }
    }
    myArray = newArray;
  }
  
  else if (event.code == "KeyU") {
    for (let i = 0; i < 50; i++) {
      myArray.push(200);
      myArray.push(400);
    }
    shuffleArray(myArray);
  }
}
