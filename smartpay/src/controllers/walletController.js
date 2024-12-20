const Web3 = require('web3');
const web3 = new Web3('http://localhost:8545'); // Change to your RPC URL

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
        const balance = await web3.eth.getBalance(address);
        res.json({
            address,
            balance: web3.utils.fromWei(balance, 'ether'),
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};