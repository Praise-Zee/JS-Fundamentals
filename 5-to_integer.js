const input = process.argv[2];
const num = Number(input);

if (!isNaN(num) && Number.isInteger(num)) {
  console.log(`My number: ${num}`);
} else {
  console.log("Not a number");
}

