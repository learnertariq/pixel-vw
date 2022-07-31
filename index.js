import clipboardy from "clipboardy";
const viewportWidth = parseInt(process.argv[2]);
const pixelToConvert = parseFloat(process.argv[3]);
const vw = (pixelToConvert * 100) / viewportWidth;
const vwFixedTo4 = vw.toFixed(4);

clipboardy.writeSync(vwFixedTo4 + "vw");
console.log(">>>>>", pixelToConvert + "px => ", vwFixedTo4 + "vw");
