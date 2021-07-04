const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const { DOCUMENT_PORT, PORT } = require('../configs');

const documents = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Library API',
      description: 'This is a REST API application made with Express',
      version: '1.0.0',
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    servers: [
      {
        url: `http://localhost:${PORT}/api/v1`,
        description: 'Development server',
      },
    ],
  },
  apis: ['./src/routes/*.js'],
};

const app = express();
const swaggerDocs = swaggerJSDoc(documents);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

module.exports.createDocument = () => {
  app.listen(DOCUMENT_PORT, () => {
    console.log(`Document running at http://localhost:${DOCUMENT_PORT}`);
  });
};
