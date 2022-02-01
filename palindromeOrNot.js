//Function to check if a number is palinfrome or not
function validatePalin(str) {  
  
    const len = string.length;  
  
    for (let i = 0; i < len / 2; i++) {  
  
        if (string[i] !== string[len - 1 - i]) {  
            console.log( 'It is not a palindrome');
            return;
        }  
    }  
    console.log( 'It is a palindrome');  
}  
  
//Driver Code
const string = prompt('Enter a number: ');  
  
const value = validatePalin(string);  
