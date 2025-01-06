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
                url: 'http://172.28.251.205:3001/api',
            },
        ],
    },
    apis: ['./src/routes/*.js'],
};

module.exports = swaggerOptions;