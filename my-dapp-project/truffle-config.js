require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    warden: {
      provider: () => new HDWalletProvider(process.env.PRIVATE_KEY, `https://sepolia.infura.io/v3/${process.env.INFURA_PROJECT_ID}`),
      network_id: 1, // Warden's network id
      gas: 5500000, // Gas limit
      gasPrice: 20000000000, // 20 gwei
    },
  },
  compilers: {
    solc: {
      version: "0.8.0", // Specify the Solidity compiler version
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
  plugins: ["truffle-plugin-verify"], // Optional: for contract verification
};