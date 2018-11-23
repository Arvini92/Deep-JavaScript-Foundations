for (var i = 0; i< 5; i++) {
    (function IIFE() {
        //new j for each loop
        var j = i;
        console.log(j);
    })();
}