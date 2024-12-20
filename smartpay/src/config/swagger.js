const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'SmartPay API',
            version: '1.0.0',
            description: 'API for SmartPay Blockchain',
            contact: {
                name: 'SmartPay Team',
                email: 'support@smartpay.io'
            },
        },
        servers: [
            {
                url: 'http://localhost:3001/api',
            },
        ],
    },
    apis: ['./src/routes/*.js', './src/models/*.js'],
};

module.exports = swaggerOptions;