/**
 * EASY TASKS
 */

function isPrime(n) {
    if (n === 2) return true;
    else if (n > 1) {
      for (var i = 2; i < n; ++i) {
        if (n % i !== 0) return true;
        else if (n === i * i) return false;
        else return false;
      }
    } else return false;
  }
  // console.log(isPrime(17));
  
  function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
  }
  // console.log(factorial(6));
  
  function fibbonacci(n) {
    if (n === 0 || n === 1) return n;
    return fibbonacci(n - 1) + fibbonacci(n - 2);
  }
  // console.log(fibbonacci(20));
  
  function isSorted(numArr) {
    if (numArr.length === 0) return true;
    for (var i = 0; i < numArr.length - 1; ++i) {
      console.log(numArr[i]);
      if (numArr[i + 1] && numArr[i] > numArr[i + 1]) {
        return false;
      }
    }
    return true;
  }
  // console.log(isSorted([]));
  // console.log(isSorted([-Infinity, -5, 0, 3, 9]));
  // console.log(isSorted([3, 9, -3, 10]));
  
  function filter(arr, cb) {
    if (arr.length === 0) return arr;
    var filteredArr = [];
    for (var i = 0; i < arr.length - 1; ++i) {
      if (cb(arr[i])) filteredArr.push(arr[i]);
    }
    return filteredArr;
  }
  // console.log(
  //   filter(
  //     [1, 2, 3, 4],
  //     function(n) {
  //       return n < 3;
  //     }
  //   )
  // );
  
  function reduce(arr, cb, acc) {
    if (arr.length === 0) return acc;
    for (var i = 0; i < arr.length; ++i) {
      acc = cb(acc, arr[i]);
    }
    return acc;
  }
  // console.log(
  //   reduce(
  //     [1, 2, 3, 4],
  //     function(a, b) {
  //       return a + b;
  //     },
  //     0
  //   )
  // );
  
  function reverse(s) {
    if (s.length === 0) return s;
    return s[s.length - 1] + reverse(s.substr(0, s.length - 1));
  }
  // console.log(reverse('abcd'));
  
  function indexOf(arr, el) {
    if (arr.length === 0) return -1;
    for (var i = 0; i < arr.length; ++i) {
      if (arr[i] === el) return i;
    }
    return -1;
  }
  // console.log(indexOf([1, 2, 3], 1));
  // console.log(indexOf([1, 2, 3], 4));
  
  function isPalindrome(s) {
    console.log(s.toLowerCase().replace(/\s/g, ""));
    console.log(
      reverse(s)
        .toLowerCase()
        .replace(/\s/g, "")
    );
    return (
      s.toLowerCase().replace(/\s/g, "") ===
      reverse(s)
        .toLowerCase()
        .replace(/\s/g, "")
    );
  }
  // console.log(isPalindrome(''));
  // console.log(isPalindrome('abcdcba'));
  // console.log(isPalindrome('abcd'));
  // console.log(isPalindrome('A man a plan a canal Panama'));
  
  function missing(arr) {
    for (var i = 1; i < arr.length; ++i) {
      if (arr.indexOf(i) === -1) return i;
    }
  }
  
  // console.log(missing([]));
  // console.log(missing([1, 4, 3]));
  // console.log(missing([2, 3, 4]));
  // console.log(missing([5, 1, 4, 2]));
  // console.log(missing([1, 2, 3, 4]));
  
  function isBalanced(s) {
    var openBraces = 0;
    var closeBraces = 0;
    for (var i = 0; i < s.length; ++i) {
      if (s.charAt(i) === "{") openBraces++;
      if (s.charAt(i) === "}") closeBraces++;
    }
    return openBraces === closeBraces;
  }
  
  // console.log(isBalanced("}{"));
  // console.log(isBalanced("{{}"));
  // console.log(isBalanced("{}{}"));
  // console.log(isBalanced("foo { bar { baz } boo }"));
  // console.log(isBalanced("foo { bar { baz }"));
  // console.log(isBalanced("foo { bar } }"));
  
  /**
   * INTERMEDIATE TASKS
   */
  function fib2(n) {
    if (n === 0 || n === 1) return n;
    return fib2(n - 1) + fib2(n - 2);
  }
  
  /**
   * HARD TASKS
   */