// function factorial(n) {
//   for (let i = 0; i <= n; i++) {
//     factors = [n / i];
//     console.log("factors of n is", factors);
//   }
// }

// factorial(5);

function factorial(n) {
  //guard clause
  if (n <= 0) {
    return "negative number or 0";
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(6));

function getUserScore(user) {
  //guard clause
  if (!user) {
    return;
  }
}

function newFactorial(n) {
  if (n > 0) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  } else {
    return "something went wrong";
  }
}
