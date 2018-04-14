// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
// Fn = Fn-1 + Fn-2
// F0 = 0, F1 = 1

"use strict";

/* 
* Fibonacci 
*/

// below functions can be accessed from the console
// very basic fibonacci
function basicFib() {
  var first = 1,
    second = 0,
    answer = first + second;

  while (answer < 100) {
    console.log(answer);
    second = first;
    first = answer;
    answer = first + second;
  }
  return 0;
}

// enter a number
function fibonacci(num) {
  var a = 1, b = 0, temp2;

  while (num > 0) {
    temp2 = a;
    a = a + b;
    b = temp2;
    num--;
    console.log(temp2);
  }
  return b;
}

// for loop
function fibFor() {
  var a = 0, b = 1, i = 1, result;
  result = b;
  console.log(a + '\n' + result + '\n');
  for (i; i < 10; i++) {
    console.log(result + '\n');
    result = a + b;
    a = b;
    b = result;
  }
}

// recursive function starts at 0
function fib(number) {

  if (number == 0) return 0;

  if (number == 1) return 1;

  return fib(number - 2) + fib(number - 1);

}

// shorter recursive function starts at 1
function fibRecursive(n) {
  if (n <= 1) return 1;

  return fibRecursive(n - 2) + fibRecursive(n - 1);
}

/* 
* fizzBuzz 
*/

// modulus operator

console.log("modulus operator: 7 % 3 = " + 7 % 3);

function fizzBuzz(num) {
  for (var i = 1; i <= num; i++) {
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 5 === 0) console.log("fizz");
    else if (i % 3 === 0) console.log("Buzz");
    else console.log(i);
  }
}

fizzBuzz(20);


/*
* Dijkstra’s Algorithm
*/

const problem = {
  start: { A: 5, B: 2 },
  A: { C: 4, D: 2 },
  B: { A: 8, D: 7 },
  C: { D: 6, finish: 3 },
  D: { finish: 1 },
  finish: {}
};

// implementing the algorithm
const lowestCostNode = (costs, processed) => {
  return Object.keys(costs).reduce((lowest, node) => {
  if (lowest === null || costs[node] < costs[lowest]) {
    if (!processed.includes(node)) {     
        lowest = node;
      }
    }
    return lowest;
  }, null);
};

// func that returns the min cost and path to reach finish
const dijkstra = (graph) => {

  // track lowest cost to reach each node
  const costs = Object.assign({ finish: Infinity}, graph.start);

  // track paths
  const parents = {finish: null};

  // add children of the start node
  for (let child in graph.start) {
    parents[child] = 'start';
  }

  // track nodes that have already been processed
  const processed = [];

  // get the cost of the current node
  let node = lowestCostNode(costs, processed);

  // get all the children of the current
  while (node) {
    let cost = costs[node];
    let children = graph[node];
    // loop through each of the children
    for (let n in children) {
      let newCost = cost + children[n];
      if (!cost[n]) {
        costs[n] = newCost;
        parents[n] = node;
      }
      if (costs[n] > newCost) {
        costs[n] = newCost;
        parents[n] = node;
      }
    }
    // push to processed data structure
    processed.push(node);
    node = lowestCostNode(costs, processed);
  }

  let optimalPath = ['finish'];
  let parent = parents.finish;

  while (parent) {
    optimalPath.push(parent);
    parent = parents[parent];
  }

  optimalPath.reverse(); // reverse array to get order

  const results = {
    distance: costs.finish,
    path: optimalPath
  };
  return results;
};

// Object { distance: 12, path: […] }
// distance: 12
// path: […]​
// 0: "parent"
// 1: "parent"
// 2: "parent"
// 3: "finish"
// length: 4

console.log(dijkstra(problem));

// Object { distance: 8, path: […] }
// distance: 8​
// path: […]​​
// 0: "start"​​
// 1: "A"​​
// 2: "D"​​
// 3: "finish"​​
// length: 4

// harmless ransome note
// constant runtime 
// big O notation: "0 (1)"
function log(array) {  
  console.log("constant runtime \n");
  console.log(array[0]);
  console.log(array[1]);
}

log([1, 2, 3, 4]);
log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


// linear runtime
// Big O Notation: "0 (n)"
function logAll(array) {  
  console.log("linear runtime \n");
  for(var i = 0; i < array.length; i++) {  
    console.log(array[i]);
  }
}

logAll([1, 2, 3, 4, 5]);
logAll([1, 2, 3, 4, 5, 6]);
logAll([1, 2, 3, 4, 5, 6, 7]);


// exponential runtime
// big O Notation: "0 (n^2)"
console.log("exponential runtime")
function addAndLog(array) {
  for(var i = 0; i < array.length; i++) {
    for(var j = 0; j < array.length; j++) {
      console.log(array[i] + array[j]);
    }
  }
}

addAndLog(['A', 'B', 'C']); // 9 pairs logged out
addAndLog(['A', 'B', 'C', 'D']); // 16 pairs logged out
addAndLog(['A', 'B', 'C', 'D', 'E']); // 25 pairs logged out

// locarithmic runtime
// big O Notation: 0 (log n)
console.log(">>> big O Notation: 0 (log n)");
function binarySearch(array, key) {
  var minIndex = 0;
  var maxIndex = array.length - 1;
  var currentIndex;
  var currentElement;

  while(minIndex <= maxIndex) {
    // instead of Math.floor use bitwise or
    currentIndex = (minIndex + maxIndex) / 2 | 0;
    currentElement = array[currentIndex];
    console.log("* currentElement: " + currentElement);
    if(currentElement < key) {
      console.log("** key: " + key);
      minIndex = currentIndex + 1;      
    } else if (currentElement > key) {
      console.log("*** key: " + key);
      maxIndex = currentIndex -1;
    } else {
      return currentIndex;
    }
  }
  return -1;
}

console.log(binarySearch(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N'], 'D'));


// harmless ransome note
console.log("harmless ransome note");
function harmlessRansomeNote(noteText, magazineText) {
  var noteArr = noteText.split(' ');
  var magazineArr = magazineText.split(' ');
  var magazineObj = {};

  magazineArr.forEach(word => {
    // if the current word is not already present
    if(!magazineObj[word]) {
      // make it a property 
      magazineObj[word] = 0;
    }
    // increment the current word by 1
    magazineObj[word]++;
  });
  
  var noteIsPossible = true;
  noteArr.forEach(word => {
    if(magazineObj[word]) {
      magazineObj[word]--;
      if(magazineObj[word] < 0) noteIsPossible = false;
    }
    else noteIsPossible = false;
  });
 return noteIsPossible;
}
console.log(harmlessRansomeNote('this is all', 'this is all note the magazine text in the magazine'));

// palindrome
function isPalindrome(string) {
  string = string.toLowerCase();
  var charactersArr = string.split('');
  var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');

  var lettersArr = [];
  charactersArr.forEach(char => {
    if(validCharacters.indexOf(char) > -1) lettersArr.push(char);
  });

  if(lettersArr.join('') === lettersArr.reverse().join('')) return true;
  else return false;
}

console.log(isPalindrome("Atlanta"));

function checkPalindrome(str) {
  var i, len = str.length;
  for(i = 0; i < len / 2; i++) {
    if(str[i] !== str[len -1 -i]) {
      return false;
    }
    else {
      return true;
    }
  }
}

// caesar's cipher
function caesarCipher(str, num) {
  num = num % 26;
  var lowerCaseString = str.toLowerCase();
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var newString = '';
  
  for(var i = 0; i < lowerCaseString.length; i++) {
    var currentLetter = lowerCaseString[i];
    if(currentLetter === ' ') {
    	newString += currentLetter;
      continue;
    }
    var currentIndex = alphabet.indexOf(currentLetter);
    var newIndex = currentIndex + num;
    if (newIndex > 25) newIndex = newIndex - 26; // loop back around
    if (newIndex < 0) newIndex = 26 + newIndex;
    if(str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase();
    }
    else newString += alphabet[newIndex];    
  }
  return newString;
}

caesarCipher('Zoo Keeper', 2); // "Bqq Mggrgt"

// first reverse string  
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString('This is a test'));

// second reverse string with for loop 
function reverseString1(str1) {
  var newString = '';
  
  for(var i = str1.length - 1; i >= 0; i--) {
  	newString += str1[i];
  }
  return newString;
}

console.log(reverseString1('This is a test1'));


