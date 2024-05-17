import apiClients from "./api-clients";

class UserService {
  signINUser() {
    const controller = new AbortController();

    return apiClients.post("/signin", {
      signal: controller.signal,
    });
  }
}

export default new UserService();
