/**
 * Problem: 9. Two Sum
 * Link: https://leetcode.com/problems/two-sum/
 * Guessed Category: Array / Hash Table
 *
 * Idea & Dry Run:
 * - Tìm 2 chỉ số i, j khác nhau sao cho nums[i] + nums[j] === target.
 * - Cách 1 (Brute Force): Duyệt mọi cặp (i, j) với j > i, kiểm tra tổng bằng target.
 * - Cách 2 (One-pass Hash Map): Duyệt qua mảng, tại mỗi phần tử tính phần bù complement = target - nums[i].
 *   Nếu complement đã xuất hiện trong Map thì trả về [map.get(complement), i], ngược lại lưu nums[i] -> i vào Map.
 */

// Approach 1: Brute Force
// Time Complexity: O(n^2) | Space Complexity: O(1)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSumBruteForce = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};

// Approach 2: One-pass Hash Map
// Time Complexity: O(n) | Space Complexity: O(n)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSumHashMap = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }

  return [];
};