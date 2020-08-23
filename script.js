/*const firstRow = 'mama mila ramu';
const secondRow = 'sobaka drug cheloveka';

function getRow(firstRow, secondRow) {

    let arrayFirstRow = [];

    let arraySecondRow = [];

    for (let char of firstRow) {

        if (char == 'a') {

            arrayFirstRow.push(char);

        }

    }

    for (let charOne of secondRow) {

        if (charOne == 'a') {

            arraySecondRow.push(charOne);

        }

    }

    if (arrayFirstRow.length > arraySecondRow.length) {
            return firstRow;

    }
    else {
        return secondRow;
    }


}

//getRow(firstRow, secondRow);
console.log(getRow(firstRow, secondRow)); // мама мыла раму 
*/

const $btn = document.getElementById('btn-kick');

let character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
}

let enemy = {
    name: 'Charmender',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
}

$btn.addEventListener('click', function () {
    console.log('Kick!');
    
    attackHP (randomDamage(20), character);
    attackHP (randomDamage(20), enemy);
});

function init () {
    console.log('Start Game!');
    renderHP(character);
    renderHP(enemy);
}

function renderHP (person) {
    changerHP(person);
    changerProgressbarHP(person);
    
}

function changerHP (person) {
    
    person.elHP.innerText = person.damageHP + '/' + person.defaultHP;
}

function attackHP (count, person) {
    if(person.damageHP < count) {
        person.damageHP = 0;
        alert(person.name + "lost this fight");
        $btn.disabled = true;
    } else {
        person.damageHP -= count;
    }

    renderHP(person);
}

function changerProgressbarHP (person) {
    person.elProgressbar.style.width = person.damageHP + '%';
}

function randomDamage (num) {
    return Math.ceil(Math.random() * num)
}

init();