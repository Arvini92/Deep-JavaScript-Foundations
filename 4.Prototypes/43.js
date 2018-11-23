function Foo(who) {
    this.me = who;
}
Foo.prototype.indentify = function() {
    return "I am " + this.me;
};

Foo.prototype.speak = function() { 
    console.log("Hello, " + 
        this.indentify() +  //super unicorn magic
    ".");
};

var a1 = new Foo("a1");
a1.speak(); //"Hello, I am a1"

