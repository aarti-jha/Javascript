//singleton object 
const users = new Object();
users.fullname={
    firstname:"kashish",
    lastname:"kappor"
}
users.email="kashish@gmail.com"
users.number=987653
//console.log(users);

//console.log(users.fullname.firstname);

const obj1 ={a:1,b:2};
const obj2={c:3,d:4};
const obj3={e:5,f:6};

//const result=Object.assign(obj1,obj2,obj3);
const result ={...obj1,...obj2,...obj3}
//console.log(result);
//console.log(Object.keys(result));
//console.log(Object.values(result));
//console.log(Object.entries(result));

const arrayobj=[
    {
        id:12,
        name:"sita",
        email:"sita@gmail.com"
    },
    {
        id:13,
        name:"ram",
        email:"ram@gmail.com"
    },
]
//console.log(arrayobj[0]["id"])
//console.log(users.hasOwnProperty('fullname'))
const {fullname :name}=users
console.log(name)


//json

//{
    //"key":"value"
//}

//[
  //  {},
    //{},
    //{}
//]

