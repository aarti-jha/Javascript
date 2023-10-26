const arr = [21,22,23,24,25,26];
//console.log(arr);
//Array is resizable , and also mix of different datatype 
//while  doing array copy operation then array create shallow copy .
// shallow copy -> heap memory 
// deep copy -> stack memory 

//console.log(arr.length);
//arr.push(27);// add element in last 
//arr.push(28);
//arr.pop(); //remove element from last 
//arr.unshift(20);// add element in first
//arr.unshift(19);
//arr.shift(); // remove element from first
console.log(arr);

//console.log(arr.join()); // convert into string
//console.log(arr.includes(21)) // checks whether the element is in the array or not .
//console.log(arr.indexOf(21)) // return the position of that element 

const slice=arr.slice(1,3) // doesnot affect the original array and donot  include the last element
console.log(slice);
console.log("after slice original array : ",arr);
 
const splice=arr.splice(1,3); // affects the original aaray and  include the last element
console.log(splice);
console.log("after splice original array : ",arr);
