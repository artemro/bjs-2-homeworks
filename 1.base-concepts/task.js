"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4*a*c; 
  if (d < 0) {
    return arr;
  }
  if (d == 0) {
    arr.push(-b/(2*a));
  }
  if (d > 0) {
    arr.push((-b + Math.sqrt(d) )/(2*a), ( -b - Math.sqrt(d) )/(2*a));
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let p = percent / 1200;
  let s = amount - contribution; 
  let monthPayment = s * (p + (p / (Math.pow( 1 + p, countMonths) - 1))); 
  let totalPayment = monthPayment * countMonths;
  return parseFloat(totalPayment.toFixed(2));
}
