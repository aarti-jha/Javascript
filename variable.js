let name="Aarati Jha "
let number=87
let iSodd=false
let nulls=null
let undefineds 
console.table([name,number,iSodd,nulls,undefineds])
console.table([typeof(name),typeof(number),typeof(iSodd),typeof(nulls),typeof(undefineds) ])

//datatype 
//number => 2 to power 53
//BIGINT 
//string=> ""
//boolean => false / true 
// null => empty 
//undefined 
// symbol =>unique
// object 
   


/*Return type of variables in JavaScript
 Primitive Datatypes
 Number => number
String  => string
Boolean  => boolean
null  => object
undefined  =>  undefined
Symbol  =>  symbol
BigInt  =>  bigint

Non-primitive Datatypes
Arrays  =>  object
Function  =>  function
Object  =>  object  

*/

let code = Symbol('43')
let code1 =Symbol('43');
console.log(code === code1);

//JavaScript is a dynamically typed language. 
//This means that variable types are determined at runtime,
// and you do not need to explicitly declare the type of a variable before using it.
// You can assign different types of values to a variable during its lifetime.
//JavaScript's dynamic typing allows for
// more flexibility but can lead to potential runtime errors if not handled carefully