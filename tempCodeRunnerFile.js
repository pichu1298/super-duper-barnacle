function decimalToBinary(dec) {
  let binaryd = [];
  while (dec > 0) {
    if (dec % 2 === 0) {
      binaryd.push("0");
    } else if (dec % 2 > 0) {
      binaryd.push("1");
    }
  }
  binaryd.reverse();
  return binaryd;
}
console.log(decimalToBinary("8"));