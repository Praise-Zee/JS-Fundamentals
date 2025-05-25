const twoArguments = (arg1, arg2) => {
  console.log(`${arg1} is ${arg2}`);
};

const arg1 = process.argv[2];
const arg2 = process.argv[3];

twoArguments(arg1, arg2);



