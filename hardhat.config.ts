import { defineConfig } from "hardhat/config";
import hardhatIgnitionViemPlugin from "@nomicfoundation/hardhat-ignition-viem";
import "@nomicfoundation/hardhat-ethers";

export default defineConfig({
  solidity: "0.8.0",
  plugins: [hardhatIgnitionViemPlugin],
});
