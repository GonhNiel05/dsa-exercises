/**
 * Problem: 23. Valid Palindrome
 * Link: https://leetcode.com/problems/valid-palindrome/
 * Guessed Category: Two Pointers / String
 *
 * Idea & Dry Run:
 * - Chuyển toàn bộ chuỗi về chữ thường (toLowerCase()) và loại bỏ mọi ký tự không phải chữ cái hoặc chữ số (replace(/[^a-z0-9]/g, "")).
 * - Đặt hai con trỏ left ở đầu chuỗi và right ở cuối chuỗi.
 * - Lặp khi left < right: nếu s[left] !== s[right] thì trả về false ngay; ngược lại dịch left++ và right--.
 * - Nếu duyệt hết vòng lặp không lệch ký tự nào thì trả về true.
 */

// Approach 1: Normalize String + Two Pointers
// Time Complexity: O(n) | Space Complexity: O(n) (chuỗi sau khi chuẩn hóa)
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};