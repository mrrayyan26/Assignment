//Q1

// function addNum(num) {
//   return function(x) {
//     return x + num;
//   };
// }
// const addFive = addNum(5);
// console.log(addFive(3)); // Output: 8
// console.log(addFive(10)); // Output: 15

//Q2

// function searchArray(arr, val) {
//     if (arr.length === 0) {
//       return false;
//     }
//     if (arr[0] === val) {
//       return true;
//     }
//     return searchArray(arr.slice(1), val);
//   }
// console.log(searchArray([1,3,11,16,22],3));  // true

//Q3

// function addParagraph(text) {
//   const newParagraph = document.createElement("p");
//   newParagraph.textContent = text;
//   document.body.appendChild(newParagraph);
// }

// addParagraph('This is first paragraph');


//Q4

// function addListItem(text) {
//     const newListItem = document.createElement("li");
//     newListItem.textContent = text;
//     const unorderedList = document.querySelector("ul");
//     unorderedList.appendChild(newListItem);
//   }
// addListItem('beverage');

//Q5

// function changeBackgroundColor(element, color) {
//   element.style.backgroundColor = color;
// }
// var myPara = document.getElementById("para");
// changeBackgroundColor(myPara, "red");

//Q6

// function saveToLocalStorage(key, obj) {
//   const serializedObj = JSON.stringify(obj);
//   localStorage.setItem(key, serializedObj);
// }
// var myObj = { name: "John", age: 30, gender: "Male"};
// saveToLocalStorage("myKey", myObj);

//Q7

// function getFromLocalStorage(key) {
//   const serializedObj = localStorage.getItem(key);
//   return JSON.parse(serializedObj);
// }
// console.log(getFromLocalStorage("myKey"));

//Q8

// function saveObjectToLocalStorage(obj) {
//   for (const prop in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, prop)) {
//       localStorage.setItem(prop, JSON.stringify(obj[prop]));
//     }
//   }
//   const newObj = {};
//   for (let i = 0; i < localStorage.length; i++) {
//     const key = localStorage.key(i);
//     newObj[key] = JSON.parse(localStorage.getItem(key));
//   }
//   return newObj;
// }
// var myObj = { name: "John", age: 30, gender: "Male"};
// saveObjectToLocalStorage(myObj);
