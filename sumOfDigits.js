let numStr = prompt("Enter a number: ");
let sum = 0;
for(i = 0; i < numStr.length; i++){
    sum += Number(numStr[i]);
}
console.log(`Sum of digit of ${numStr} is : ${sum}`);
