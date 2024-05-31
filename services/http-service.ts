import apiClients from "./api-clients";

export default class HttpService<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  create = (data: T = {} as T) => {
    return apiClients.post<T[]>(this.endpoint, data).then((res) => res.data);
  };
  update = () => {
    return apiClients.patch<T[]>(this.endpoint);
  };
  get = () => {
    return apiClients.get<T[]>(this.endpoint).then((res) => res.data);
  };
  delete = () => {
    return apiClients.delete<T[]>(this.endpoint).then((res) => res.data);
  };
}
