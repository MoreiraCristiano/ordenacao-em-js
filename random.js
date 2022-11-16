function between(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generate_arr(min, max) {
  let array1 = [];

  for (let i = 0; i < max; i++) {
    array1.push(between(min, max));
  }

  return array1;
}

const random_arr1 = generate_arr(0, 100);
const random_arr2 = generate_arr(0, 1000);
const random_arr3 = generate_arr(0, 10000);
const random_arr4 = generate_arr(0, 100000);

export { random_arr1, random_arr2, random_arr3, random_arr4 };
