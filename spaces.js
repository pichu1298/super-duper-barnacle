function getSpaces(spaces, yesterday, today) {
  let count = 0;
  for (let i = 0; i < spaces; i++) {
    //Iliterations to go through the spaces of cars
    if (yesterday[i] === "C" && today[i] === "C") {
      //[i] means array number, every one of them. This code compares every character to the other in the same position.
      count++; // count = count + 1;
    }
  }
  return count;
}
console.log(getSpaces(5, "CC..C", "CCC.."));
