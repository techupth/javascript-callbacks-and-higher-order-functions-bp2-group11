//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
return operation(array).length >= 5
};

function filterArray(array){
  let newArray = [];
  for(let i=0; i<array.length; i++)
  {
    if(array[i]>70){newArray.push(array[i])};
  }
  return newArray;
};


const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = atLeastFive(studentScoresRoom1,filterArray);
let scoreRoom2Result = atLeastFive(studentScoresRoom2,filterArray);;
let scoreRoom3Result = atLeastFive(studentScoresRoom3,filterArray);
