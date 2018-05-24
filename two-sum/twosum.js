// Two Sum return indices O(n^2)
const twoSumBrute = (arr, target) => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[j] === target - arr[i]) {
        return [i, j];
      }
    }
  }
  return `Error no two numbers in ${arr} for sum: ` + target;
};

const arr = [3, 7, 11, 15];