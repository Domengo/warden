# SmartPay API

SmartPay is an API backend for a blockchain-based payment system. It is built using Node.js, Express.js, Swagger for API documentation, and Truffle for smart contract management. The project is configured to run on a local Ethereum blockchain using Geth in Docker.

## Table of Contents
- [Project Overview](#project-overview)
- [Setup and Installation](#setup-and-installation)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Endpoints](#endpoints)
  - [Create Wallet](#create-wallet)
  - [Get Wallet Balance](#get-wallet-balance)
- [API Documentation](#api-documentation)
- [License](#license)
- [Example Requests using cURL](#example-requests-using-curl)
- [Folder Structure](#folder-structure)

## Project Overview

SmartPay provides a set of API endpoints to interact with a blockchain-based payment system. It allows users to create wallets, check wallet balances, and interact with smart contracts deployed on a local Ethereum blockchain.

## Setup and Installation

### Prerequisites

Before setting up the project, ensure you have the following installed:

- **Node.js** (v14.x or higher)
- **Docker** and **Docker Compose**
- **Truffle** (globally installed via npm)

### Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/Domengo/warden.git
    cd warden/smartpay
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

### Running the Application

1. **Start Geth in Docker:**

    The project uses Geth (Go Ethereum) in Docker to run a local Ethereum blockchain. Start the Docker services using the provided `docker-compose.yml` file.
    ```sh
    docker-compose up -d
    ```

2. **Deploy Smart Contracts:**

    Compile and deploy the smart contracts to the local Ethereum blockchain.
    ```sh
    truffle compile
    truffle migrate --network development
    ```

3. **Start the Backend Server:**

    Start the Express.js server.
    ```sh
    npm start
    ```
    The server will be running on [http://localhost:3001](http://localhost:3001).

## Endpoints

### Create Wallet

- **URL:** `/api/wallet/create`
- **Method:** `POST`
- **Description:** Creates a new wallet.
- **Response:**
    ```json
    {
      "address": "<wallet_address>",
      "privateKey": "<wallet_private_key>"
    }
    ```

### Get Wallet Balance

- **URL:** `/api/wallet/balance`
- **Method:** `GET`
- **Description:** Retrieves the balance of a specified wallet address.
- **Query Parameters:**
  - `address` (string): The wallet address.
- **Response:**
    ```json
    {
      "address": "<wallet_address>",
      "balance": "<balance_in_ether>"
    }
    ```

## API Documentation

Swagger UI is available to view and test the API endpoints.

- **URL:** [http://localhost:3001/api-docs](http://localhost:3001/api-docs)

## License

This project is licensed under the ISC License.

## Example Requests using cURL

### Create Wallet
```sh
curl -X POST http://localhost:3001/api/wallet/create
```
### Get Wallet Balance

```sh
curl -X GET "http://localhost:3001/api/wallet/balance?address=<wallet_address>"
```

### Directory and File Descriptions

- **warden/**  
  The root directory of the project containing all subdirectories and configuration files.

  - **smartpay/**  
    The main backend application directory.

    - **build/**  
      Contains the compiled contract artifacts.

      - **contracts/**  
        Stores the JSON files generated after compiling Solidity contracts.

        - **StableCoin.json**  
          The compiled artifact for the `StableCoin` smart contract, including ABI and bytecode.

    - **contracts/**  
      Holds the Solidity smart contract source files.

      - **StableCoin.sol**  
        The Solidity source code for the `StableCoin` smart contract.

    - **migrations/**  
      Manages the deployment scripts for smart contracts.

      - **2_deploy_contracts.js**  
        The migration script responsible for deploying the `StableCoin` contract to the blockchain.

    - **src/**  
      Contains the source code for the Express.js server.

      - **app.js**  
        The entry point of the backend server, initializing Express.js and setting up middleware.

      - **config/**  
        Holds configuration files for the application.

        - **swagger.js**  
          Configures Swagger for API documentation.

      - **controllers/**  
        Contains controller files that handle the business logic for different routes.

        - **walletController.js**  
          Manages wallet-related operations such as creating wallets and retrieving balances.

      - **routes/**  
        Defines the API endpoints and associates them with corresponding controllers.

        - **index.js**  
          Sets up the routing for the wallet APIs.

    - **docker-compose.yml**  
      Configures Docker services, including the local Ethereum blockchain using Geth.

    - **dockerfile**  
      Defines the Docker image setup for the backend server.

    - **package.json**  
      Lists the project dependencies, scripts, and metadata for the Node.js application.

    - **package-lock.json**  
      Locks the versions of dependencies to ensure consistent installations.

    - **truffle-config.js**  
      Configures Truffle for smart contract compilation and deployment, specifying network settings.

### Explanation

- **build/**  
  After compiling the smart contracts written in Solidity, the `build` directory stores the resulting JSON artifacts. These artifacts include the ABI (Application Binary Interface) and bytecode, which are essential for interacting with the smart contracts from the backend server.

- **contracts/**  
  This directory contains the raw Solidity code for the smart contracts. In this case, `StableCoin.sol` defines the behavior and properties of the StableCoin token used in the SmartPay system.

- **migrations/**  
  Truffle uses migration scripts to manage the deployment of smart contracts to the blockchain. The `2_deploy_contracts.js` script ensures that the `StableCoin` contract is deployed in the correct order, handling dependencies if there are multiple contracts.

- **src/**  
  The source code for the Express.js server is organized here. It includes the main application file (`app.js`), configuration settings (`config/`), controller logic (`controllers/`), and route definitions (`routes/`). This separation of concerns makes the codebase more maintainable and scalable.

  - **config/swagger.js**  
    Sets up Swagger UI, allowing developers to visualize and test the API endpoints directly from the browser.

  - **controllers/walletController.js**  
    Implements the logic for wallet operations, such as creating new wallets and fetching wallet balances by interacting with the smart contracts.

  - **routes/index.js**  
    Maps API routes to their corresponding controller functions, defining the structure of the API.

- **docker-compose.yml & dockerfile**  
  These files configure Docker to containerize the application and the Ethereum blockchain environment. Using Docker ensures that the development environment is consistent across different machines and simplifies deployment.

- **package.json & package-lock.json**  
  Manage the Node.js dependencies required for the backend server. `package.json` specifies the dependencies and scripts, while `package-lock.json` ensures that the exact versions of dependencies are installed.

- **truffle-config.js**  
  Configures Truffle, a development framework for Ethereum, to compile and deploy the smart contracts. It defines network settings, such as the local development network provided by Geth in Docker.

### Summary

This structured approach organizes the SmartPay API project into clear, manageable sections, separating concerns between blockchain contracts, backend logic, configurations, and deployment scripts. Understanding this layout will help developers navigate the project efficiently, contribute effectively, and maintain the system with ease.