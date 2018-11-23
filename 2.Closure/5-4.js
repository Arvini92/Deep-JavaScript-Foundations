var o = { bar: "bar"};

export function bar() {
    return o.bar;
}

import { bar } from "foo.js";

bar();

import * as foo from "foo.js";

foo.bar();