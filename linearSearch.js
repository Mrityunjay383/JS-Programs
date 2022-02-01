/Linear search function
function linearSearch(arr, key){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === key){
            return true;
        }
    }
    return false;
}

//Driver Code
let arr = [60, 20, 50, 27, 18, 50, 26, 07, 89, 21];//change array value here

let numToSeach = parseFloat(prompt("Enter a number to search"));
console.log(linearSearch(arr, numToSeach));
