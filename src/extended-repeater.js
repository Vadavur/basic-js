const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (options.addition === undefined) options.addition = "";
  if (options.separator === undefined) options.separator = "+";
  if (options.additionSeparator === undefined) options.additionSeparator = "|";
  if (options.repeatTimes === undefined) {
    options.repeatTimes = parseInt("1", 10);
  }
  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = parseInt("1", 10);
  }
  let arr = [];
  let addArr = [];
  for (let j = 0; j < options.additionRepeatTimes; j++) {
    addArr.push(`${String(options.addition)}`);
  }
  let addStr = addArr.join(`${String(options.additionSeparator)}`);
  for (let i = 0; i < options.repeatTimes; i++) {
    arr.push(`${String(str)}${addStr}`);
  }
  return arr.join(`${String(options.separator)}`);
};
