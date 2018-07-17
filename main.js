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



function computeAverageOfNumbers(numbers) {
  let sum = 0;
  numbers.forEach(function(numbers) {
  sum += numbers;
  });
  return sum/numbers.length;
}
  
function repeat(fn, n) {
  for (let i = 0; i < n; i++) {
    fn();
  }
};


function hello() {
  console.log("Hello " + "world"); 
}

function goodbye() {
  console.log("Goodbye " + "world");
}

repeat(hello, 5);
repeat(goodbye, 5);



function filter(arr, fn) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i]) === 'true') {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}
