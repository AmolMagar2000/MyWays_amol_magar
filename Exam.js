function fizzBuzz(phoneNumber) {
    let digits = phoneNumber.split('').map(Number); // Convert the phone number to an array of digits
    let sum = digits.reduce((acc, val) => acc + val, 0); // Calculate the sum of the digits
    for (let i = 1; i <= sum; i++) {
      if (i % 4 === 0 && i % 5 === 0) {
        process.stdout.write('FizzBuzz ');
      } else if (i % 4 === 0) {
        process.stdout.write('Fizz ');
      } else if (i % 5 === 0) {
        process.stdout.write('Buzz ');
      } else {
        process.stdout.write(i + ' ');
      }
    }
  }
  fizzBuzz('8669401417');