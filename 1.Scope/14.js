(function diff(x, y) {
    if (x > y) {
        var tmp = x;
        x = y;
        y = tmp;
    }
    console.log("tmp", tmp);
    return y - x;
})(2, 1);

(function diff2(x, y) {
    if (x > y) {
        let tmp = x;
        x = y;
        y = tmp;
    }
    //console.log("tmp", tmp);
    return y - x;
})(2, 1);