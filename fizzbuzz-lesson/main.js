//if the number is divisible by 3 = Fizz
//if the number is divisible by 5 = Buzz
//if the number is divisible by 3 and 5 = FizzBuzz
//if the number isn't divisible by 3 and 5 = Returns the number that was prompeted
// TODO: Check if the number is a number -- DONE
// TODO: Make it works only in between 0 and 100 -- DONE

function fizzBuzz(number) {
  let result;

  if (number < 0 || number > 100) {
    result = "Type a number between 0 and 100";
    return result;
  }

  if (number % 3 == 0 && number % 5 == 0) {
    result = "FizzBuzz";
    return result;
  }

  if (number % 5 == 0) result = "Buzz";

  if (number % 3 == 0) result = "Fizz";

  if (result === undefined) {
    result = `This number is not divisible by 5 or 3, the number was ${number}`;
  }

  if (number !== Number) result = "That's not a number";

  return result;
}

console.log(fizzBuzz(100));
