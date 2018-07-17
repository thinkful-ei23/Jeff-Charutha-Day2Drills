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

  function min(numbers) {
    let currentMin = numbers[0];
    let i = 0;
    while (i < numbers.length) {
        if (numbers[i] < currentMin) {
            currentMin = numbers[i];
        }
        i++;
    }

  //_________________________________________________________________



function computeAverageOfNumbers(numbers) {
  let sum = 0;
  numbers.forEach(function(numbers) {
  sum += numbers;
  });
  return sum / numbers.length;
}

//___________________________________________________________________
  
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

//___________________________________________________________


function filter(arr, fn) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}
console.log(filter(names, name => name[0] === 'R'));

//_____________________________________________________________



function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;
  return function(location) {
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    
    if (warningCounter === 1) {
      console.log(`The ${typeOfWarning} hazard alert has triggerd ${warningCounter} time today!`)
  }
  else {console.log(`The ${typeOfWarning} hazard alert has triggerd ${warningCounter} time(s) today!`)}
}
  }


const rocksWarning = hazardWarningCreator('Rocks on the Road');
const lowBridgeWarning = hazardWarningCreator('Low Bridge Ahead');
const constructionWork = hazardWarningCreator('Construction Ahead');

rocksWarning('Chevy Chase Boulevard');
rocksWarning('Chevy Chase Boulevard');
lowBridgeWarning('MountainView Road');
constructionWork('I-495');

//____________________________________________________________________

let moves = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

filteredMoves = moves.filter(moves => moves[0] >= 0 && moves[1] >= 0);

console.log(filteredMoves);

totalMoves = moves.map(moves => moves[0] + moves[1]);

console.log(totalMoves);

totalMoves.forEach(totalMoves => {console.log(totalMoves)});

const input = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';

//___________________________________________________________________________

const message = input.split(' ').reduce((resultString, word) => {
       if (word.length === 3) {
           return resultString + ' ';
       }

       else {
           return resultString + word[word.length - 1].toUpperCase();
       }
   }, '');
console.log(message);



