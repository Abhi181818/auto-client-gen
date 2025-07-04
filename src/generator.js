const fs = require("fs");
const Mustache = require("mustache");
const path = require("path");

async function generate(spec, outputPath) {
  const template = fs.readFileSync(
    path.join(__dirname, "templates", "client.mustache"),
    "utf-8"
  );

  const apis = [];
  for (const [pathUrl, pathObj] of Object.entries(spec.paths)) {
    for (const [method, operation] of Object.entries(pathObj)) {
      apis.push({
        method: method.toUpperCase(),
        path: pathUrl,
        operationId:
          operation.operationId ||
          `${method}${pathUrl.replace(/[\/{}]/g, "_")}`,
      });
    }
  }

  const output = Mustache.render(template, { apis });
  fs.writeFileSync(outputPath, output, "utf-8");
}

module.exports = { generate };
