const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!(Array.isArray(members))) return false;  
  members = members.filter(element => typeof element === 'string');
  if (members.length == 0) return false;
  return ((members.map(element => (element.replace(/ /g, ''))[0].toUpperCase())).sort()).join('');
};
