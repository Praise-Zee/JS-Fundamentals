const twoArguments = (arg1, arg2) => {
  if (arg1 && arg2) {
    console.log(`${arg1} is ${arg2}`);
  } else if (arg1 && !arg2) {
    console.log(arg1);
  }
  // If no arguments, do nothing (prints nothing)
};

// Example calls:
twoArguments("python", "fun");  // Output: python is fun
twoArguments("javascript", "tough");           // Output: javascript is tough
twoArguments("head", "aching");                 // Output: head is aching

