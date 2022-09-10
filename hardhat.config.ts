import { HardhatUserConfig } from "hardhat/config";
// import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers";
import "dotenv/config";

const PRIVATE_KEY = process.env.PRIVATE_KEY || "0xkey";

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    sapphire: {
      chainId: 23295,
      url: "https://testnet.sapphire.oasis.dev",
      accounts: [PRIVATE_KEY],
    },
  },
};

export default config;
