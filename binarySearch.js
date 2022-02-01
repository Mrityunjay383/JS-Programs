let binarySearch = function (arr, x, start, end) {
      
    if (start > end) return false;
  
    let mid=Math.floor((start + end)/2);
  
    if (arr[mid]===x) return true;
         
    if(arr[mid] > x)
        return binarySearch(arr, x, start, mid-1);
    else
        return binarySearch(arr, x, mid+1, end);
}
  
// Driver code
let arr = [1, 3, 5, 7, 8, 9];
let x = parseFloat(prompt("Enter a number to search"));
  
if (binarySearch(arr, x, 0, arr.length-1))
    console.log("Element found!");
else console.log("Element not found!");
