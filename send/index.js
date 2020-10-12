const dgram = require("dgram");
const client = dgram.createSocket("udp4");

const { toMidi } = require("tonal-midi");

const message = Buffer.from(String(toMidi("C4")));

client.send(message, 9997);

setTimeout(() => {
  process.exit(0);
}, 500);
