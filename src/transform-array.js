const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("Oh, no! Not not an array again...");

  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] == "-") {
      switch (arr[i]) {
        case "--discard-next":
          i++;
          break;
        case "--discard-prev":
          if (arr[i - 1] != undefined && arr[i - 2] != "--discard-next") {
            newArr.pop();
          }
          break;
        case "--double-next":
          if (arr[i + 1] != undefined) newArr.push(arr[i + 1]);
          break;
        case "--double-prev":
          if (arr[i - 1] != undefined && arr[i - 2] != "--discard-next") {
            newArr.push(newArr[newArr.length - 1]);
          }
          break;
        default:
          newArr.push(arr[i]);
      }
    } else newArr.push(arr[i]);
  }
  return newArr;
};
