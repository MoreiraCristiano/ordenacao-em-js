import {
  random_arr1,
  random_arr2,
  random_arr3,
  random_arr4,
} from "./random.js";

function bubblesort(itens) {
  let swap;
  let last = itens.length - 1;
  do {
    swap = false;
    for (let i = 0; i < last; i++) {
      if (itens[i] > itens[i + 1]) {
        [itens[i], itens[i + 1]] = [itens[i + 1], itens[i]];
        swap = true;
      }
    }
    last--;
  } while (swap);
  return itens;
}

/**
 * Executa a funcao para o primeiro array (100)
 */
// {
//   async function orderAndCountTime() {
//     const initTime = new Date().getTime();
//     const ordered_arr1 = await bubblesort(random_arr1);
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
//     const ordered_arr2 = await bubblesort(random_arr2);
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
//     const ordered_arr3 = await bubblesort(random_arr3);
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
    const ordered_arr4 = await bubblesort(random_arr4);
    const finalTime = new Date().getTime();
    const totalTime = finalTime - initTime;
    console.log(`Time for 100000: ${totalTime}`);
  }
  orderAndCountTime();
}
