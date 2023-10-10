//multiplication through for loop
function multiply(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
}

console.log(multiply([1, 2, 3, 4]));

//multiplication through recursion
function multiplication(arr) {
  if (arr.length <= 0) {
    return 1;
  } else
    return arr[arr.length - 1] * multiplication(arr.slice(0, arr.length - 1));
}

console.log(multiplication([1, 2, 3, 4]));

//find the factorial of a given number

function factorial(n) {
  if (n === 0) return 1;

  return n * factorial(n - 1);
}
console.log(factorial(5));

//create an array with range of numbers
function rangeofNumber(startNum, endNum) {
  //base condition to end the recursion function call
  if (endNum < startNum) {
    return [];
  } else {
    const numbers = rangeofNumber(startNum, endNum - 1);
    //here endNum is the current element
    numbers.push(endNum);
    return numbers;
  }
}
console.log(rangeofNumber(1, 5));

//Q. from the given integer find the number is palindrome or not
//Palindrome - the  number which we read from start and end is same like 101, 121
function isPalindrome(n) {
  let str = n.toString();
  if (n < 0) {
    return false;
  }

  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;

  return isPalindrome(str.slice(1, -1));
}

console.log(isPalindrome(10));
