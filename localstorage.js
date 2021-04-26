console.log("hello localstorage");
var sum = 0;
var numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);

function myFunction(item) {
  sum += item;
console.log(sum);
}


// let imparray=['adrak','pyaaz','bhindi'];
// var a=localStorage.setItem('myarray',JSON.stringify(imparray));
// localStorage.setItem('myname',"karan");
// var a=localStorage.getItem('myarray');
// console.log(a);
// let notesObj=['adrak','tamatar','pyaz'];
// console.log(notesObj);
// notesObj.push('aloo');
// console.log(notesObj);
//localStorage.setItem('names',JSON.stringify(notesObj));
//notesObj.push['aloo'];
//localStorage.setItem('names',JSON.stringify(notesObj));


// var  a=JSON.stringify(imparray);
// console.log(a);

//localStorage.setItem('myarray',imparray);
// set the key-pair value in local storage
//localStorage.setItem('name', 'Harry');
//localStorage.setItem('name2', 'Rohan');
//localStorage.setItem('sabzi',JSON.stringify(imparray));

// empty the local storage
//localStorage.clear();

//delete only single item
//localStorage.removeItem('name');

//retreive from local storage
//let name=localStorage.getItem('name2');
//name=JSON.parse(localStorage.getItem('sabzi'));
//console.log(name);
//imparray.push['lockey'];