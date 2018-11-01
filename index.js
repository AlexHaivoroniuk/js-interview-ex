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
        if (closeBraces > openBraces) return false;
    }
    return openBraces === closeBraces;
}

// console.log(isBalanced("}{"));
// console.log(isBalanced("{{}"));
// console.log(isBalanced("{}{}"));
// console.log(isBalanced("foo { bar { baz } boo }"));
// console.log(isBalanced("foo { bar { baz }"));
// console.log(isBalanced("foo { bar } }"));
/*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */
/**
 * INTERMEDIATE TASKS
 */
function fib2(n) {
    var memo = {};

    function recurse(n) {
        var val = null;

        if (n in memo) {
            val = memo[n];
        } else {
            if (n === 0 || n === 1) val = n;
            else val = recurse(n - 1) + recurse(n - 2);

            memo[n] = val;
        }
        return val;
    }
    return recurse(n);
}

// console.log(fib2(0))
// console.log(fib2(1))
// console.log(fib2(10))
// console.log(fib2(50))




// function isBalanced2(s) {
//     function isEvenBraces(obj) {
//         return obj['{'] === obj['}'] && obj['('] === obj[')'] && obj['['] === obj[']']; 
//     }

//     var bracesCnt = { '{' : 0, '}' : 0, '(' : 0, ')' : 0, '[': 0,  ']': 0  };
//     for (var i = 0; i < s.length; ++i) {
//         if (bracesCnt.hasOwnProperty(s.charAt(i))) {
//             bracesCnt[s.charAt(i)]++;
//         }
//         if (
//             bracesCnt['}'] > bracesCnt['{'] ||
//             bracesCnt[')'] > bracesCnt[')'] || 
//             bracesCnt[']'] > bracesCnt['[']
//             ) return false;
//     }
//     console.log(bracesCnt);
//     return isEvenBraces(bracesCnt);
// }

function isBalanced2(s) {
    var open = [];

    // var openBraces = {
    //     '(': true,
    //     '[': true,
    //     '{': true
    // }
    var openBrackets = new Set(['(', '[', '{']);
    var bracketsCorrespondense = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    for(var c of s) {
        if (openBrackets.has(c)) {
            open.push(c);
        } else if (bracketsCorrespondense[c] && open.pop() !== bracketsCorrespondense[c]) {
            return false
        }
    }
    return !open.length;
}


// console.log(isBalanced2('(foo { bar (baz) [boo] })'))
// console.log(isBalanced2('foo { bar { baz }'))
// console.log(isBalanced2('foo { (bar [baz] } )'))
// console.log(isBalanced('') === true);
// console.log(isBalanced('()') === true);
// console.log(isBalanced(')()') === false);
// console.log(isBalanced(')(') === false);
// console.log(isBalanced('()(()()()())') === true);
// console.log(isBalanced('[](){}') === true);
// console.log(isBalanced('[({})]') === true);
// console.log(isBalanced('[(]{)}') === false);
// console.log(isBalanced('const sth = () => { animal.sleep();') === false);
// console.log(isBalanced('const sth = { bark: animal() }') === true);

// function uniq(arr) {
//     return [...new Set(arr)];
// }
function uniq(arr) {
    var res = [];
    arr.forEach(el => {
        if (!res.includes(el)) res.push(el);
    });
    return res;
}

// console.log(uniq([]))
// console.log(uniq([1, 4, 2, 2, 3, 4, 8]))


function intersection(arr1, arr2) {
    var res = [];
    arr1.forEach(el1 => {
        if (arr2.includes(el1)) res.push(el1);
    })
    return res;
}

// console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3]));
// console.log(intersection([1, 5, 4, 2], [7, 12]));

function merge(left, right) {
    var lP = 0;
    var rP = 0;
    var mergedArr = [];
    while(mergedArr.length < (left.length + right.length)) {
        if (rP === right.length) mergedArr = mergedArr.concat(left.slice(lP))
        else if(lP === left.length) mergedArr = mergedArr.concat(right.slice(rP))
        else if (left[lP] > right[rP]) mergedArr.push(right[rP++]);
        else mergedArr.push(left[lP++]);
    }
    return mergedArr;
}

function sort(arr) { // O(n*log(n))
    if (arr.length <= 1 ) return arr;
    var left = arr.slice(0, Math.round(arr.length/2));
    var right = arr.slice(Math.round(arr.length/2));
    var lSorted = sort(left);
    var rSorted = sort(right);
    return merge(lSorted, rSorted);
}

// console.log(sort([]));
// console.log(sort([-4, 1, Infinity, 3, 3, 0]));

function includes(arr, val) {
    if (arr.length === 1) return arr[mid] === val;
    var mid = Math.round(arr.length/2);
    if (arr[mid] === val) return true;
    else if (val > arr[mid]) return includes(arr.slice(mid), val); 
    else if (val < arr[mid]) return includes(arr.slice(0, mid), val); 
}

// console.log(includes([1, 3, 8, 10], 8))
// console.log(includes([1, 3, 8, 8, 15], 15))
// console.log(includes([1, 3, 8, 10, 15], 9))

function isObject(o) {
    return o && typeof o === 'object' && o.constructor === Object;
}

function assignDeep(target, src) {

    function recurse(t, s) {
        if (t && s) {
            for (var key in s) {
                if (isObject(t[key]) && isObject(s[key])) {
                    recurse(t[key], s[key]);
                } else {
                    t[key] = s[key];
                }
            }
        }
    }
    recurse(target, src);
    return target;
}

// console.log(assignDeep({ a: 1 }, {}))     // { a: 1 }     
// console.log(assignDeep({ a: 1 }, { a: 2 }))    // { a: 2 } 
// console.log(assignDeep({ a: 1 }, { a: { b: 2 } })) // { a: { b: 2 } }
// console.log(assignDeep({ a: { b: { c: 1 }}}, { a: { b: { d: 2 }}, e: 3 })) // { a: { b: { c: 1, d: 2 }}, e: 3 }

function reduceAsync(pArr, cb, accomulator) {
    return pArr.reduce(
        (prom, func) => {
            return prom.then(chainRes => func().then(currRes => cb(chainRes, currRes)))
        },
        Promise.resolve(accomulator)
    )
}

let a = () => Promise.resolve('a')
let b = () => Promise.resolve('b')
let c = () => new Promise(resolve => setTimeout(() => resolve('c'), 100))
// await reduceAsync([a, b, c], (acc, value) => [...acc, value], [])
// // ['a', 'b', 'c']
// await reduceAsync([a, c, b], (acc, value) => [...acc, value], ['d'])
// // ['d', 'a', 'c', 'b']

// let a = () => Promise.resolve('a')
// let b = () => Promise.resolve('b')
// let c = () => new Promise(resolve => setTimeout(() => resolve('c'), 100))

// reduceAsync([a, b, c], (acc, value) => [...acc, value], ['d']).then(res => {
//     console.log(res);
// })

function seq(pArr) {
    return pArr.reduce(
        (prom, func) => {
            return prom.then(chainRes => func().then(currRes => [...chainRes, currRes]))
        },
         Promise.resolve([])
    )
}

// let a = () => Promise.resolve('a')
// let b = () => Promise.resolve('b')
// let c = () => Promise.resolve('c')
// await seq([a, b, c])                  // ['a', 'b', 'c']
// await seq([a, c, b])                  // ['a', 'c', 'b']

// let a = () => Promise.resolve('a')
// let b = () => Promise.resolve('b')
// let c = () => Promise.resolve('c')
// seq([a,c,b]).then(res => {
//     console.log(res);
// })

/**XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
 * HARD TASKS
 */

 function permute(s) {

 }

//  console.log(permute(''));
//  console.log(permute('abc'));
 

function debounce(cd, delay) {

}

// let a = () => console.log('foo')
// let b = debounce(a, 100)
// b()
// b()
// b() // только этот вызов должен вызывать a()
class Node {
    constructor(value) {
        this.value = value || null;
        this.next = null;
    }
}
class LinkedList {
    constructor(...rest) {
        this.head = new Node();
        this.tail = this.head;
        this.count = 0;
        if (rest.length > 0) {
            rest.forEach(v => this.add(v));
        }
    }

    add(value) {
        if (this.head.value === null) this.head.value = value
        else {
            this.tail.next = new Node(value);
            this.tail = this.tail.next;
        }
    }

    has(value) {
        var node = this.head
        while(node) {
            if (node.value === value) return console.log(true);
            node = node.next;
        }
        return console.log(false)
    }

    forEach(cb) {
        var node = this.head
        while(node) {
            cb(node.value);
            node = node.next;
        }
    }
    print() {
        this.forEach(console.log);
    }
}

// let ll = new LinkedList(1,2,3);
// ll.print();
// ll.add(4)                           // undefined
// ll.add(5)                           // undefined
// ll.has(1)                           // true
// ll.has(4)                           // true
// ll.has(6)                           // false

function hash (string) {
    return string
      .split('')
      .reduce((a, b) => ((a << 5) + a) + b.charCodeAt(0), 5381)
}

class HashMap {
    constructor() {
        this.storage = [];
    }

    set(key, value) {

    }

    get(key) {

    }
}

let map = new HashMap
map.set('abc', 123)                   // undefined
map.set('foo', 'bar')                 // undefined
map.set('foo', 'baz')                 // undefined
map.get('abc')                        // 123
map.get('foo')                        // 'baz'
map.get('def')                        // undefined


class BinarySearchTree {
    constructor() {

    }

    add() {

    }

    has() {

    }

    remove() {

    }

    size() {

    }
}

let bst = new BinarySearchTree()
bst.add(1, 2, 3, 4)
bst.add(5)
bst.has(2)                           // true
bst.has(5)                           // true
bst.remove(3)                        // undefined
bst.size()       



class BinaryTree {
    constructor() {

    }
    add() {

    }
    
    bfs() {

    }

    inorder() {

    }

    preorder() {

    }

    postorder() {

    }
}

let tree = new BinaryTree()
let fn = value => console.log(value)
tree.add(1, 2, 3, 4)
tree.bfs(fn)                          // undefined
tree.inorder(fn)                      // undefined
tree.preorder(fn)                     // undefined
tree.postorder(fn)                    // undefined