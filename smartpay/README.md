# SmartPay API

SmartPay is an API backend for a blockchain-based payment system. It is built using Node.js, Express.js, Swagger for API documentation, and Truffle for smart contract management. The project is configured to run on a local Ethereum blockchain using Geth in Docker.

---

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

---

## Project Overview

SmartPay provides a set of API endpoints to interact with a blockchain-based payment system. It allows users to create wallets, check wallet balances, and interact with smart contracts deployed on a local Ethereum blockchain.

---

## Setup and Installation

### Prerequisites
Before setting up the project, ensure you have the following installed:
- **Node.js** (v14.x or higher)
- **Docker and Docker Compose**
- **Truffle** (globally installed via npm)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Domengo/warden.git
   cd warden/smartpay
2. **Install dependencies**  
   Install the required Node.js dependencies for the project:  
   ```bash
   npm install

# Running the Application

## Start Geth in Docker
Use Docker Compose to start the local Ethereum blockchain. This is required to deploy and interact with the smart contracts:

```bash
docker-compose up -d
```
## Deploy Smart Contracts

Compile and deploy the smart contracts to the local blockchain network:

```bash
truffle compile
truffle migrate --network development
```

