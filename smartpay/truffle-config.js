module.exports = {
    networks: {
      development: {
        host: "172.28.251.205",//172.28.251.205
        port: 8545,
        network_id: "*", // Match any network id
        gas: 8000000,      // Gas limit
      gasPrice: 20000000000 // 20 Gwei (optional)
      }
    },
    compilers: {
      solc: {
        version: "0.8.20" // Specify the Solidity compiler version
      }
    }
  };