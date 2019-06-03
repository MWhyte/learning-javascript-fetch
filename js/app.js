

const url='https://jsonplaceholder.typicode.com/users';

function fetchData(){
    console.log('inside button click');
    console.log('calling fetch');

    fetch(url)
        .then(json)
        .then(function(responseList) {
            console.log('response', responseList);
            renderTable(responseList);

        })
        .catch(function(exception) {

            console.log('failure', exception);
        });
}

function json(response) {
    return response.json()
}

function renderTable(array) {

    var myTableDiv = document.getElementById("myTable");
    clearTable(myTableDiv);

    var table = document.createElement('TABLE');
    table.border = '1px solid black';
    table.style.width  = '100px';

    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);

    for (var i = 0; i < array.length; i++) {
        var tr = document.createElement('TR');
        tableBody.appendChild(tr);

        var row = array[i];
        createTableCell(tr, row['name']);
        createTableCell(tr, row['username']);
        createTableCell(tr, row['email']);

    }
    myTableDiv.appendChild(table);
}

function createTableCell(tr, cellText) {
    var td = tr.insertCell();
    td.appendChild(document.createTextNode(cellText));
}

function clearTable(myTableDiv) {
    while (myTableDiv.firstChild) {
        myTableDiv.removeChild(myTableDiv.firstChild);
    }
}