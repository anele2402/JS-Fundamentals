    let argx = process.argv[2];
    let argy= process.argv[3];

    let first = Number(argx);
    let scnd = Number(argy);

function add(argx , argy){

    if (argx === undefined || argy=== undefined || isNaN(first) || isNaN(scnd)) {
        console.log("Not a valid number");
    } else {
        console.log(first + scnd);
    }
}
add(argx,argy)

