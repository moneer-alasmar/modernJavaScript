// REPLACE ELEMENT

// CREATE ELEMENT
const newHeading = document.createElement('h2');
// ADD ID
newHeading.id = 'task-title';
// CRETE NEW TEXT NODE
newHeading.appendChild(document.createTextNode('Task List'));

// GET THE OLD HEADING
const oldHeading = document.getElementById('task-title');
// PARENT
const cardAction = document.querySelector('.card-action');

// REPLACE
cardAction.replaceChild(newHeading, oldHeading);

// REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
lis[0].remove();

// Remove Child element
list.removeChild(lis[3]);

// CLASSES AND ATTRIBUTES
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

// Classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;

// Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
val = link.hasAttribute('href');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title');

console.log(val);