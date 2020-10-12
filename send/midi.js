const easymidi = require("easymidi");
const os = require("os");
const output = new easymidi.Output(
  "FooInput",
  true
);

const send_midi = (note, velocity, channel = 1) => {
  output.send("noteon", {
    note,
    velocity,
    channel,
  });
};

module.exports = { send_midi };
