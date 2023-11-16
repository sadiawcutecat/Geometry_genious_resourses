function getTextElementById(elementId) {
    const inputBoxTotalElement = document.getElementById(elementId);
    const currentInputBoxTotalString = inputBoxTotalElement.value;
    const currentInputBoxTotal = parseFloat(currentInputBoxTotalString);
    return currentInputBoxTotal;

};

document.getElementById('triangle-btn').addEventListener('click', function () {
    const inputFirst = getTextElementById('triangle-first');
    const inputSecond = getTextElementById('triangle-second');
    const result = 0.5 * inputFirst * inputSecond;
    document.getElementById("traingle-result").innerHTML = 'Triangle ' + result.toFixed(2);
});


 document.getElementById('rectangle-btn').addEventListener('click', function(){
    const inputFirst = getTextElementById('rectangle-first');
    const inputSecond = getTextElementById('rectangle-second');
    const result = inputFirst * inputSecond;
    document.getElementById("rectangle-result").innerHTML = result.toFixed(2);
});
document.getElementById('parallelogram-btn').addEventListener('click',function(){
    const inputFirst = getTextElementById('parallelogram-first');
    const inputSecond = getTextElementById('parallelogram-second');
    const result = inputFirst * inputSecond;
    document.getElementById("parallelogram-result").innerHTML = result.toFixed(2);
});

document.getElementById('rhombus-btn').addEventListener('click',function(){
   
    const inputFirst = getTextElementById('rhombus-first');
    const inputSecond = getTextElementById('rhombus-second');
    const result = 0.5 * inputFirst * inputSecond;
    document.getElementById("rhombus-result").innerHTML = result.toFixed(2);
});
document.getElementById('pentagon-btn').addEventListener('click',function(){
    
    const inputFirst = getTextElementById('pentagon-first');
    const inputSecond = getTextElementById('pentagon-second');
    const result = 0.5 * inputFirst * inputSecond;
    document.getElementById("pentagon-result").innerHTML = result.toFixed(2);
});
document.getElementById('ellipse-btn').addEventListener('click',function(){
    
    const inputFirst = getTextElementById('ellipse-first');
    const inputSecond = getTextElementById('ellipse-second');
    const result = 3.14 * inputFirst * inputSecond;
    document.getElementById("ellipse-result").innerHTML = result.toFixed(2);
});

// document.getElementById("blog-content").addEventListener('click', function(){
//     window.location.href='blog.html';
// })