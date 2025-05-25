const number = 5;




function factorialIterative(n) {
  if (isNaN(n) || n <= 0) return 1;




  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}




console.log(factorialIterative(number));

