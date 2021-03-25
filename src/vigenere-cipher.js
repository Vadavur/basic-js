const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(streight) {
    this.streight = streight === undefined || streight === true ? true : false;
  }
  encrypt(msg, key) {
    if (msg === undefined) throw new Error("No message to encrypt given!");
    if (key === undefined) throw new Error("No key given!");
    key = key.toLowerCase();
    msg = msg.toLowerCase();
    let encryptedMsg = "";
    let msgLength = msg.length;
    let keyIndexCorrection = 0;
    while (key.length <= msgLength) {
      key += key;
    }
    // if (key.length > msgLength) {
    //   key = key.slice(0, msgLength);
    // }
    for (let i = 0; i < msgLength; i++) {
      let msgCharCode = msg[i].charCodeAt(0);
      if (msgCharCode < 97 || msgCharCode > 122) {
        encryptedMsg += msg[i];
        keyIndexCorrection++;
      } else {
        let addedCharCode =
          msgCharCode + key[i - keyIndexCorrection].charCodeAt(0) - 97;
        if (addedCharCode > 122) addedCharCode -= 26;
        encryptedMsg += String.fromCharCode(addedCharCode);
      }
    }
    return this.streight === true
      ? encryptedMsg.toUpperCase()
      : encryptedMsg.toUpperCase().split("").reverse().join("");
  }

  decrypt(encMsg, key) {
    if (encMsg === undefined) throw new Error("No message to decrypt given!");
    if (key === undefined) throw new Error("No key given!");
    encMsg = encMsg.toLowerCase();
    key = key.toLowerCase();
    let decryptedMsg = "";
    let encMsgLength = encMsg.length;
    let keyIndexCorrection = 0;
    while (key.length <= encMsgLength) {
      key += key;
    }
    // if (key.length > encMsgLength) {
    //   key = key.slice(0, encMsgLength);
    // }
    for (let i = 0; i < encMsgLength; i++) {
      let encMsgCharCode = encMsg[i].charCodeAt(0);
      if (encMsgCharCode < 97 || encMsgCharCode > 122) {
        decryptedMsg += encMsg[i];
        keyIndexCorrection++;
      } else {
        let addedCharCode =
          encMsgCharCode - key[i - keyIndexCorrection].charCodeAt(0) + 97;
        if (addedCharCode < 97) addedCharCode += 26;
        decryptedMsg += String.fromCharCode(addedCharCode);
      }
    }
    return this.streight === true
      ? decryptedMsg.toUpperCase()
      : decryptedMsg.toUpperCase().split("").reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;
