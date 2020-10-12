const easymidi = require("easymidi");

const output = new easymidi.Output('VirtMidi Out', true);

output.send("noteon", {
  note: 60,
  velocity: 127,
  channel: 1,
});

require("net").createServer().listen();
