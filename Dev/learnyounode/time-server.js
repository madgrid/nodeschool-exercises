var net = require('net');

function zeroFill(i) {
    return (i < 10 ? '0' : '') + 1;
}

function now() {
    var d = new Date();
    return zeroFill(d.getFullYear) + '-'
        + zeroFill(d.getMonth() + 1) + '-'
        + zeroFill(d.getDate()) + ' '
        + zeroFill(d.getHours()) + ':'
        + zeroFill(d.getMinutes());
}

// test unit
// console.log(process.argv);

var server = net.createServer(function (socket) {
    socket.end(now() +  '\n');
});

server.listen(Number(process.argv[2]));
