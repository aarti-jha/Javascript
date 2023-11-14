const arr=[1,2,3,4,5];
//for of
//The for...of statement creates a loop Iterating 
//over iterable objects (including Array, Map, Set, arguments object and so on), 
let sum=0;
for (const num of arr) {
   sum =sum+num
  //  console.log(num);
}
//console.log("sum : " +sum);

const myobj ={
    A:"Apple",
    B:"Banana",
    c:"cherry"
}
//for in
//The for...in 
//statement iterates a specified variable over all the enumerable properties of an object.
for (const key in myobj) {
    //console.log(key, ":", myobj[key]);
}

const map = new Map()
map.set("A","Australia")
map.set("B","Brazil")
map.set("C","China")
map.set("D","Denmark")

for (const [key,value] of map) {
    //console.log(key ,":", value);
}
for (const Both of map) {
    //console.log(Both);
}



const name =["ajit" , "ajita" , "anamika" , "atisha"]

//name.forEach( function(names) {
  //  console.log(names)
//});

//name.forEach((element) => {
  //  console.log(element);
//});

//name.forEach((element , index , arr)=>{
  //  console.log(element , index, arr);
//})

const language=[
    {
        languageName:"javascript",
        languageFilename:"js"
    },
    {
        languageName:"java",
        languageFilename:"java"
    },
    {
        languageName:"python",
        languageFilename:"py"
    }
]

//language.forEach((obj)=> {
  //  console.log(obj.languageFilename);
//})

// {} => use return keyword
