const widthInput = document.getElementById('widthInput');
const heightInput = document.getElementById('heightInput');
const colorInput = document.getElementById('colorInput');

const headerContainer = document.getElementById('headerContainer');

const canvas = document.getElementById('boxCanvas');
var ctx = canvas.getContext("2d");

//define a function to reset the canvas
const resetCanvas = function resetCanvas() {
    let width = canvas.width;
    let height  = canvas.height;

    // Clears the whole canvas
    ctx.clearRect(0, 0, width, height);
};


//define a function to generate a new box on the canvas
const generateBox = function generateBox() {
    if (widthInput.value == null || widthInput.value <= 0 || widthInput.value == '' || heightInput.value == null || heightInput.value <= 0 || heightInput.value == '' || colorInput.value == null || colorInput.value <= 0 || colorInput.value == '') {
        let errorMessageElement = document.createElement('p');
        errorMessageElement.textContent = 'Error! Please input a valid width, height and color.'

        headerContainer.appendChild(errorMessageElement);
    } else {
        let color = colorInput.value;
        let width = widthInput.value;
        let height = heightInput.value;

        resetCanvas();

        ctx.beginPath();
        ctx.rect(20, 20, width, height);
        ctx.fillStyle = color;
        ctx.fill();
    }

    
    

};


//add event listeners
var inputs = document.querySelectorAll('input');
inputs.forEach(input => input.addEventListener('change', () => generateBox()));
