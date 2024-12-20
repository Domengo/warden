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

module.exports = router;