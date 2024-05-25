import apiClients from "./api-clients";

export default class HttpService<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  create = (data: T) => {
    return apiClients.post<T[]>(this.endpoint, data);
  };
  update = () => {
    return apiClients.patch<T[]>(this.endpoint);
  };
  all = () => {
    return apiClients.get<T[]>(this.endpoint);
  };
}
