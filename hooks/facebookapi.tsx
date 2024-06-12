import apiClients from "@/services/http-service";

import { MetaCredentialInterface } from "./instaFetch";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

export interface PagePostInterface {
  media: string;
  user: string;
}

export const useGetfacebookPagePost = () => {
  const httpService = new apiClients<PagePostInterface>(
    "/facebook/fb-page-post"
  );
  return useQuery<PagePostInterface[]>({
    queryKey: ["fb-page"],
    queryFn: httpService.get,
  });
};

export const useSaveFacebookPagePost = () => {
  const httpService = new apiClients("/facebook/facebook-page-post");

  return useMutation({
    mutationFn: httpService.create,
  });
};

export const useSaveFacebookPageDetal = () => {
  const httpService = new apiClients("/facebook/facebook-page");
  const { mutate } = useSaveFacebookPagePost();

  return useMutation({
    mutationFn: httpService.create,
    onSuccess: () => {
      mutate({});
    },
  });
};

export const useSavePlatFormfacebook = () => {
  const { mutate } = useSaveFacebookPageDetal();
  const httpService = new apiClients<MetaCredentialInterface>(
    "/platform/token-save"
  );

  return useMutation({
    mutationFn: httpService.create,
    onSettled: (data, erro) => {
      if (data) {
        mutate({});
      }
    },
    onSuccess: () => {
      toast.success("social media connected succefully");
    },
    onError: (err) => {
      toast.error("Error connection social media ");
    },
  });
};
