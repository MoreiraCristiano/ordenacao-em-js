import {
  random_arr1,
  random_arr2,
  random_arr3,
  random_arr4,
} from "./random.js";

function merge(left, right) {
  let arr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  return [...arr, ...left, ...right];
}

function mergeSort(array) {
  const half = array.length / 2;

  if (array.length < 2) {
    return array;
  }

  const left = array.splice(0, half);
  return merge(mergeSort(left), mergeSort(array));
}

/**
 * Executa a funcao para o primeiro array (100)
 */
// {
//   async function orderAndCountTime() {
//     const initTime = new Date().getTime();
//     const ordered_arr1 = await mergeSort(random_arr1);
//     const finalTime = new Date().getTime();
//     const totalTime = finalTime - initTime;
//     console.log(`Time for 100: ${totalTime}`);
//   }
//   orderAndCountTime();
// }

/**
 * Executa a funcao para o primeiro array (1000)
 */
// {
//   async function orderAndCountTime() {
//     const initTime = new Date().getTime();
//     const ordered_arr2 = await mergeSort(random_arr2);
//     const finalTime = new Date().getTime();
//     const totalTime = finalTime - initTime;
//     console.log(`Time for 1000: ${totalTime}`);
//   }
//   orderAndCountTime();
// }

/**
 * Executa a funcao para o primeiro array (10000)
 */
// {
//   async function orderAndCountTime() {
//     const initTime = new Date().getTime();
//     const ordered_arr3 = await mergeSort(random_arr3);
//     const finalTime = new Date().getTime();
//     const totalTime = finalTime - initTime;
//     console.log(`Time for 10000: ${totalTime}`);
//   }
//   orderAndCountTime();
// }

/**
 * Executa a funcao para o primeiro array (100000)
 */
{
  async function orderAndCountTime() {
    const initTime = new Date().getTime();
    const ordered_arr4 = await mergeSort(random_arr4);
    const finalTime = new Date().getTime();
    const totalTime = finalTime - initTime;
    console.log(`Time for 100000: ${totalTime}`);
  }
  orderAndCountTime();
}
