function sum(a, b) {
  if (a != undefined && b != undefined) {
    return a + b;
  } else if (a != undefined && b == undefined) {
    return a + 0;
  } else if (a == undefined && b != undefined) {
    return 0 + b;
  } else {
    return 0;
  }
}

function subtract(a, b) {
  if (a != undefined && b != undefined) {
    return a - b;
  } else if (a != undefined && b == undefined) {
    return a - 0;
  } else if (a == undefined && b != undefined) {
    return b - 0;
  } else {
    return 0;
  }
}

function divide(a, b) {
  switch (b) {
    case 0:
      throw new Error('An explanatory error message');
    default:
      return a / b;
  }
}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
