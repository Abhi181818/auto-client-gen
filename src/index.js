const { parseSpec } = require('./parser');
const { generate } = require('./generator');

async function generateClient(inputPath, outputPath) {
  console.log(`🔍 Parsing spec: ${inputPath}`);
  const spec = await parseSpec(inputPath);

  console.log('⚙️ Generating client...');
  await generate(spec, outputPath);

  console.log(`✅ Client generated at ${outputPath}`);
}

module.exports = { generateClient };
