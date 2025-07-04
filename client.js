// Auto-generated API client

export class APIClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async getUsers(params) {
    const res = await fetch(`${this.baseURL}/users`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params)
    });
    return res.json();
  }

  async createUser(params) {
    const res = await fetch(`${this.baseURL}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params)
    });
    return res.json();
  }

  async getUserById(params) {
    const res = await fetch(`${this.baseURL}/users/{id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params)
    });
    return res.json();
  }

}
