if (!Object.create) {
    Object.create = function (o) {
        return {
            __proto__: o
        };
    };
}