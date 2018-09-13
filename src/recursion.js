/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  if (typeof n !== 'number') {
    throw new Error('please input a number.');
  } else {
    if (n < 0) {
      return null;
    } else {
      if (n === 0 || n === 1) {
        return 1;
      } else {
        return n * factorial(n-1);
      }
    }
  }
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  switch(array.length) {
    case 0: return 0;
    case 1: return array[0];
  }
  var newArray = array.slice(1);
  return array[0] + sum(newArray);
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  var sum = 0;
  array.forEach(item => {
    if (Array.isArray(item)) {
      sum += arraySum(item);
    } else {
      sum += item;
    }
  })
  return sum;
};

// 4. Check if a number is even.
var isEven = function(n) {
  if (n === 2) {
    return true;
  } else if (n === 1) {
    return false;
  } else if (n === 0) {
    return true;
  } else if (n > 2) {
    return isEven(n - 2);
  } else if (n < 0) {
    return isEven(n + 2);
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1 || n === -1) {
    return 0;
  } else if (n < -1) {
    return n + 1 + sumBelow(n + 1);
  } else if (n > 1) {
    return n - 1 + sumBelow(n - 1);
  }
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  var result = [];
  if (Math.abs((x - y)) <= 1) {
    return result;
  } else {
    if (x > y) {
      result.push(x - 1);
      return result.concat(range(x - 1, y));
    } else {
      result.push(x + 1);
      return result.concat(range(x + 1, y));
    }
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 1) {
    return base;
  } else if (exp === 0) {
    return 1;
  } else if (exp > 1) {
    return base * exponent(base, exp - 1);
  } else if (exp === -1) {
    return Number((1 / base).toFixed(6));
  } else if (exp < -1) {
    return Number((1 / base * exponent(base, exp + 1)).toFixed(6));
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n === 1) {
    return true;
  } else if (n === 0) {
    return false;
  } else if (Number.isInteger(n / 2)) {
    return powerOfTwo(n / 2);
  } else {
    return false;
  }
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  if (string.length === 0) {
    return '';
  } else {
    return string[string.length - 1] + reverse(string.slice(0, -1));
  }
}; 

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  var newString = string.toLowerCase().trim();
  return [0, 1].includes(newString.length) || (newString[0] === newString.slice(-1) && palindrome(newString.slice(1, -1)));
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if (y === 0) {
    return NaN;
  } else if ( x === y) {
    return 0;
  } else if (x >= 0 && y > 0) {
    if (x < y) {
      return x;
    } else {
      return modulo(x - y, y);
    }
  } else if (x <= 0 && y < 0) {
    if (x > y) {
      return x;
    } else {
      return modulo(x - y, y);
    }
  } else if (x >= 0 && y < 0) {
    if (x < -y) {
      return x;
    } else {
      return modulo(x + y, y);
    }
  } else if (x <= 0 && y > 0) {
    if (-x < y) {
      return x;
    } else {
      return modulo(x + y, y);
    }
  }
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  if (y === 0 || x === 0) {
    return 0;
  } else if (y === 1) {
    return x;
  } else if (y === -1) {
    return -x;
  } else if (x === 1) {
    return y;
  } else if (x === -1) {
    return -y;
  } else if (x > 0 && y > 0) {
    return x + multiply(x, y - 1);
  } else if (x > 0 && y < 0) {
    return -x + multiply(x, y + 1);
  } else if (x < 0 && y > 0) {
    return -y + multiply(x + 1, y);
  } else if (x < 0 && y < 0) {
    return -x + multiply(x, y + 1);
  }
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
  if (y === 0) {
    return NaN;
  } else if (x === 0) {
    return 0;
  } else if (y === 1) {
    return x;
  } else if (y === -1) {
    return -x;
  } else if (x > 0 && y > 0) {
    if (x > y) {
      return 1 + divide(x - y, y);
    } else {
      return 0;
    }
  } else if (x > 0 && y < 0) {
    if (x > -y) {
      return -1 + divide(x + y, y);
    } else {
      return 0;
    }
  } else if (x < 0 && y > 0) {
    if (-x > y) {
      return -1 + divide(x + y, y); 
    } else {
      return 0;
    }
  } else if (x < 0 && y < 0) {
    if (x < y) {
      return 1 + divide(x - y, y);
    } else {
      return 0;
    }
  }
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if (x <= 0 || y <= 0) {
    return null;
  }
  if (x % y === 0) {
    return y;
  } else if (y % x === 0) {
    return x;
  } else if (x > y) {
    return gcd(y, x % y);
  } else if (y > x) {
    return gcd(x, y % x);
  }
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if (str1.length === 0 && str2.length === 0) {
    return true;
  } else {
    return str1[0] === str2[0] && compareStr(str1.slice(1), str2.slice(1));
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  var result = [];
  if (str.length === 0) {
    return result;
  } else {
    result.push(str[0]);
    return result.concat(createArray(str.slice(1)));
  }
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  var result = [];
  if (array.length === 0) {
    return result;
  } else {
    result.push(array[array.length - 1]);
    return result.concat(reverseArr(array.slice(0, -1)));
  }
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  var result = [];
  if (length === 0) {
    return result;
  } else {
    result.push(value);
    length--;
    return result.concat(buildList(value, length));
  }
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  var result = [];
  if (n === 0) {
    return result;
  } else {
    if (n % 3 === 0 && n % 5 === 0) {
      result.push('FizzBuzz');
    } else if (n % 3 === 0) {
      result.push('Fizz');
    } else if (n % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push(String(n));
    }
    n--;
    return fizzBuzz(n).concat(result);
  }
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  var count = 0;
  if (array.length === 0) {
    return count;
  } else {
    if (array[0] === value) {
      count++;
    }
    return count + countOccurrence(array.slice(1), value);
  }
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  var result = [];
  if (array.length === 0) {
    return result;
  } else {
    result.push(callback(array[0]));
    return result.concat(rMap(array.slice(1), callback));
  }
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  var count = 0;
  for (var keys in obj) {
    if (keys === key) {
      count++;
    }
    if (typeof obj[keys] === 'object') {
      count += countKeysInObj(obj[keys], key);
    }
  }
  return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  var count = 0;
  for (var keys in obj) {
    if (obj[keys] === value) {
      count++;
    }
    if (typeof obj[keys] === 'object') {
      count += countValuesInObj(obj[keys], value);
    }
  }
  return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  for (var keys in obj) {
    if (keys === oldKey) {
      var tempValue = obj[keys];
      delete obj[keys];
      obj[newKey] = tempValue;
    }
    if (typeof obj[keys] === 'object') {
      obj[keys] = replaceKeysInObj(obj[keys], oldKey, newKey);
    }
  }
  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  var result = [];
  if (n <= 0) {
    return null;
  } else if (n === 1) {
    result.push(0, 1);
    return result;
  } else {
    result = fibonacci(n - 1).slice(0);
    var l = result.length;
    result.push(result[l - 1] + result[l - 2]);
    return result;
  }
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if (n < 0) {
    return null;
  } else if (n === 0) {
    return 0;
  } else if (n === 1 || n === 2) {
    return 1;
  } else {
    return nthFibo(n - 1) + nthFibo(n - 2);
  }
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  var result = [];
  if (array.length === 0) {
    return result;
  } else {
    result.push(array[0].toUpperCase());
    return result.concat(capitalizeWords(array.slice(1)));
  }
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  var result = [];
  if (array.length === 0) {
    return result;
  } else {
    if (array[0].length === 0) {
      result.push('');
    } else {
      result.push(array[0][0].toUpperCase() + array[0].slice(1));
    }
    return result.concat(capitalizeFirst(array.slice(1)));
  }
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  var sum = 0;
  for (var keys in obj) {
    if (obj[keys] % 2 === 0) {
      sum += obj[keys];
    }
    if (typeof obj[keys] === 'object') {
      sum += nestedEvenSum(obj[keys]);
    }
  }
  return sum;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  var result = [];
  if (array.length === 0) {
    return result;
  } else {
    for (var i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        result = result.concat(flatten(array[i]));
      } else {
        result.push(array[i]);
      }
    }
    return result;
  }
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str) {
  var result = {};
  if (str.length === 0) {
    return result;
  } else if (str.length === 1) {
    result[str[0]] = 1;
    return result;
  } else {
    result = Object.assign({}, letterTally(str.slice(1)));
    if (result[str[0]] === undefined) {
      result[str[0]] = 1;
    } else {
      result[str[0]]++;
    }
    return result;
  }
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  var result = [];
  if (list.length === 0) {
    return result;
  } else if (list.length === 1) {
    result.push(list[0]);
    return result;
  } else if (list.length === 2) {
    if (list[0] === list[1]) {
      result.push(list[0]);
    } else {
      result.push(list[0], list[1]);
    }
    return result;
  } else {
    result = compress(list.slice(0, -1)).slice(0);
    if (result[result.length - 1] !== list[list.length - 1]) {
      result.push(list[list.length - 1]);
    }
    return result;
  }
};

// 33. Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  var result = [];
  if (array.length === 1) {
    array[0].push(aug);
    result.push(array[0]);
    return result;
  } else {
    result = augmentElements(array.slice(0, -1), aug).slice(0);
    array[array.length - 1].push(aug);
    result.push(array[array.length - 1]);
    return result;
  }
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  var result = [];
  if (array.length === 1) {
    result.push(array[0]);
  } else if (array.length === 2) {
    if (array[0] === array[1] && array[0] === 0) {
      result.push(array[0]);
    } else {
      result.push(array[0], array[1]);
    }
  } else {
    result = minimizeZeroes(array.slice(0, -1)).slice(0);
    if (result[result.length - 1] !== 0 || array[array.length - 1] !== 0) {
      result.push(array[array.length - 1]);
    }
  }
  return result;
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  var result = [];
  if (array.length === 1) {
    if (array[0] < 0) {
      result.push(-array[0]);
    } else {
      result.push(array[0]);
    }
  } else {
    result = alternateSign(array.slice(0, -1)).slice(0);
    if (array[array.length - 1] * result[result.length - 1] < 0) {
      result.push(array[array.length - 1]);
    } else {
      result.push(-array[array.length - 1]);
    }
  }
  return result;
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  var result = '';
  var digitNameMap = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine'
  };
  if (str.length >= 1) {
    if (Object.keys(digitNameMap).includes(str[0])) {
      result += digitNameMap[str[0]];
    } else {
      result += str[0];
    }
    if (str.length > 1) {
      result +=  numToText(str.slice(1));
    }
  }
  return result;
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
  var count = 0;
  tag = tag.toUpperCase();
  if (node === undefined) {
    node = document.body;
  }
  var childNodeArr = Array.prototype.slice.call(node.childNodes, 0);
  for (var i = 0; i < childNodeArr.length ; i++) {
    if (childNodeArr[i].tagName === tag) {
      count++;
    }
    count += tagCount(tag, childNodeArr[i]);
  }
  return count;

};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
  if (min === undefined) {min = 0}
  if (max === undefined) {max = array.length - 1}
  var midIndex = Math.floor((min + max) / 2);
  if (array[min] === target) {
    return min;
  } else if (array[max] === target) {
    return max;
  } else if (max - min < 0) {
    return null;
  } else if (array[midIndex] === target) {
    return midIndex;
  } else if (array[midIndex] > target) {
    return binarySearch(array, target, min, midIndex - 1);
  } else if (array[midIndex] < target) {
    return binarySearch(array, target, midIndex + 1, max);
  } else {
    return null;
  }
};


// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
  // split, sort and merge
  if (array.length === 1 || array.length === 0) {
    return array;
  }
  var midPoint = Math.floor(array.length / 2);
  var left = array.slice(0, midPoint);
  var right = array.slice(midPoint);
  var merge = function(left, right) {
    var result = [], leftIndex = 0, rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
  return merge(mergeSort(left), mergeSort(right));
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
  var result;
  if (typeof input !== 'object') {
    return input;
  }
  if (Array.isArray(input)) {
    result = [];
    if (input.length === 0) {
      return result;
    } else {
      for (var i = 0; i < input.length; i++) {
        result.push(clone(input[i]));
      }
      return result;
    }
  } else {
    result = {};
    if (Object.keys(input).length === 0) {
      return result;
    } else {
      for (var key in input) {
        result[key] = clone(input[key]);
      }
      return result;
    }
  }
};
