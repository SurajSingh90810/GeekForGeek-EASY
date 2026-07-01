// Missing in Array

// function MissingArray(arr) {
//   let max = Math.max(...arr);
//   let result = [];
//   for (let i = 1; i <= max; i++) {
//     if (!arr.includes(i)) {
//       result.push(i);
//     }
//     if (result.includes(null) && result.length === 0) {
//       result.push(max + 1);
//     }
//   }
//   return result;
// }
// console.log(MissingArray([1, 8]));
// console.log(MissingArray([1]));

// --------------------------------------------------------------------------------------------------------------

// Second Largest

// function SecondLargest(arr) {
//   let result = [];
//   arr.sort((a, b) => b - a);
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         result.push(arr[j]);
//       }
//       break;
//     }
//   }
//   if (result.length === 0) {
//     return -1;
//   }
//   return result.toString();
// }
// console.log(SecondLargest([10, 5, 10]));

// --------------------------------------------------------------------------------------------------------------

// Check Equal Arrays

// let a = [1, 2, 5, 4, 0];
// let b = [2, 4, 5, 0, 1];
// function Compare(num1, num2) {
//   for (let i = 0; i < a.length; i++) {
//     if (b.includes(a[i]) && b.length == a.length) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(Compare(a, b));

// --------------------------------------------------------------------------------------------------------------

// Check if array is sorted

// let a = [10, 20, 60, 30, 40, 50];
// let c = [...a].sort((a, b) => a - b);
// function SortCompare(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== c[i]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(SortCompare(a));

// let arr = [10, 20, 30, 40, 50];
// function isSorted(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] > arr[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isSorted(arr));

// --------------------------------------------------------------------------------------------------------------

// Number of occurrence

// let arr = [8, 9, 10, 12, 12, 12];
// function NumLength(arr, num) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == num) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(NumLength(arr, 12));

// --------------------------------------------------------------------------------------------------------------

// Frequencies in a Limited Array

// let arr = [2, 3, 2, 3, 5];
// let map = new Map();
// let n = arr.length;
// for (let num of arr) {
//   map.set(num, (map.get(num) || 0) + 1);
// }
// let result = [];
// for (let i = 1; i <= n; i++) {
//   result.push(map.get(i) || 0);
// }
// console.log(result);
// console.log(map);

// --------------------------------------------------------------------------------------------------------------

// Product array puzzle

// let arr = [12, 0];
// let result = [];
// for (let i = 0; i < arr.length; i++) {
//   let product = 1;
//   for (let j = 0; j < arr.length; j++) {
//     if (i !== j) {
//       product *= arr[j];
//     }
//   }
//   result.push(product);
// }
// console.log(result);

// --------------------------------------------------------------------------------------------------------------
