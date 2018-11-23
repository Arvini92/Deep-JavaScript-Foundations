class A {
    one() { console.log("one:A"); }
    two() { console.log("two:A"); }
}

var B = {
    __proto__: A.prototype,
    foo() {
        this.one();
        super.two();
    },
    bar: function() {
        this.one();
        super.two(); //syntax error!
    }
}