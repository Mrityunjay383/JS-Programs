const lowerNumber = parseInt(prompt('Enter lower number: '));
const higherNumber = parseInt(prompt('Enter higher number: '));
    
let sum = 0;

for (let i = lowerNumber; i <= higherNumber; i++) {
  let flag = 0;

  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      flag = 1;
      break;
    }
   }

  // if number greater than 1 and not divisible by other numbers
  if (i > 1 && flag == 0) {
    sum+=i;
  }
}
console.log(sum);
