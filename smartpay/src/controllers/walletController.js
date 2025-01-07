const Web3 = require('web3');
const contract = require('@truffle/contract');
const StableCoinArtifact = require('../../build/contracts/StableCoin.json');

const web3 = new Web3('http://localhost:8545'); // Change to your RPC URL

const StableCoin = contract(StableCoinArtifact);
StableCoin.setProvider(web3.currentProvider);

exports.createWallet = (req, res) => {
    const account = web3.eth.accounts.create();
    res.json({
        address: account.address,
        privateKey: account.privateKey,
    });
};

exports.getBalance = async (req, res) => {
    const { address } = req.query;
    try {
        const stableCoin = await StableCoin.deployed();
        const balance = await stableCoin.balanceOf(address);
        res.json({
            address,
            balance: web3.utils.fromWei(balance, 'ether'),
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.mintTokens = async (req, res) => {
    const { to, amount } = req.body;
    try {
        const stableCoin = await StableCoin.deployed();
        const accounts = await web3.eth.getAccounts();
        await stableCoin.mint(to, web3.utils.toWei(amount, 'ether'), { from: accounts[0] });
        res.json({ message: 'Tokens minted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.burnTokens = async (req, res) => {
    const { amount } = req.body;
    try {
        const stableCoin = await StableCoin.deployed();
        const accounts = await web3.eth.getAccounts();
        await stableCoin.burn(web3.utils.toWei(amount, 'ether'), { from: accounts[0] });
        res.json({ message: 'Tokens burned successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


// Get Transaction Count
exports.getTransactionCount = async (req, res) => {
    const { address } = req.query;
    try {
        const transactionCount = await web3.eth.getTransactionCount(address);
        res.json({
            address,
            transactionCount,
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Send Transaction
exports.sendTransaction = async (req, res) => {
    const { from, to, value, privateKey } = req.body;
    try {
        const signedTransaction = await web3.eth.accounts.signTransaction({
            to,
            value: web3.utils.toWei(value, 'ether'),
            gas: 2000000,
        }, privateKey);

        const receipt = await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction);
        res.json(receipt);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get Transaction Receipt
exports.getTransactionReceipt = async (req, res) => {
    const { transactionHash } = req.query;
    try {
        const receipt = await web3.eth.getTransactionReceipt(transactionHash);
        res.json(receipt);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.mintWithFiat = async (req, res) => {
    const { to, fiatAmount } = req.body;
    try {
        const stableCoin = await StableCoin.deployed();
        const accounts = await web3.eth.getAccounts();
        await stableCoin.mintWithFiat(to, fiatAmount, { from: accounts[0] });
        res.json({ message: 'Tokens minted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.burnWithFiat = async (req, res) => {
    const { tokenAmount } = req.body;
    try {
        const stableCoin = await StableCoin.deployed();
        const accounts = await web3.eth.getAccounts();
        await stableCoin.burnWithFiat(tokenAmount, { from: accounts[0] });
        res.json({ message: 'Tokens burned successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};