import { useQuery } from "@tanstack/react-query";
import apiClients from "@/services/http-service";

interface CurrentUserInterdace {}

export const useGetUserPlatForm = () => {
  const httpService = new apiClients<any>("/users/showMe");

  return useQuery({
    queryKey: ["showMe"],
    queryFn: httpService.get,
  });
};

export const IsAuthenticate = () => {
  const { data } = useGetUserPlatForm();
  if (data) {
    return true;
  } else {
    return false;
  }
};
