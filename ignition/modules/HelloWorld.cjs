const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const HelloWorldModule = buildModule("HelloWorldModule", (m) => {
  const helloWorld = m.contract("HelloWorld", ["Hello FHV 2024"]);

  return { helloWorld };
});

module.exports = HelloWorldModule;