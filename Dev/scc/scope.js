function  foo() {
    var bar;
    quux = 4;
    function zip() {
        var quux = 5;
        bar = true;
    }

    return zip;
}
