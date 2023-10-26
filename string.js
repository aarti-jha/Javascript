const sentence = 'The quick brown fox jumps over the lazy dog lazy. It barked.';
const icons = '☃★♲';

const str=new String('hello');
console.log(str);
//console.log(str.toString());

console.log(str.valueOf())

//console.log(`${sentence.at(6)}`)//i  from first
//console.log(`${sentence.at(-6)}`)//y  from last

//console.log(`${sentence.charAt(6)}`)//i

// at supported negative numbers but charAt didnot support .


//console.log(`${sentence.charAt(6)} have character code ${sentence.charCodeAt(6)}`)
 // i , 105
// console.log(`${icons.charCodeAt(1)}`) //9733
 //console.log(`${icons.codePointAt(1)}`) //9733
 //console.log(`${sentence.codePointAt(6)}`) //105

 //Both methods return an integer representing the UTF-16 code of a character, but 
 //only codePointAt() can return the full value of a Unicode value greather 0xFFFF (65535).

//console.log(sentence.concat(icons))
 //The quick brown fox jumps over the lazy dog.☃★♲
 
 
//console.log(String.fromCharCode(101 , 102 , 103 ));//efg

//console.log(String.fromCodePoint(9731, 9733, 9842));//☃★♲

//console.log(`The word "lazy" ${sentence.includes('lazy') ? 'is' : 'is not'} in the sentence`);
 
//console.log(`index of lazy is ${sentence.indexOf('lazy')}`) // from begining
//console.log(`index of lazy is ${sentence.lastIndexOf('lazy')}`) // from last

//console.log(sentence.match(/[A-Z]/g))

//console.log(sentence.length);

//console.log(`repeat the word \n ${sentence.repeat(3)}`);

//console.log(`${sentence.replace('lazy','diligent')}`)
//console.log(`${sentence.replaceAll('lazy','diligent')}`)

//console.log(`${sentence.search('lazy')}`);

//console.log(sentence.slice(35))
//console.log(sentence.slice(35,39))
//console.log(sentence.slice(35,-20))


//console.log(sentence.split(' ')); //words into array
//console.log(sentence.split('')); // letters into array
//console.log(sentence.split()); // sentence into array

//console.log(sentence.startsWith('The'));//true
//console.log(sentence.startsWith('The' , 0));//true
//console.log(sentence.startsWith('The',3));//false

//console.log(sentence.substring(35,39));
//console.log(sentence.toLowerCase());
//console.log(sentence.toUpperCase());


const str1 ="  hello   ";
//console.log(str1);
//console.log(str1.trim());
//console.log(str1.trimStart());
//console.log(str1.trimEnd());
