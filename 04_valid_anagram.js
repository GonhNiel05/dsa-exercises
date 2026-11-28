/**
 * Problem: 4. Valid Anagram
 * Link: https://leetcode.com/problems/valid-anagram/
 * Guessed Category: Hash Table / String / Sorting
 *
 * Idea & Dry Run:
 * - Hai chuỗi s và t là anagram của nhau nếu có cùng độ dài và cùng số lượng từng ký tự.
 * - Cách 1 (Frequency Map): Lọc nhanh độ dài khác nhau trước, đếm tần suất từng ký tự của s và t bằng Map,
 *   so sánh kích thước Map và số lần xuất hiện của từng ký tự.
 * - Cách 2 (Sorting): Tách chuỗi thành mảng ký tự, sắp xếp theo thứ tự tăng dần rồi nối lại,
 *   nếu khớp nhau hoàn toàn thì là anagram.
 */

// Approach 1: Frequency Map
// Time Complexity: O(n) | Space Complexity: O(1) (tối đa số ký tự bảng chữ cái/ASCII cố định)
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagramMap = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let count_s = new Map();
  let count_t = new Map();

  for (let char of s) {
    count_s.set(char, (count_s.get(char) ?? 0) + 1);
  }

  for (let char of t) {
    count_t.set(char, (count_t.get(char) ?? 0) + 1);
  }

  if (count_s.size !== count_t.size) return false;

  for (let [char, count] of count_s) {
    if (count_t.get(char) !== count) {
      return false;
    }
  }

  return true;
};

// Approach 2: Sorting
// Time Complexity: O(n log n) | Space Complexity: O(n) (mảng ký tự sau khi split/sort)
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagramSort = function (s, t) {
  s = s.split("").sort().join("");
  t = t.split("").sort().join("");

  return s === t;
};