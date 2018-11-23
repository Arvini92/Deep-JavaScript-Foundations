class A {
    one() { console.log("one:A"); }
    two() { console.log("two:A"); }
}

class B {
    one() { console.log("one:B"); }
    two() { console.log("two:B"); }
}

class C extends A {
    foo() {
        this.one();
        super.two();
    }
}

var x = new C();

x.foo(); // one:A two:A

x.foo.call(B) // one:B two:A  <-- Oops!