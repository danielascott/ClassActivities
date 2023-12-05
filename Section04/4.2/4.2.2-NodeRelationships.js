// select the root node
const root = document.querySelector("body");
console.log(root);

// select the last child of the root node
const lastChild = root.lastElementChild;
console.log(lastChild);

// or this way
root.lastElementChild;

// select all the children of the body element
const allChildren = root.children;
console.log(allChildren);

// select the next sibling of the h2 node
const nextSibling = document.querySelector("h2").nextSibling
console.log(nextSibling);

// select the parent element of the h1 node
const parentElement = document.querySelector("h1").parentElement
console.log(parentElement);