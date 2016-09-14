// Regular Expression Exercise
// Short cuts
/**
 * \d - [0-9]        any digit
 * \w - [A-Za-z_]    word character
 * \s - [ \t\r\n\f]  whitespace

 Capitalize the shortcut escape characters to negate them:

 * \D - [^0-9]        not a digit
 * \W - [^A-Za-z_]    not a word character
 * \S - [^ \t\r\n\f]  not whitespace

 ^ begining - first
 $ end - last

 [^something] negate

 *  zero or more times
 +  one or more times
 ?  zero or one times
 **/

module.exports = function (str) {
  //return /^[^\d][^A-Z]/.test(str);
  //return /\.$/.test(str);
  //return /^\d+\.jpe?g$/.test(str);
  //return str.split(/\s*,\s*/);
  var m = /x=(\d+)/.exec(str);
  return m ? m[1] : null;
};
