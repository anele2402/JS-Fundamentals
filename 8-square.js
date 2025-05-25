let args = process.argv[2];
let x = Number(args);

if (args === undefined || isNaN(x)) {
    console.log("Missing size");
} else {
    for (let i = 0; i < x; i++) {
        let row = "";
        for (let j = 0; j < x; j++) {
            row += "X";
        }
        console.log(row);
    }
}

