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
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
};

export const useDeleteQuery = () => {
  const httpService = new apiClients("/auth/logout");

  return useQuery({
    queryKey: ["delete"],
    queryFn: httpService.delete,
    enabled: false,
  });
};
