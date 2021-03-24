const { prototype } = require("../extensions/custom-error");
const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: "",
  getLength() {
    return this.chain[this.chain.length - 1] != "~"
      ? this.chain.split("~~").length
      : this.split.split("~~").length - 1;
  },
  addLink(value) {
    if (value === undefined) value = "( )";
    else value = `( ${value} )`;
    this.chain += `${value}~~`;
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position)) {
      this.chain = "";
      throw new Error("Not an integer, man!!!");
    }
    let arr = this.chain.split("~~");
    if (position > arr.length - 1 || position < 1) {
      this.chain = "";
      throw new Error("OUT OF RAnGE!");
    }
    arr.splice(position - 1, 1);
    this.chain = arr.join("~~");
    return this;
  },
  reverseChain() {
    let reversedChain = this.chain.split("~~").reverse().join("~~");
    this.chain =
      reversedChain[0] != "~" ? reversedChain : reversedChain.slice(2) + "~~";
    return this;
  },
  finishChain() {
    let chain = this.chain.slice(0, -2);
    this.chain = "";
    return chain;
  },
};

module.exports = chainMaker;
