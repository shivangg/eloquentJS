/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// Given array nums = [-1, 0, 1, 2, -1, -4],

//   A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

let ascend = (a, b) => (a - b);

var threeSum = function (nums) {
  let triplets = [];
  nums.sort(ascend);
  // console.log(nums);

  for (let i = 0; i < nums.length - 2; i++) {
    let l = i + 1;
    let r = nums.length - 1;
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    while (l < r) {
      s = nums[i] + nums[l] + nums[r];
      if (s < 0) {
        l++;
      } else if (s > 0) {
        r--;
      } else {
        triplets.push([nums[i], nums[l], nums[r]]);
        while (l < r && nums[l] === nums[l + 1]) {
          l++;
        }
        while (l < r && nums[r] === nums[r - 1]) {
          r--;
        }
        l++;
        r--;
      }
    }
  }
  return triplets;
}

console.log(threeSum([-4, -1, -1, -1, 0, 1, 2]));
// console.log( threeSum([-1, 0, 1, 0]) );

// console.log(threeSum([-4, -3, -2, -1, 0, 1, 2, 5]));
