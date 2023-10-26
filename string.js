const sentence = 'The quick brown fox jumps over the lazy dog lazy. It barked.';
const icons = '☃★♲';
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

console.log(sentence.match(/[A-Z]/g))



