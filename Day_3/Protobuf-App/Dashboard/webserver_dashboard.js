const dgram = require('dgram');
const protobuf = require('protobufjs');

protobuf.load("vehicle.proto", function(err, root) {
    if (err) throw err;
    const VehicleData = root.lookupType("VehicleData");

    const server = dgram.createSocket('udp4');

    server.on('message', (msg, rinfo) => {
        let decoded = VehicleData.decode(msg);
        console.log(`Received from ${rinfo.address}:${rinfo.port} ->`, decoded);
    });

    server.bind(5005, '127.0.0.1', () => {
        console.log('Dashboard UDP Server listening on port 5005');
    });
});