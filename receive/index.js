const dgram = require("dgram");
const udp = dgram.createSocket("udp4");

const UDP_OUTBOUND_PORT = 9999;
const WEBSOCKET_PORT = 9998;
const UDP_INBOUND_PORT = 9997;

udp.bind(UDP_INBOUND_PORT);

const udpListener = (message) => {
  console.log(message.toString());
};

udp.on("message", udpListener);
