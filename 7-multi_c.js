let args = process.argv[2];
let x = Number(args);

if (args === undefined || isNaN(x)) {
    console.log("Missing number of occurences");
} else {
    for (i=0; i<x; i++){
    console.log("C is fun")
}

}

