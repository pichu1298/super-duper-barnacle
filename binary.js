function binaryToDecimal(decimal) {
  let result = 0;
  for (let i = decimal.length; decimal.length > 0; i--) {
    //run for as long as the decimal
    if (decimal[i] === "1") {
      result += 2 ** i;
    }
  }
  return result;
}
console.log(binaryToDecimal("111"));

function getSpaces(spaces, yesterday, today) {
  let count = 0;
  for (let i = 0; i < spaces; i++) {
    //Iliterations to go through the spaces of cars
    if (yesterday[i] === "C" && today[i] === "C") {
      //[] means array count/number. Because i is in there and i is constantly increasing by one until the max.. It allows it to check if both of yesterday and today's position equals C.
      count++; // count = count + 1;
    }
  }
  return count;
}
console.log(getSpaces(5, "CC..C", "CCC.."));
