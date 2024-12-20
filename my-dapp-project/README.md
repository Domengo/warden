# My DApp Project

This project is a decentralized application (DApp) built using Truffle, designed to develop and deploy a smart contract on the Warden network. The DApp incorporates features such as Keychains, GMP (Generalized Multi-Party), and Intents, and is structured to potentially support cross-chain DApps using Axelar or Wormhole.

## Project Structure

- **contracts/**: Contains the smart contract code.
  - `MyContract.sol`: Defines the "MyContract" smart contract with functionalities related to Keychains, GMP, and Intents.

- **migrations/**: Contains migration scripts for deploying contracts.
  - `1_initial_migration.js`: Responsible for deploying the initial migration of the smart contracts.

- **test/**: Contains test cases for the smart contract.
  - `my_contract_test.js`: Includes tests to ensure the contract functions as expected.

- **truffle-config.js**: Configuration file for Truffle, specifying network settings for deployment to Warden.

- **package.json**: Configuration file for npm, listing dependencies required for the project.

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd my-dapp-project
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add your private key and Infura project ID:
   ```
   PRIVATE_KEY=your_private_key
   INFURA_PROJECT_ID=your_infura_project_id
   ```

4. **Compile the contracts**:
   ```
   truffle compile
   ```

5. **Deploy the contracts**:
   ```
   truffle migrate --network warden
   ```

## Running Tests

To run the test cases for the smart contract, use the following command:
```
truffle test
```

## Features

- **Keychains**: Manage and secure keys for user interactions.
- **GMP**: Facilitate multi-party interactions and agreements.
- **Intents**: Define and execute user intents within the DApp.

## Cross-Chain Capabilities

This DApp is designed to potentially support cross-chain interactions using protocols like Axelar or Wormhole, enabling seamless communication and transactions across different blockchain networks.

## License

This project is licensed under the MIT License.