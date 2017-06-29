
function fibonacci() {
	var first = 1,
    	second = 0,
        answer = first + second;
		console.log(answer);

        var text = "";
       
    while(answer < 100) {
    	console.log(answer);
        text += "<br>" + answer;	    
        second = first;
        first = answer;
        answer = first + second;
    }
    return text;
}

document.getElementById("fibWhile").innerHTML = fibonacci();

function fibonacci2() {
    var first2 = 0, second2 = 1, temp;

    while(temp < 100) {
        temp = first2 + second2;
        console.log(temp);
    }
}
