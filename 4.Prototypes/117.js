class A {
    one() { console.log("one:A"); }
    two() { console.log("two:A"); }
}

var B = Object.assign(Object.create(A.prototype),{
    foo() {
        this.one();
        super.two(); //error, two doesn't exist
    }
});

B.foo();