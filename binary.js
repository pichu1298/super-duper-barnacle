// function binaryToDecimal(decimal) {
//   let result = 0;
//   for (let i = decimal.length; decimal.length > 0; i--) {
//     //run for as long as the decimal
//     if (decimal[i] === "1") {
//       result += 2 ** i;
//     }
//   }
//   return result;
// }
// console.log(binaryToDecimal("111"));

function binaryToDecimal(binary) {
  let decimal = 0;
  // x = binary.reverse();
  for (let i = 0; i < binary.length; i++) {
    if (binary[binary.length - 1 - i] === "1") {
      decimal = decimal + Math.pow(2, i); //for exponential values
    }
  }
  return decimal;
}
console.log(binaryToDecimal("1101"));

function Audrey(binary) {
  const value = [128, 64, 32, 8, 4, 2, 1];
  let count = 0;
  for (let i = 0; i <= 8; i++) {
    if (binary[i] === "1") {
      count += value[i];
    }
  }
  return count;
}
console.log(Audrey("1"));

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
console.log(decimalToBinary(8));

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
