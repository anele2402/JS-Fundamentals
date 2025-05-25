let args = process.argv[2];
let num = Number(args);

if (args === undefined || isNaN(num)) {
    console.log("Not a number");
} else {
    console.log("My number: " + num);
}
