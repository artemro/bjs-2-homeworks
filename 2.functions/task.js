function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let avg = arr[0];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] > max) {
      max = arr[i];
      continue;
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  };
  avg = parseFloat((sum / arr.length).toFixed(2)); 
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (!arr.length) return 0;
  const initialValue = 0;
  const sumArr = arr.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
  return sumArr;
}

function differenceMaxMinWorker(...arr) {
  if (!arr.length) return 0;
  let max = arr[0];
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      continue;
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  };
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (!arr.length) return 0;
  let oddSum = 0;
  let evenSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2) {
      oddSum += arr[i];
    } 
    else {
      evenSum += arr[i];
    }
  }
  return evenSum - oddSum;
}

function averageEvenElementsWorker(...arr) {
  if (!arr.length) return 0;
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      countEvenElement++;
      sumEvenElement += arr[i];
    }
  }
  return parseFloat((sumEvenElement / countEvenElement).toFixed(2));
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const value = func(...arrOfArr[i]);
    if (value > maxWorkerResult) {
      maxWorkerResult = value;
    }
  }
  return maxWorkerResult;
}
