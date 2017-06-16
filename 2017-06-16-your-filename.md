function fibonacci() {
	var first = 1,
    	second = 0,
        answer = first + second;
		console.log(answer);
       
    while(answer < 100) {
    	console.log(answer);
	document.write('<br>' + answer);
        second = first;
        first = answer;
        answer = first + second;
    }
}

fibonacci(); // prints to both console and page
