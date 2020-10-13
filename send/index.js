const dgram = require("dgram");
const { toMidi } = require("tonal-midi");

const client = dgram.createSocket("udp4");
const UDP_INBOUND_PORT = 9997;
const message = Buffer.from(String(toMidi("C4")));

client.send(message, UDP_INBOUND_PORT);

setTimeout(() => {
  process.exit(0);
}, 500);
