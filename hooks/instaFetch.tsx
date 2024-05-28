import apiClients from "@/services/http-service";
import { useMutation, useQuery } from "@tanstack/react-query";

interface MetaCredentialInterface {
  accessToken: string;
  userId: string;
  platform?: string;
  name?: string;
}

interface UserDocument {
  _id: string;
  user: string;
  instagram: MetaCredentialInterface[];
  facebook: MetaCredentialInterface[];
  updatedAt: Date;
  __v: number;
}

export const useGetUserPlatForm = () => {
  const httpService = new apiClients<UserDocument>("/platform/user-platform");

  return useQuery({
    queryKey: ["platform"],
    queryFn: httpService.get,
  });
};

export const useSaveInstaUser = () => {
  const { mutate } = useSaveInstaPost();
  const httpService = new apiClients("/insta/save-insta-user");

  return useMutation({
    mutationFn: httpService.create,
    onSuccess: () => {
      mutate({});
    },
  });
};

export const useSaveInstaPost = () => {
  const httpService = new apiClients("/insta/save-insta-post");

  return useMutation({
    mutationFn: httpService.create,
  });
};

export const useSavePlatForm = () => {
  const { mutate } = useSaveInstaUser();

  const httpService = new apiClients<MetaCredentialInterface>(
    "/platform/token-save"
  );

  return useMutation({
    mutationFn: httpService.create,
    onSuccess: () => {
      mutate({});
    },
  });
};
