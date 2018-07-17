function max(numbers) {
  let largestNumber = numbers[0];
  let i = 0; 

  while (i < numbers.length) {
    if (numbers[i] > largestNumber) {
      largestNumber = numbers[i];
    }
    i++;
    }
    return largestNumber;
  }

let sum = 0;

function computeAverageOfNumbers(numbers) {
  numbers.forEach(function(numbers) {
  sum += numbers;
  });
  return sum/numbers.length;
}
  

