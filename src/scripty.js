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

const graph = {
  start: { A:5, B: 2 },
  A: { C: 4, D: 2},
  B: { D: 8, D: 7},
  C: { D: 6, finish: 3},
  D: { finish: 1 },
  finish: { }
};

const costs = {
  A: 5,
  B: 2,
  finish: Infinity
};

const parents = {
  A: 'start',
  B: 'start',
  finish: null
};

const processed = ['start', 'A', 'B'];

console.log(costs);
