import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import fs from "fs";

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
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

fs.writeFileSync(
  "./swagger.json",
  JSON.stringify(swaggerSpec, null, 2),
  "utf-8"
);

function swaggerDocs(app, port) {
  app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
  app.get("/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
}

export default swaggerDocs;
