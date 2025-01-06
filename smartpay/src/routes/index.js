const express = require('express');
const router = express.Router();
const walletController = require('../controllers/walletController');

// Wallet Routes
/**
 * @swagger
 * /wallet/create:
 *   post:
 *     summary: Create a new wallet
 *     tags: [Wallet]
 *     responses:
 *       200:
 *         description: Wallet created successfully
 */
router.post('/wallet/create', walletController.createWallet);

/**
 * @swagger
 * /wallet/balance:
 *   get:
 *     summary: Get wallet balance
 *     tags: [Wallet]
 *     parameters:
 *       - in: query
 *         name: address
 *         required: true
 *         schema:
 *           type: string
 *         description: Wallet address
 *     responses:
 *       200:
 *         description: Wallet balance retrieved successfully
 */
router.get('/wallet/balance', walletController.getBalance);


/**
 * @swagger
 * /wallet/mint:
 *   post:
 *     summary: Mint tokens
 *     tags: [StableCoin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               to:
 *                 type: string
 *                 description: Recipient address
 *               amount:
 *                 type: string
 *                 description: Amount to mint
 *     responses:
 *       200:
 *         description: Tokens minted successfully
 */
router.post('/wallet/mint', walletController.mintTokens);

/**
 * @swagger
 * /wallet/burn:
 *   post:
 *     summary: Burn tokens
 *     tags: [StableCoin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount:
 *                 type: string
 *                 description: Amount to burn
 *     responses:
 *       200:
 *         description: Tokens burned successfully
 */
router.post('/wallet/burn', walletController.burnTokens);


/**
 * @swagger
 * /wallet/transactionCount:
 *   get:
 *     summary: Get transaction count
 *     tags: [Wallet]
 *     parameters:
 *       - in: query
 *         name: address
 *         required: true
 *         schema:
 *           type: string
 *         description: Wallet address
 *     responses:
 *       200:
 *         description: Transaction count retrieved successfully
 */
router.get('/wallet/transactionCount', walletController.getTransactionCount);

/**
 * @swagger
 * /wallet/sendTransaction:
 *   post:
 *     summary: Send transaction
 *     tags: [Wallet]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               from:
 *                 type: string
 *                 description: Sender's wallet address
 *               to:
 *                 type: string
 *                 description: Receiver's wallet address
 *               value:
 *                 type: string
 *                 description: Amount of Ether to send
 *               privateKey:
 *                 type: string
 *                 description: Sender's private key
 *     responses:
 *       200:
 *         description: Transaction sent successfully
 */
router.post('/wallet/sendTransaction', walletController.sendTransaction);

/**
 * @swagger
 * /wallet/transactionReceipt:
 *   get:
 *     summary: Get transaction receipt
 *     tags: [Wallet]
 *     parameters:
 *       - in: query
 *         name: transactionHash
 *         required: true
 *         schema:
 *           type: string
 *         description: Transaction hash
 *     responses:
 *       200:
 *         description: Transaction receipt retrieved successfully
 */
router.get('/wallet/transactionReceipt', walletController.getTransactionReceipt);

module.exports = router;