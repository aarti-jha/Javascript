//object literals
const sym=Symbol('key');
const user ={
    name:"kashish",
    age:19,
    Location:"Birgunj",
    isStudent:true,
    email:"kashish@gmail.com",
    hobbies:["dancing", "singing"],
    [sym]:"1234",
    "number":9807776
};

//console.log(user);
//console.log(user.Location);
//console.log(user["Location"]);
//console.log(user.number);
//console.log(user["number"]);

user.Location="Ithari"
//Object.freeze(user); // cant change anything inside object.
//user.Location="Ithari1"
//console.log(user["Location"]);

user.hello=function(){
    console.log(`hello it's me ${this.name} from  ${this.Location} `)
}

console.log(user.hello());