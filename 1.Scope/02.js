//"use strict";

var foo = "bar";

function bar() {
    console.log("bar foo", foo);
    var foo = "baz";
}

function baz(foo) {
    console.log("baz foo", foo);
    foo = "bam";
    //console.log("baz bam", bam);
    bam = "yay";
}

//var bam;
bar();
baz();