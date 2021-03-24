const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        let innerDepth = this.calculateDepth(arr[i]);
        if (innerDepth + 1 > depth) depth = innerDepth + 1;
      }
    }
    return depth;
  }
};
