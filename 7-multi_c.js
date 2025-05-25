const printCIsFun = (x) => {
  const num = Number(x);
  if (!isNaN(num) && Number.isInteger(num)) {
    let i = 0;
    while (i < num) {
      console.log("C is fun");
      i++;
    }
  } else {
    console.log("Missing number of occurrences");
  }
};
// Example call with a valid integer:
printCIsFun(5);



