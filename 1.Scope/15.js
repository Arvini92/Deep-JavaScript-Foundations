function repeat(fn, n) {
    var result;

    for (let i = 0; i < n; i++) {
        result = fn( result, i);
    }
    console.log("i", i);
    
    return result;
}

function repeat(fn, n) {
    var result;

    for (var i = 0; i < n; i++) {
        result = fn( result, i);
    }
    console.log("i", i);
    
    return result;
}