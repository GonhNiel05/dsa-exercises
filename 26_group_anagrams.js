/**
 * Problem: 26. Group Anagrams
 * Link: https://leetcode.com/problems/group-anagrams/
 * Guessed Category: Hash Table / String / Sorting
 *
 * Idea & Dry Run:
 * - Các chuỗi là anagram của nhau sẽ có cùng dạng sau khi tách ký tự, sắp xếp và ghép lại thành key 
 *   (ví dụ: "eat", "tea", "ate" đều có key là "aet").
 * - Dùng Map lưu key -> danh sách các từ tương ứng.
 * - Duyệt từng word trong strs: nếu key đã tồn tại trong Map thì push word vào mảng đó, chưa có thì tạo cặp [word] mới.
 * - Cuối cùng chuyển map.values() thành mảng hai chiều bằng Array.from(map.values()).
 */

// Approach 1: Sorted String Key + Hash Map
// Time Complexity: O(n * k log k) (n là số từ, k là độ dài trung bình của mỗi từ)
// Space Complexity: O(n * k)
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = new Map();

  for (let word of strs) {
    let key = word.split("").sort().join("");

    if (map.has(key)) map.get(key).push(word);
    else map.set(key, [word]);
  }

  return Array.from(map.values());
};