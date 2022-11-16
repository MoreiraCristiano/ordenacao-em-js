import {
  random_arr1,
  random_arr2,
  random_arr3,
  random_arr4,
} from "./random.js";

function quicksort(array) {
  if (array.length <= 1) return array;

  const pivot = array[0];

  const head = array.filter((n) => n < pivot);
  const equal = array.filter((n) => n === pivot);
  const tail = array.filter((n) => n > pivot);

  return quicksort(head).concat(equal).concat(quicksort(tail));
}

/**
 * Executa a funcao para o primeiro array (100)
 */
// {
//   async function orderAndCountTime() {
//     const initTime = new Date().getTime();
//     const ordered_arr1 = await quicksort(random_arr1);
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
//     const ordered_arr2 = await quicksort(random_arr2);
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
//     const ordered_arr3 = await quicksort(random_arr3);
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
    const ordered_arr4 = await quicksort(random_arr4);
    const finalTime = new Date().getTime();
    const totalTime = finalTime - initTime;
    console.log(`Time for 100000: ${totalTime}`);
  }
  orderAndCountTime();
}
