import apiClients from "./api-clients";

class HttpService {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  create<T>() {
    const controller = new AbortController();

    return apiClients.post<T[]>(this.endpoint, {
      signal: controller.signal,
    });
  }
  update<T>() {
    const controller = new AbortController();

    return apiClients.patch<T[]>(this.endpoint, {
      signal: controller.signal,
    });
  }
  all<T>() {
    const controller = new AbortController();

    return apiClients.get<T[]>(this.endpoint, {
      signal: controller.signal,
    });
  }
}

const create = (endpoint: string) => new HttpService(endpoint);

export default create;
