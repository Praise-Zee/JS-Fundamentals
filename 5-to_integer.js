
const printNumber = (input) => {
  const num = Number(input);


  if (!isNaN(num) && Number.isInteger(num)) {
    console.log(`My number: ${num}`);
  } else {
    console.log("Not a number");
  }
};


// Example calls
printNumber("42");     // My number: 42
printNumber("hello");  // Not a number
printNumber("3.14");   // Not a number
