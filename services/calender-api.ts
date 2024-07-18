import apiClients from "./http-service";
export const useDeleteShedulePost = () => {
  const httpService = new apiClients<any>("/shedule");
};
