const colors = ["#FF5733", "#FFC300", "#33FF57", "#33A2FF", "#A733FF", "#FF33A2", "#33FFA7", "#A7FF33", "#FF3380", "#808080"];
const shapes = ["triangle", "square", "circle", "rectangle", "diamond"];
const shapeElement = document.getElementById("shape");

document.getElementById("changeColorBtn").addEventListener("click", changeColor);
document.getElementById("changeShapeBtn").addEventListener("click", changeShape);

function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

function getRandomShape() {
    const randomIndex = Math.floor(Math.random() * shapes.length);
    return shapes[randomIndex];
}

function changeColor() {
    const randomColor = getRandomColor();
    shapeElement.style.backgroundColor = randomColor;
}

function changeShape() {
const randomShape = getRandomShape();

shapeElement.style.transform = "rotate(" + (Math.random() * 360) + "deg)";
shapeElement.style.backgroundColor = getRandomColor();

switch (randomShape) {
case "triangle":
    shapeElement.style.width = "0";
    shapeElement.style.height = "0";
    shapeElement.style.borderLeft = "100px solid transparent";
    shapeElement.style.borderRight = "100px solid transparent";
    shapeElement.style.borderBottom = "173.2px solid #333";
    break;
case "square":
    shapeElement.style.width = "200px";
    shapeElement.style.height = "200px";
    shapeElement.style.borderRadius = "0";
    break;
case "circle":
    shapeElement.style.width = "200px";
    shapeElement.style.height = "200px";
    shapeElement.style.borderRadius = "50%";
    break;
case "rectangle":
    shapeElement.style.width = "250px";
    shapeElement.style.height = "150px";
    shapeElement.style.borderRadius = "0";
    break;
case "diamond":
    shapeElement.style.width = "0";
    shapeElement.style.height = "0";
    shapeElement.style.borderLeft = "100px solid transparent";
    shapeElement.style.borderRight = "100px solid transparent";
    shapeElement.style.borderBottom = "173.2px solid #333";
    shapeElement.style.transform = "rotate(45deg)";
    break;
}

shapeElement.classList = ["shape", randomShape];
}

// Initial setup
changeColor();
changeShape();