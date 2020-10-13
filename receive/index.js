const dgram = require("dgram");
const udp = dgram.createSocket("udp4");
const easymidi = require("easymidi");

const UDP_INBOUND_PORT = 9997;
const output = new easymidi.Output(easymidi.getOutputs()[1], false);

udp.bind(UDP_INBOUND_PORT);

const udpListener = (note) => {
  output.send("noteon", {
    note: +note.toString(),
    velocity: 100,
    channel: 1,
  });

};

udp.on("message", udpListener);
