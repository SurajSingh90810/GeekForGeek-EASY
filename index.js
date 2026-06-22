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
