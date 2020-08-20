/*const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

function getRow(firstRow, secondRow) {

    let arrayFirstRow = firstRow.replace(/([^,](?!,|$))/g,'$1,');

    arrayFirstRow.split();

    let arraySecondRow = secondRow.split();

    for (let i of arrayFirstRow) {

        if(i == 'a') {

            let newArrayFR = [];

            newArrayFR.push(i);
        }

        console.log(newArrayFR);

    }

    

}

//console.log(getRow(firstRow, secondRow)); // мама мыла раму

getRow(firstRow, secondRow);*/

const firstRow = 'mama mila ramu';
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