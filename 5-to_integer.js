const printNumber = (input) => {
  // Remove surrounding single or double quotes if any
  const cleaned = input.replace(/^['"]|['"]$/g, '');
  const num = Number(cleaned);

  if (!isNaN(num) && Number.isInteger(num)) {
    console.log(`My number: ${num}`);
  } else {
    console.log("Not a number");
  }
};

// Example calls:
printNumber("89");         // My number: 89
printNumber("'89'");       // My number: 89
printNumber("-4545");      // My number: -4545
printNumber("'ALX'");      // Not a number

