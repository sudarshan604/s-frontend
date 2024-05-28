import apiClients from "@/services/http-service";
import { useMutation } from "@tanstack/react-query";

const useSave = (path: string) => {
  const httpService = new apiClients(path);

  return useMutation({
    mutationFn: httpService.create,
  });
};

export default useSave;
