# Auto Client Gen

An easy to use CLI tool and library to auto-generate typed API clients from OpenAPI/Swagger specifications.

## 🚀 Features

- ✅ **OpenAPI 3.0 Support** - Full compatibility with OpenAPI 3.0 specifications
- ✅ **YAML & JSON Support** - Parse both YAML and JSON OpenAPI files
- ✅ **Clean JavaScript Output** - Generate modern, readable API client code
- ✅ **CLI Interface** - Easy-to-use command line tool
- ✅ **Library Support** - Use as a Node.js library in your projects
- ✅ **Automatic Method Generation** - Creates methods for all API endpoints
- ✅ **Template-based Generation** - Customizable Mustache templates

## 📦 Installation

### Global Installation (CLI)

```bash
npm install -g auto-client-gen
```

### Local Installation (Library)

```bash
npm install auto-client-gen
```

### Development Setup

```bash
git clone <repository-url>
cd auto-client-gen
npm install
```

## 🔧 Usage

### CLI Usage

Generate an API client from an OpenAPI specification:

```bash
auto-client-gen --input=./openapi.yaml --output=./client.js
```

#### CLI Options

- `--input` - Path to your OpenAPI specification file (YAML or JSON)
- `--output` - Path where the generated client should be saved

#### Examples

```bash
# Generate from YAML file
auto-client-gen --input=./api-spec.yaml --output=./src/api-client.js

# Generate from JSON file
auto-client-gen --input=./swagger.json --output=./lib/client.js

# Using relative paths
auto-client-gen --input=../specs/openapi.yaml --output=./generated/api.js
```

### Library Usage

Use auto-client-gen as a library in your Node.js projects:

```javascript
const { generateClient } = require("auto-client-gen");

async function generateMyClient() {
  try {
    await generateClient("./openapi.yaml", "./client.js");
    console.log("Client generated successfully!");
  } catch (error) {
    console.error("Generation failed:", error);
  }
}

generateMyClient();
```

## 📋 Generated Client Usage

The generated client provides a clean, promise-based API:

```javascript
import { APIClient } from "./client.js";

// Initialize the client
const client = new APIClient("https://api.example.com");

// Use the generated methods
async function example() {
  // Get all users
  const users = await client.getUsers();

  // Create a new user
  const newUser = await client.createUser({
    name: "John Doe",
    email: "john@example.com",
  });

  // Get user by ID
  const user = await client.getUserById({ id: "123" });
}
```

## 📁 Project Structure

```
auto-client-gen/
├── bin/
│   └── index.js              # CLI entry point
├── src/
│   ├── index.js              # Main library export
│   ├── parser.js             # OpenAPI specification parser
│   ├── generator.js          # Client code generator
│   └── templates/
│       └── client.mustache   # Mustache template for client generation
├── package.json              # Package configuration
├── openapi.yaml             # Sample OpenAPI specification
└── client.js               # Sample generated client
```

## 🔍 How It Works

1. **Parse OpenAPI Spec**: The tool reads and validates your OpenAPI specification using `swagger-parser`
2. **Extract Endpoints**: All paths and HTTP methods are extracted from the specification
3. **Generate Methods**: For each endpoint, a corresponding JavaScript method is created
4. **Template Rendering**: Uses Mustache templating to generate clean, readable code
5. **Write Output**: The final client code is written to your specified output file

## 📝 OpenAPI Specification Support

### Supported Features

- ✅ Paths and operations
- ✅ HTTP methods (GET, POST, PUT, DELETE, PATCH, etc.)
- ✅ Operation IDs
- ✅ YAML and JSON formats
- ✅ OpenAPI 3.0 specifications

### Currently Not Supported

- ❌ TypeScript output or any other language (JavaScript only)
- ❌ Request/response type generation
- ❌ Custom headers configuration
- ❌ Query parameter handling
- ❌ Path parameter substitution

## 🛠️ Development

### Scripts

```bash
# Start the CLI tool
npm start

# Run tests (placeholder)
npm test
```

### Dependencies

- **swagger-parser**: OpenAPI specification parsing and validation
- **mustache**: Template rendering engine
- **yaml**: YAML file parsing support

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes and test them
4. Commit your changes: `git commit -m 'Add some feature'`
5. Push to the branch: `git push origin feature/your-feature`
6. Submit a pull request

### Development Guidelines

- Follow existing code style and conventions
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting

## 👤 Author

**Boss**

## 🐛 Issues and Support

If you encounter any issues or have questions:

1. Check the existing issues on GitHub
2. Create a new issue with detailed information about your problem
3. Include your OpenAPI specification (if possible) and error messages

## 📚 Examples

### Sample OpenAPI Specification

```yaml
openapi: 3.0.0
info:
  title: Sample User API
  version: 1.0.0

servers:
  - url: https://api.example.com

paths:
  /users:
    get:
      summary: Get all users
      operationId: getUsers
      responses:
        "200":
          description: OK
    post:
      summary: Create a new user
      operationId: createUser
      responses:
        "201":
          description: Created

  /users/{id}:
    get:
      summary: Get a user by ID
      operationId: getUserById
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: string
      responses:
        "200":
          description: OK
```

### Generated Client

```javascript
// Auto-generated API client

export class APIClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async getUsers(params) {
    const res = await fetch(`${this.baseURL}/users`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
    });
    return res.json();
  }

  async createUser(params) {
    const res = await fetch(`${this.baseURL}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
    });
    return res.json();
  }

  async getUserById(params) {
    const res = await fetch(`${this.baseURL}/users/{id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
    });
    return res.json();
  }
}
```

---
