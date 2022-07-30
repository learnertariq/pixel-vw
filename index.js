import clipboardy from "clipboardy";
const input = parseFloat(process.argv[3]);
const viewportWidth = parseInt(process.argv[2]);
const vw = (input * 100) / viewportWidth;

clipboardy.writeSync(vw.toFixed(4) + "vw");
console.log(">>>>>", input + "px => ", vw.toFixed(4) + "vw");
