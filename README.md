# DSA Exercises (JavaScript)

Repository lưu trữ bài tập cấu trúc dữ liệu và thuật toán giải bằng **JavaScript**, phục vụ quá trình tự luyện và nộp link bài làm vào bảng tính cá nhân trên Google Sheets.

## Cách tiếp cận & quy ước làm bài

- **Ngôn ngữ chính:** JavaScript.
- **Quy trình:** Đoán dạng bài trước khi giải -> nháp ý tưởng/biến -> code và chạy test trên LeetCode -> lưu file vào repo -> cập nhật link vào Google Sheets.
- **Đặt tên file:** `<No>_<ten_bai_viet_thuong_co_dau_gach_duoi>.js` theo số thứ tự trong danh sách bài tập (ví dụ: `01_find_the_difference.js`).
- **Ghi chú trong file:** Mỗi file có phần comment đầu file ghi dạng bài tự đoán, ý tưởng chính, độ phức tạp Time/Space và các hướng giải (nếu có nhiều cách).

## Danh sách bài đã nộp

| # | Exercise | File | Guessed Category / Approach | Time | Space |
|---|---|---|---|---|---|
| 1 | Find the Difference | [`01_find_the_difference.js`](./01_find_the_difference.js) | Hash Table / String — Frequency `Map` | $O(n)$ | $O(1)$ |
| 4 | Valid Anagram | [`04_valid_anagram.js`](./04_valid_anagram.js) | Hash Table / String / Sorting — Frequency `Map` & Sort | $O(n)$ / $O(n \log n)$ | $O(1)$ / $O(n)$ |
| 9 | Two Sum | [`09_two_sum.js`](./09_two_sum.js) | Array / Hash Table — Brute Force & One-pass `Map` | $O(n^2)$ / $O(n)$ | $O(1)$ / $O(n)$ |
| 23 | Valid Palindrome | [`23_valid_palindrome.js`](./23_valid_palindrome.js) | Two Pointers / String — Regex Normalize + Two Pointers | $O(n)$ | $O(n)$ |
| 26 | Group Anagrams | [`26_group_anagrams.js`](./26_group_anagrams.js) | Hash Table / String / Sorting — Sorted Key + `Map` | $O(n \cdot k \log k)$ | $O(n \cdot k)$ |