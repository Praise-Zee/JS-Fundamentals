
const printArguments = (arg1, arg2) => {
  if (arg1 && arg2) {
    console.log(`${arg1} is ${arg2}`);
  } else if (arg1) {
    console.log(arg1);
  } else {
    console.log("No argument");
  }
};

// Get arguments from the command line
const arg1 = process.argv[2];
const arg2 = process.argv[3];

// Call the function with the command-line arguments
printArguments(arg1, arg2);

