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

// Array Leaders
// let arr = [16, 17, 4, 3, 5, 2];
// let result = [];
// for (let i = 0; i < arr.length; i++) {
//   let count = true;
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[j] > arr[i]) {
//       count = false;
//       break;
//     }
//   }
//   if (count) {
//     result.push(arr[i]);
//   }
// }
// console.log(result);

// --------------------------------------------------------------------------------------------------------------

// Duplicates in a Limited Range Array
// let arr = [2, 3, 1, 2, 3];
// let result = [];
// let dup = [];
// for (let i = 0; i < arr.length; i++) {
//   if (result.includes(arr[i])) {
//     dup.push(arr[i]);
//   } else {
//     result.push(arr[i]);
//   }
// }
// console.log(dup);

// --------------------------------------------------------------------------------------------------------------

// First Occurrence in Sorted
// let arr = [11, 22, 33, 44, 55];
// function Appears(num) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === num) {
//       return i;
//       break;
//     }
//   }
//   return -1;
// }
// console.log(Appears(22));

// --------------------------------------------------------------------------------------------------------------

// Equilibrium Point
// function equilibriumIndex(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let leftSum = 0;
//     let rightSum = 0;
//     for (let j = 0; j < i; j++) {
//       leftSum += arr[j];
//     }
//     for (let j = i + 1; j < arr.length; j++) {
//       rightSum += arr[j];
//     }
//     if (leftSum === rightSum) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(equilibriumIndex([-7, 1, 5, 2, -4, 3, 0]));

// --------------------------------------------------------------------------------------------------------------

// Two Sum - Pair with Given Sum
// let arr = [11];
// function Addition(num) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] + arr[i + 1] == num) {
//       return true;
//       console.log(arr[i], arr[i + 1]);
//     }
//   }
//   return false;
// }
// console.log(Addition(11));

// --------------------------------------------------------------------------------------------------------------

// Two sum -Pairs with 0 Sum
// let arr = [6, 1, 8, 0, 4, -9, -1, -10, -6, -5];
// let result = [];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] + arr[j] == 0) {
//       result.push([arr[i], arr[j]]);
//     }
//   }
// }
// console.log(result);

// --------------------------------------------------------------------------------------------------------------

// Union of Arrays with Duplicates
// let a = [1, 2, 3, 2, 1];
// let b = [3, 2, 2, 3, 3, 2];
// let set = new Set(a, b);
// console.log([...set]);

// let a = [1, 2, 1, 1, 2];
// let b = [2, 2, 1, 2, 1];
// let c = [];
// for (let i = 0; i < a.length; i++) {
//   if (!c.includes(a[i])) {
//     c.push(a[i]);
//   }
// }
// for (let j = 0; j < b.length; j++) {
//   if (!c.includes(b[j])) {
//     c.push(b[j]);
//   }
// }
// console.log(c);

// --------------------------------------------------------------------------------------------------------------

// Move All Zeroes to End
// let arr = [1, 2, 0, 4, 3, 0, 5, 0];
// let result = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] !== 0) {
//     result.push(arr[i]);
//   }
// }
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == 0) {
//     result.push(arr[i]);
//   }
// }
// console.log(result);

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
