const x = Number(process.argv[2]);

if (!isNaN(x) && Number.isInteger(x) && x >= 0) {
  let i = 0;
  while (i < x) {
    console.log("C is fun");
    i++;
  }
}
// Do **not** print anything if x is invalid or negative



