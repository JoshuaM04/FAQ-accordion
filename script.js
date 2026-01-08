/* 
function updateSymbol() {
    if (elSymbol.id == 'plus-sign') {
        elSymbol.src = "assets/images/icon-minus.svg";
        elSymbol.id = 'minus-sign';
    }
    else {
        elSymbol.src = "assets/images/icon-plus.svg";
        elSymbol.id = 'plus-sign';
    }
}

var elSymbol = document.querySelector('img.drop-down');
elSymbol.addEventListener('click', updateSymbol, false); 
*/

function updateSymbol(numVal) {
    if (buttons[numVal].className == 'plus-sign') {
        buttons[numVal].className = 'minus-sign';
        buttons[numVal].parentElement.nextElementSibling.className = 'drop-open';
    }
    else {
        buttons[numVal].className = 'plus-sign';
        buttons[numVal].parentElement.nextElementSibling.className = 'drop-closed';
    }
}

var buttons = document.querySelectorAll('button.plus-sign');

buttons[0].addEventListener('click', function() {
    updateSymbol(0);
}, false);
buttons[1].addEventListener('click', function() {
    updateSymbol(1);
}, false);
buttons[2].addEventListener('click', function() {
    updateSymbol(2);
}, false);
buttons[3].addEventListener('click', function() {
    updateSymbol(3);
}, false);

console.log(buttons);

