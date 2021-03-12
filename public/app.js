const creationForm = document.querySelector('#CreationForm');

creationForm.addEventListener('submit', event => onSubmitCreationForm(event));

function onSubmitCreationForm (){

    event.preventDefault();

    const inputs = creationForm.querySelectorAll('input[type=number]');

    const newArray = {};

    newArray.id = generateIdForNewArray();

    inputs.forEach((input, index) => newArray[`valor_${index + 1}`] = input.value);

    addArray(newArray);

    addRowInMainTable(newArray);

}


function addArray (newArray){

    const arrays = getArrays();

    arrays.push(newArray);

    localStorage.setItem('arrays', JSON.stringify(arrays));
    

}


function getArrays (){


    return localStorage.getItem ('arrays') ? JSON.parse (localStorage.getItem('arrays')) : [];

}

 function generateIdForNewArray()
 {
     return getArrays().length + 1; 
 }

 function addRowInMainTable(data)
 {

     var row = document.createElement('row');
     var body = document.getElementById('list').getElementsByTagName('tbody') [0];
     var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.valor1;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.valor2;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.valor3;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.valor4;


 }

 function findArray(id)
 {
    return getArrays().find(arrayObject => arrayObject.id === id);
 }

 function deleteArray(id)
 {
    let arrays = getArrays();

    arrays = arrays.filter(arrayObject => arrayObject.id !== id);
    
    localStorage.setItem('arrays', JSON.stringify(arrays));
 }






















