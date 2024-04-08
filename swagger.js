const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Party Kaha Hai APIs",
      description: "API endpoints for a Party Kaha Hai APIs",
      contact: {
        name: "Jaskirat Singh",
        email: "jaskirat@futurestic.co.in",
      },
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:3001/",
        description: "Local server",
      },
      {
        url: "https://party.netzeroaccelerator.co.uk",
        description: "Live server",
      },
    ],
  },
  // looks for configuration in specified directories
  apis: ["./routes/*.js"],
};
const swaggerSpec = swaggerJsdoc(options);
function swaggerDocs(app, port) {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get("/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
}

module.exports = swaggerDocs;
