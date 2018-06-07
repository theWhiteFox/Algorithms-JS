(function() {
  // // 1, 1, 2, 3, 5, 8, 11
  // function fibonacci(num) {
  //   var a = 1,
  //     b = 0,
  //     temp2;

  //   while (num > 0) {
  //     temp2 = a;
  //     a = a + b;
  //     b = temp2;
  //     num--;
  //     console.log(temp2);
  //   }
  //   return b;
  // }
  // fibonacci(7);

  const basicFib = () => {
    let first = 1,
      second = 0,
      answer = first + second;

    while (answer < 10) {
      console.log(answer);
      second = first;
      first = answer;
      answer = first + second;
    }
    basicFib();
  };
})();
