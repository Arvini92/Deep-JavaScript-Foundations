function foo() {
    this.baz = "baz";
    console.log(this.bar + " " + baz);
}

var bar = "bar";
var baz = new foo();