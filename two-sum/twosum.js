const arr = [3, 7, 11, 15];

// Two Sum return indices O(n^2)
const twoSumBrute = (arr, sum) => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[j] === sum - arr[i]) {
        return [i, j];
      }
    }
  }
  return `Error no two numbers in ${arr} for sum: ` + sum;
};

// Two Sum return indices O(1)
const twoSumTwoPassHash = (arr, sum) => {
  const map = new Map();
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    map.set(arr[i], i);
  }
  for (let i = 0; i < len; i++) {
    let complement = sum - arr[i];
    if (map.has(complement) && map.get(complement) != i) {
      return [i, map.get(complement)];
    }
  }
  return `Error no two numbers in ${arr} for sum: ` + sum;
};

const twoSumHashTable = (arr, sum) => {
  const hashMap = new Map();
  let i = 0;
  let len = arr.length;

  for (i = 0; i < len; i++) {
    let currItem = arr[i];
    let counterpart = sum - currItem;   

    if (hashMap.has(counterpart)) {      
      return [hashMap.get(counterpart), i];
    }
    hashMap.set(arr[i], i);
  }
  return `Error no two numbers in ${arr} for sum: ` + sum;
};
