const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  if (date == undefined) return 'Unable to determine the time of year!';
  if (Object.prototype.toString.call(date) !== '[object Date]') throw new Error('La Errorrrrr!!!');
  let month = date.getMonth();
  if (month < 0 || month > 11) return 'Unable to determine the time of year!';
  switch (true) {
    case month < 2:
      return 'winter';
    break;
    case month < 5:
      return 'spring';
    break;
    case month < 8:
      return 'summer';
    break;
    case month < 11:
      return 'autumn';
    break;
    default:
      return 'winter';
      break;
  }
};