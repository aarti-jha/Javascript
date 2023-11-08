//let add =(num1 , num2)=>{
//console.log(num1+num2);
//}

//add(2,3)

//implicit return 
//let add = (num1 , num2) => num1+num2
//let add = (num1 , num2) => (num1+num2)
let add = (num1 , num2) => ({username:"aarati"})

console.log(add(2,3));
//IIFE -> Immediately Invoked function expressions
(function life(){ console.log(2+3)})();
(()=>{ console.log(2+3)})();