const size = 4;


if (!isNaN(size) && Number.isInteger(size)) {
  let row = 0;
  while (row < size) {
    let line = "";
    let col = 0;
    while (col < size) {
      line += "X";
      col++;
    }
    console.log(line);
    row++;
  }
} else {
  console.log("Missing size");
}
