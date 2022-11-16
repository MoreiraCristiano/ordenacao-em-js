import {
  random_arr1,
  random_arr2,
  random_arr3,
  random_arr4,
} from "./random.js";

function selectionsort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    let tmp = arr[i];
    arr[i] = arr[min];
    arr[min] = tmp;
  }
  return arr;
}

/**
 * Executa a funcao para o primeiro array (100)
 */
// {
//   async function orderAndCountTime() {
//     const initTime = new Date().getTime();
//     const ordered_arr1 = await selectionsort(random_arr1);
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
//     const ordered_arr2 = await selectionsort(random_arr2);
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
//     const ordered_arr3 = await selectionsort(random_arr3);
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
    const ordered_arr4 = await selectionsort(random_arr4);
    const finalTime = new Date().getTime();
    const totalTime = finalTime - initTime;
    console.log(`Time for 100000: ${totalTime}`);
  }
  orderAndCountTime();
}
