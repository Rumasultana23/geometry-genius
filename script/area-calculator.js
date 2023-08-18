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

    addToCalculationEntry('Triangle', area);  
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

    // validate input: width and length
    if(isNaN(width) || isNaN(length)){
        alert('Please insert a number');
        return;
    }

    const area = width * length;

    // show rectangle area
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;

    addToCalculationEntry('Rectangle', area);  
}


// reusable function --> reduce duplicate code
function calculateParallelogramArea(){
    const base = getInputValue('Parallelogram-base');
    const height = getInputValue('Parallelogram-height');
    // validate
    if(isNaN(base) || isNaN(height)){
        alert('Please provide a valid number');
        return;
    }
    const area = base * height;
    setElementInnerText('Parallelogram-area', area);

    //add to calculation entry
    addToCalculationEntry('parallelogram', area);
}

function calculateEllipseArea(){
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');
     const area = 3.1416 * majorRadius * minorRadius;
     const areaToDecimal = area.toFixed(2);
     setElementInnerText('ellipse-area', areaToDecimal);

     addToCalculationEntry('Ellipse', areaToDecimal);  
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

// add to calculation entry
/* 
 1. get the element where you want to add the dynamic HTML
 2.create an element you want to add
 3. if needed add some class
 4.set inner HTML. it could be dynamic template string
 5. append the created element as a child of the parent. 
*/
function addToCalculationEntry(areaType, area){
    console.log(areaType + ' ' + area);
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;


    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML =`${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success">convert</button>`;

    calculationEntry.appendChild(p);
}





// data validation
/* 
1. set the proper type of the input field(number, data, email)
2.check type using typeof
3.NaN means: Not a Number. isNaN is checking whether the input is not a number or not
*/

