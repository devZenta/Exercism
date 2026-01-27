export function format(name: unknown, inputNumber: unknown): unknown {
  let number = String(inputNumber);
  let lengthOfNumber = number.length;
  
  let lastDigit = number.at(lengthOfNumber - 1);
  let secondLastDigit = number.at(lengthOfNumber - 2);

  if (lengthOfNumber >= 2 && secondLastDigit === "1") {
    return `${name}, you are the ${number}th customer we serve today. Thank you!`;
  }
  else if (lastDigit === "1") {
    return `${name}, you are the ${number}st customer we serve today. Thank you!`;
  }
  else if (lastDigit === "2") {
    return `${name}, you are the ${number}nd customer we serve today. Thank you!`;
  }
  else if (lastDigit === "3") {
    return `${name}, you are the ${number}rd customer we serve today. Thank you!`;
  }
  else {
    return `${name}, you are the ${number}th customer we serve today. Thank you!`;
  }
}
