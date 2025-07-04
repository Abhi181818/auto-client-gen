const SwaggerParser = require('swagger-parser');
const fs = require('fs');
const yaml = require('yaml');

async function parseSpec(inputPath) {
  if (inputPath.endsWith('.yaml') || inputPath.endsWith('.yml')) {
    const file = fs.readFileSync(inputPath, 'utf8');
    const spec = yaml.parse(file);
    return SwaggerParser.validate(spec);
  } else {
    return SwaggerParser.validate(inputPath);
  }
}

module.exports = { parseSpec };
