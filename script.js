const count = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
let diceRoller = document.getElementById('diceRoller');

function rollOfDice () {
    return Math.floor( Math.random() * 6 + 1 );
}

function oJogo () {
    let result = [];
    let dadoOne = 0;
    let dadoTwo = 0;

    for (let i = 0; i <= 1000; i++) {
        dadoOne = rollOfDice();
        dadoTwo = rollOfDice();
        result.push(dadoOne + dadoTwo);
    }

    for (let i = 0; i < result.length; i++) {

        if (result[i] === 2) {
            count[0]++;
        }
        if (result[i] === 3) {
            count[1]++;
        }
        if (result[i] === 4) {
            count[2]++;
        }
        if (result[i] === 5) {
            count[3]++;
        }
        if (result[i] === 6) {
            count[4]++;
        }
        if (result[i] === 7) {
            count[5]++;
        }
        if (result[i] === 8) {
            count[6]++;
        }
        if (result[i] === 9) {
            count[7]++;
        }
        if (result[i] === 10) {
            count[8]++;
        }
        if (result[i] === 11) {
            count[9]++;
        }
        if (result[i] === 12) {
            count[10]++;
        }
    }
    return count;
}
// console.log(oJogo());
function barraDiv () {
    let seguraEssaBarra = oJogo();

    for (let i = 0; i < seguraEssaBarra.length; i++) {
        // console.log(seguraEssaBarra);
        let createDiv = document.createElement('div');
        createDiv.className = 'createDiv';
        createDiv.style.width = seguraEssaBarra[i] * 1 + "px";

        let createText = document.createElement('p');
        createDiv.appendChild(createText);

        let barra = document.createElement('div');
        barra.className = 'barra';

        let largura = seguraEssaBarra[i].value;
        barra.innerText = seguraEssaBarra[i];
        barra.style.width = ` ${largura}px `;
        createDiv.appendChild(barra);
        diceRoller.appendChild(createDiv);
    }
}
// console.log(barraDiv());
barraDiv();