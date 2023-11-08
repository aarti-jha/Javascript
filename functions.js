function add(num1 ,num2){
    if(typeof num1==='number' && typeof num2==='number'){
    return num1+num2;
    }
    
    return `please enter the number`;
    
}
//console.log(add(2,3))

function loggedinmessage(name){
    if(!name)
    {
        return `please enter the name`
    }
    return `${name} is logged in `
}

//console.log(loggedinmessage("aarati"))


function calculatemaxnum(value1,value2,...num){
    console.log(value1,value2, num);
}

//calculatemaxnum(500,980,870,876);


const user ={
    username:"kashish",
    email:"kashish@gmail.com"

}

function handlingobj(obj){
    return `${obj.username}'s have email ${obj.email}`
}

//console.log(handlingobj(user));

console.log(handlingobj({
    username:"aarati",
    email:"aarati@gmail.com"
}));

const newArray=['a','b','c']

function handlingarray(array){
    return array
}

//console.log(handlingarray(newArray));
//console.log(handlingarray([400,987,654,657]));
fun(2,3);
function fun(a,b){
    console.log(a+b);
}

const fun1=function(a,b)
{
    console.log(a+b);
}
fun1(2,3);


const objjj={
    name:"aarati",
    email:"aarati@gmail.com",
    fun3:function(){
        console.log(objjj.name ,objjj.email);
    }
}
objjj.name="aara"
objjj.fun3();