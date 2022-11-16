import {
  random_arr1,
  random_arr2,
  random_arr3,
  random_arr4,
} from "./random.js";

function insertionsort(vetor) {
  for (let i = 1; i < vetor.length; i++) {
    let current = vetor[i];
    let j;

    for (j = i - 1; j >= 0 && vetor[j] > current; j--) {
      vetor[j + 1] = vetor[j];
    }
    vetor[j + 1] = current;
  }
  return vetor;
}

/**
 * Executa a funcao para o primeiro array (100)
 */
// {
//   async function orderAndCountTime() {
//     const initTime = new Date().getTime();
//     const ordered_arr1 = await insertionsort(random_arr1);
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
//     const ordered_arr2 = await insertionsort(random_arr2);
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
//     const ordered_arr3 = await insertionsort(random_arr3);
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
    const ordered_arr4 = await insertionsort(random_arr4);
    const finalTime = new Date().getTime();
    const totalTime = finalTime - initTime;
    console.log(`Time for 100000: ${totalTime}`);
  }
  orderAndCountTime();
}
