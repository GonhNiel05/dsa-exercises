/**
 * Problem: 1. Find the Difference
 * Link: https://leetcode.com/problems/find-the-difference/
 * Guessed Category: Hash Table / String / Bit Manipulation
 *
 * Idea & Dry Run:
 * - Chuỗi t có thêm đúng 1 ký tự so với s (đã bị xáo trộn).
 * - Đếm số lần xuất hiện của từng ký tự trong s, sau đó duyệt qua t để trừ dần.
 * - Ký tự nào làm count về 0 (hoặc chưa từng xuất hiện) chính là ký tự dư ra.
 */

// Approach 1: Frequency Map
// Time Complexity: O(n)
// Space Complexity: O(1) (vì chỉ có 26 chữ cái)
var findTheDifference = function(s, t) {
    const map = new Map();

    for (const char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    for (const char of t) {
        if (!map.get(char)) return char;
        map.set(ch, map.get(char) -1);
    }
    return "";
}