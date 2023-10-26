const arr1=["will" ,"am" , "shall"];
const arr2=["would" ,"is" , "was"];
const arr3=["should" ,"are" , "were"];

const concatarr = arr1.concat(arr2);
//console.log(concatarr);

const spreadarr = [...arr1 , ...arr2 , ...arr3];
//console.log(spreadarr);

const numarr=[1,2,3,4,5,[6,7,8,9],10,11,[12,13,14,[76,87,[76,56,98,53],45]]]
const numaar=numarr.flat(Infinity); // makes all subarray into one array
//console.log(numaar);

//console.log(Array.isArray(['can'] ));//true
//console.log(Array.isArray('can'));//false
//console.log(Array.isArray(arr1));//true

console.log(Array.from("could"));
console.log(Array.of(arr1,arr2,arr3));