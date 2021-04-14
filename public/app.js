const creationForm = document.querySelector('#CreationForm');
const lista = document.querySelector('#lista');
const table = document.querySelector('#reference')
const valorInput_1 = document.querySelector('#valor_edition_1');
const valorInput_2 = document.querySelector('#valor_edition_2');
const valorInput_3 = document.querySelector('#valor_edition_3');
const valorInput_4 = document.querySelector('#valor_edition_4');
const modal = document.querySelector('#edit');
let btnAc = document.querySelector('#actualizar');
let newData = [];
const newArray = {
    id: '',
    valor_1: '',
    valor_2: '',
    valor_3: '',
    valor_4: ''
};
let editando;


cargarEvent();



function cargarEvent() {

    document.addEventListener('DOMContentLoaded', addRowInMainTable);

    creationForm.addEventListener('submit', (e) => onSubmitCreationForm(e));

    reference.addEventListener('click', deleteRow);
   
}




  
function onSubmitCreationForm (e){

    e.preventDefault();

    const inputs = creationForm.querySelectorAll('input[type=number]');

    const newArray = {
        id: '',
        valor_1: '',
        valor_2: '',
        valor_3: '',
        valor_4: ''
    };

    newArray.id = generateIdForNewArray();

    inputs.forEach((input, index) => newArray[`valor_${index + 1}`] = input.value);

    addArray(newArray);

    addRowInMainTable(newArray);

    newData = [...newData, newArray];

    console.log(newData);

    creationForm.reset();
 

}


function addArray (newArray){

    const arrays = getArrays();

    arrays.push(newArray);

    localStorage.setItem('arrays', JSON.stringify(arrays));
    

}


function getArrays (generateIdForNewArradata){


    return localStorage.getItem ('arrays') ? JSON.parse (localStorage.getItem('arrays')) : [];

}

 function generateIdForNewArray()
 {
     return getArrays().length + 1; 
 }

 function addRowInMainTable(data)
 {

    cleanHTML();
    
    newData.forEach( newArray => {

        const {id, valor_1, valor_2, valor_3, valor_4} = newArray;
        const row = document.createElement("tr");

        row.innerHTML = `
            <td class="align-top">
                ${id}
            </td>

            <td class="align-top">
                ${valor_1}
            </td>

            <td class="align-top">
                ${valor_2}
            </td>

            <td class="align-top">
                ${valor_3}
            </td>

            <td class="align-top">
                ${valor_4}
            </td>

            <span id="edition" class="align-top">
                <a type="button" class="borrar w-30 btn btn-danger btn-sm"  data-id="${id}">Eliminar</a>
                <a type="button" class="editar w-30 btn btn-success btn-sm" data-id="${id}">Editar</a>
            </span>
        `;
        table.appendChild(row);
    
     
    });
    
 }

 function cleanHTML(){

    table.innerHTML = '';
 }

 function deleteRow (e) {

    
    if(e.target.classList.contains('borrar')) {

      const arrayId = e.target.getAttribute('data-id');
 
      console.log(e.target.getAttribute('data-id'));
 
      newData = newData.filter(newArray => newArray.id != arrayId);
 
      console.log(newData);
 
      addRowInMainTable();    
 
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

 table.addEventListener('click', (e) =>{


    if( e.target.classList.contains('editar') ) {

        const id = e.target.getAttribute('data-id');

        let allArray = localStorage.getItem("arrays");

        allArray = JSON.parse(allArray);

        console.log(allArray);

        const arrayEdit = allArray.find(arrays => arrays.id == id);

        console.log(arrayEdit);
      
        modalEdition(arrayEdit);
        
    }


});

    

function modalEdition(newArray){

    

    const myModal = new bootstrap.Modal(document.getElementById("edit"));

    const {id, valor_1, valor_2, valor_3, valor_4} = newArray;

        valorInput_1.value = valor_1;
        valorInput_2.value = valor_2;
        valorInput_3.value = valor_3;
        valorInput_4.value = valor_4;

        newData.valor_1 = valor_1;
        newData.valor_2 = valor_2;
        newData.valor_3 = valor_3;
        newData.valor_4 = valor_4;

       
        myModal.show();

    
}
 


}