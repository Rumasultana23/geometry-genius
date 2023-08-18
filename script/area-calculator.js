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