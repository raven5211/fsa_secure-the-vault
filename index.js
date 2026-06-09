const code1 = 7 + 3;
const code2 = (81 - 1) / 2;
const code3 = 79 % 40;
const message = "The vault has been secured. The combination is:";
const codeA = code1 + "-" + code2 + "-" + code3;
const codeB = `${code1}-${code2}-${code3}`;

console.log(`${message} ${codeA} | ${codeB}`);
