let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// GET CHILD NODES
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype


// GET CHILDREN ELEMENT NODES
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello';

// CHILDREN OF CHILDREN
list.children[3].children[0].id = 'test-link';
val = list.children[3].children;

// FIRST CHILD(NODE, ELEMENT)
val = list.firstChild;
val = list.firstElementChild;

// LAST CHILD(NODE, ELEMENT)
val = list.lastChild;
val = list.lastElementChild;

// COUNT CHILD ELEMENTS
val = list.childElementCount;

// GET PARENT NODE
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// GET NEXT SIBLING
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextSibling;

// GET PREVIOUS SIBLING
val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val);