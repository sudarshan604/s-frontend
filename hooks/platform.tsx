import { useQuery } from "@tanstack/react-query";
import apiClients from "@/services/http-service";

export const useUserPlatform = () => {
  const httpService = new apiClients("/platform/user-platform");

  return useQuery({
    queryKey: ["user-platform"],
    queryFn: httpService.get,
  });
};
