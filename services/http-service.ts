import apiClients from "./api-clients";

export default class HttpService<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  create = async (data: T = {} as T) => {
    console.log(this.endpoint);
    const res = await apiClients.post<T[]>(this.endpoint, data);
    return res.data;
  };
  update = () => {
    return apiClients.patch<T[]>(this.endpoint);
  };
  get = async () => {
    const res = await apiClients.get<T[]>(this.endpoint);
    return res.data;
  };
  delete = async () => {
    const res = await apiClients.delete<T[]>(this.endpoint);
    return res.data;
  };
}
