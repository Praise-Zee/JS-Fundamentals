
function factorialIterative(n) {
  if (isNaN(n) || n <= 0) return;

  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
    console.log(`Factorial of ${i} is ${result}`);
  }
}

const number = 5;
factorialIterative(number);


