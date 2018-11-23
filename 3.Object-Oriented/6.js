function foo() {
    return () => this.bar;
}

var bar = "bar1";
var o1 = { bar: "bar2", foo: foo};
var o2 = { bar: "bar3" };

var f1 = foo();
var f2 = o1.foo();
var f3 = foo.call(o2);

console.log(f1());
console.log(f2());
console.log(f3());

console.log(f1.call( o2 )); // bar1 <--- hmmmmm