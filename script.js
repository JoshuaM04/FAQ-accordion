function updateSymbol() {
    if (elSymbol.id == 'plus-symbol') {
        elSymbol.src = "assets/images/icon-minus.svg";
        elSymbol.id = 'minus-symbol';
    }
    else {
        elSymbol.src = "assets/images/icon-plus.svg";
        elSymbol.id = 'plus-symbol';
    }
}

var elSymbol = document.querySelector('img.drop-down');
elSymbol.addEventListener('click', updateSymbol, false);