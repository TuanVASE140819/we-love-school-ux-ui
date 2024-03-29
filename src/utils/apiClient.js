import axios from "axios";

class ApiClient {
  constructor(baseURL) {
    this.apiClient = axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  getPosts() {
    return this.apiClient.get("/posts");
  }

  getAllComments() {
    return this.apiClient.get("/comments");
  }
}

export default new ApiClient("https://jsonplaceholder.typicode.com");
