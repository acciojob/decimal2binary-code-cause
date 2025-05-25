function decimalToBinary(n) {
  //Write you code here
   let binary = "";
  if (n === 0) {
    return "0";
  }

  while (n > 0) {
    binary = (n % 2) + binary;
    n = Math.floor(n / 2);
  }

  return binary;
}

window.decimalToBinary = decimalToBinary;
