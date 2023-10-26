let date = new Date();
//console.log(date);//2023-10-26T08:02:31.898Z
//console.log(date.toISOString());//2023-10-26T08:02:31.898Z
//console.log(date.toString());//Thu Oct 26 2023 13:47:31 GMT+0545 (Nepal Time)
//console.log(date.toJSON());//2023-10-26T08:02:31.898Z
//console.log(date.toDateString());//Thu Oct 26 2023
//console.log(date.toLocaleString());//10/26/2023, 1:47:31 PM
//console.log(date.toLocaleDateString());//10/26/2023
//console.log(date.toTimeString());//13:47:31 GMT+0545 (Nepal Time)
//console.log(date.toLocaleTimeString());//1:47:31 PM
//console.log(date.toUTCString());//Thu, 26 Oct 2023 08:05:40 GMT

const date1 = new Date(2023,0,24,5,34,59) // yy mm dd hh min sec
//console.log(date1.toLocaleString());

const date2 = new Date("01-14-2023")
//console.log(date2.toLocaleString());
//console.log(date2.getTime())
//console.log(date2.getFullYear());

const date3 = Date.now()
//console.log(date3)

console.log(date.toLocaleString())
console.log(date.getTime());
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
