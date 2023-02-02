/* 
document.querySelector is a method in JavaScript 
that allows you to select a single element from the Document Object Model (DOM) 
based on its CSS selector. 
It returns the first element that matches the selector,
or null if no matching elements are found.

Here #inputField indicates to fetch data from the match of id name from html file.
*/
const inputField = document.querySelector('#inputField'); 
const addButton = document.querySelector('#addButton');
const table = document.querySelector('#table');

/*
addEventListener is a method in JavaScript that allows you to attach an event handler function to an element. 
When the specified event occurs on the element, the event handler function will be executed.

An event handler function is a function in JavaScript that is executed when a specific event occurs on an element. 
The event handler function is attached to the element using the addEventListener method.
*/

addButton.addEventListener('click', function () {
    const value1 = inputField.value; // from line 10
    const value2 = 5; // static value
    const row = document.createElement('tr');

    const cell1 = document.createElement('td');
    cell1.textContent = value1;
    row.appendChild(cell1);

    const cell2 = document.createElement('td');
    cell2.textContent = value2;
    row.appendChild(cell2);

    const cell3 = document.createElement('td');
    cell3.textContent = value1 * value2;
    row.appendChild(cell3);

    table.appendChild(row);
});