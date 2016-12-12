const caesarShift = function(str, amount) {

let shiftedtext = "";
for(let i = 0; i < str.length; i++) {
	
let plaincode = str.charCodeAt(i);

if(plaincode >= 97 && plaincode <= 122) {
	
shiftedtext += String.fromCharCode((plaincode - 97 + amount) % 26 + 97);

} 
if(plaincode >= 65 && plaincode <= 90) {
shiftedtext += String.fromCharCode((plaincode - 65 + amount) % 26 + 65);
} 
else {
shiftedtext += String.fromCharCode(plaincode);
}

}
return shiftedtext;
}

console.log(caesarShift('Hello World', 5));
console.log(caesarShift('Hello World', 21));