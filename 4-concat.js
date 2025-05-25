let argx = process.argv[2];
let argy = process.argv[3];

// Check for undefined or empty string
if (!argx) {
    arg1 = "undefined";
}
if (!argy) {
    arg2 = "undefined";
}

console.log(argx + " "+"is" + " " + argy);
