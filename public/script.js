const enterButton = document.getElementById('enter');
const input = document.getElementById('inputText');
const tableSection = document.getElementById('table-section');
const table = document.getElementById('table');
const tbody = document.getElementById('body-table');
const message = document.getElementById('message');

enterButton.addEventListener('click', (event) => {
  //Implementar lógica del button submit

  searchedHeight = getresults(input.value);
  
  event.preventDefault();
});

/**
 * Llamado al backend con queryParam
 * @param {*} heightRef
 */
async function getresults(heightRef) {
  const resp = await fetch(`api?input=${heightRef}`);
  const data = await resp.json();

  if( data.hasOwnProperty('message')){
    alert(data.message);
  }
  else{
    createTable(data);
  }
}

function createTable(data){
  const table = tbody;

  data.forEach(value => {
    const row = document.createElement('tr');

    row.innerHTML = 
    fila.innerHTML = `
    <td>${value[0]}</td>
    <td>${value[1]}</td>
    `;

    table.appendChild(row);
  });
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
