const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const cors = require('cors');
const routes = require('./routes');
const swaggerOptions = require('./config/swagger');

const app = express();
const port = process.env.PORT || 3001;

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(cors());
app.use(express.json());
app.use('/api', routes);

app.listen(port, () => {
    console.log(`SmartPay API running on http://localhost:${port}`);
    console.log('Swagger UI available at http://localhost:3001/api-docs');
});

module.exports = app;

// // app.js - Main entry point for the Express.js backend
// const express = require('express');
// const swaggerUi = require('swagger-ui-express');
// const swaggerJsDoc = require('swagger-jsdoc');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const truffleContract = require('@truffle/contract');
// const Web3 = require('web3');
// const path = require('path');
// const fs = require('fs');

// const app = express();
// const port = process.env.PORT || 3000;

// // Load contract
// const contractPath = path.resolve(__dirname, 'build/contracts/SmartPayToken.json');
// const contractData = JSON.parse(fs.readFileSync(contractPath, 'utf8'));
// const web3 = new Web3('http://localhost:8545'); // Local Ganache or testnet provider
// const SmartPayToken = truffleContract(contractData);
// SmartPayToken.setProvider(web3.currentProvider);

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Swagger setup
// const swaggerOptions = {
//     swaggerDefinition: {
//         openapi: '3.0.0',
//         info: {
//             title: 'SmartPay API',
//             version: '1.0.0',
//             description: 'API endpoints for SmartPay Blockchain',
//         },
//         servers: [{ url: 'http://localhost:3000' }],
//     },
//     apis: ['./routes/*.js'],
// };
// const swaggerDocs = swaggerJsDoc(swaggerOptions);
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// // Routes
// const walletRoutes = require('./routes/wallet');
// app.use('/api/wallet', walletRoutes);

// // Start server
// app.listen(port, () => {
//     console.log(`SmartPay API running on http://localhost:${port}`);
//     console.log('Swagger UI available at http://localhost:3000/api-docs');
// });
