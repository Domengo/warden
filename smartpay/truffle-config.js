module.exports = {
    networks: {
      development: {
        host: "172.28.251.205",//172.28.251.205
        port: 8545,
        network_id: "*", // Match any network id
        gas: 8000000,      // Gas limit
      gasPrice: 20000000000 // 20 Gwei (optional)
      }
      sepolia: {
        provider: () => new HDWalletProvider(
          process.env.PRIVATE_KEY,
          `https://sepolia.infura.io/v3/${process.env.INFURA_PROJECT_ID}`
        ),
        network_id: 11155111, // Sepolia network id
        gas: 5500000, // Gas limit
        confirmations: 2, // # of confirmations to wait between deployments
        timeoutBlocks: 200, // # of blocks before a deployment times out
        skipDryRun: true // Skip dry run before migrations? (default: false for public nets)
      }
    },
    compilers: {
      solc: {
        version: "0.8.20" // Specify the Solidity compiler version
      }
    }
  };