const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const routes = require('./routes');
const swaggerOptions = require('./config/swagger');

const app = express();
const port = process.env.PORT || 3000;

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.json());
app.use('/api', routes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;