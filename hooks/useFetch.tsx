import { useQuery } from "@tanstack/react-query";
import apiClients from "@/services/http-service";

interface CurrentUserInterdace {
  user: string;
}

export const useCurrentUser = () => {
  const httpService = new apiClients<CurrentUserInterdace>("/users/showMe");

  return useQuery({
    queryKey: ["showMe"],
    queryFn: httpService.get,
  });
};
