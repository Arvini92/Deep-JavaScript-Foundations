(function formatStr(str) {
    console.log("str1", str);
    { let prefix, reset;
        prefix = str.slice( 0, 3);
        rest = str.slice( 3 );
        str = prefix.toUpperCase() + rest;
        console.log("str2", str);
    }
    //console.log("prefix", prefix);
    if (/^FOO:/.test( str )) {
        return str;
    }
    console.log("str3", str);
    return str.slice( 4 );
})("yefoo");