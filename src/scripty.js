// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
// Fn = Fn-1 + Fn-2
// F0 = 0, F1 = 1


// fibonacci html output
function fibonacciHTML() {
    var result = 0, term1 = 0, term2 = 1, i = 1;

    var text = term1 + '<br>' + term2;

    while(i < 10) {
        result = term1 + term2;
        text += "<br>" + result;
        term1 = term2;
        term2 = result;
        i++;
    }
    return text;
}

// error in console document.getElementById(...) is null
window.onload = function() {
    document.getElementById("fibWhile").innerHTML = fibonacciHTML();
}

// very basic fibonacci
function basicFib() {
	var first = 1,
    	second = 0,
        answer = first + second;   
       
    while(answer < 100) {    	
        console.log(answer);	    
        second = first;
        first = answer;
        answer = first + second;
    }
    return 0;
}

function fibonacci(num) {
    var a = 1, b = 0, temp2;

    while(num >  0) {
        temp2 = a;
        a = a + b;
        b = temp2;
        num--;
        console.log(temp2);
    }
    return b;
}

// not using while loop

function fib(number) {

    if(number == 0) return 0;
    
    if(number == 1) return 1;

    return fib(number - 2) + fib(number - 1);

}