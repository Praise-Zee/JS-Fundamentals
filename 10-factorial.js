const input = process.argv[2];

function factorial(n) {
  if (isNaN(n)) return 1;

  const num = Number(n);
  if (num <= 0) return 1;

  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }

  return result;
}

console.log(factorial(input));



