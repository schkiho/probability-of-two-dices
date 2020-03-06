// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.on('line', line => {
//   let nums = line.split(' ');
//   let N = parseInt(nums[0]);
//   let M = parseInt(nums[1]);
getProbability = (N, M) => {
  let maxSum = N + M;
  let minSum = 2;
  let middleTerm = [];

  const getMiddleTerm = () => {
    let output = [];
    let factor = Math.abs(N - M);

    let startIndex = Math.round((maxSum - 1 - factor) / 2 - 0.5);
    let endIndex = startIndex + factor + 1;

    for (let k = minSum; k <= maxSum; k++) {
      output.push(k);
    }

    let totalOutput = output.slice(startIndex, endIndex);

    return totalOutput;
  };

  middleTerm = getMiddleTerm();

  let res = middleTerm.join('\n');

  console.log(res);
};

getProbability(6, 4);
