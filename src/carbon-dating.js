const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if ( typeof sampleActivity != 'string' ||
    isNaN(sampleActivity) ||
    isNaN(parseFloat(sampleActivity)) ||
    parseFloat(sampleActivity) > 15 ||
    parseFloat(sampleActivity) <= 0) {
    return false;
  }
  sampleActivity = parseFloat(sampleActivity);
  let kValue = 0.693/HALF_LIFE_PERIOD;
  return Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/kValue);
};
