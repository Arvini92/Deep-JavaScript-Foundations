for (var i=1; i<5; i++) {
    let j = i;
    setTimeout(function() {
        console.log("j: " + j);
    }, j * 1000);
}