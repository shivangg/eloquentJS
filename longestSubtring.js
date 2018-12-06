/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let longest = 0;
  let substring = "";
  for (let index = 0; index < s.length; index++) {
    let fountAt = substring.indexOf(s[index]);
    if (fountAt > -1) {
      if (substring.length > longest) {
        longest = substring.length;
      }
      substring = substring.slice(fountAt + 1);
      substring += s[index];
    } else {
      substring += s[index];
    }
  }
  return (longest > substring.length) ? longest : substring.length;
};

console.log(lengthOfLongestSubstring("dvdf"));
