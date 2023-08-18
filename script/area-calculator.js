function calculateTriangleArea(){
    // get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueTextString = baseField.value;
    const base = parseFloat(baseValueTextString);

    // get triangle height value
    const heightField = document.getElementById('triangle-height');
    const heightValueString = heightField.value;
    const height = parseFloat(heightValueString);

    const area = 0.5 * base * height;

    // show triangle area
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
}

function calculateRectangleArea(){
    // get rectangle width
    const widthField = document.getElementById('rectangle-width');
    const widthValueString = widthField.value;
    const width = parseFloat(widthValueString);
    
    // get rectangle length
    const lengthField = document.getElementById('rectangle-length');
    const lengthValueString = lengthField.value;
    const length = parseFloat(lengthValueString);

    const area = width * length;

    // show rectangle area
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
}


// reusable function --> reduce duplicate code
function calculateParallelogramArea(){
    const base = getInputValue('Parallelogram-base');
    const height = getInputValue('Parallelogram-height');
    const area = base * height;
    setElementInnerText('Parallelogram-area', area);
}

function calculateEllipseArea(){
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');
     const area = 3.1416 * majorRadius * minorRadius;
     setElementInnerText('ellipse-area', area);
}

//reusable get input field in number 
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueString = inputField.value;
    const inputValue = parseFloat(inputValueString);
    return inputValue;
}

// reusable set span, p, div, etc text
function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}

