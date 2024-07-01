import apiClients from "@/services/http-service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export interface MetaCredentialInterface {
  accessToken: string;
  userId: string;
  platform?: string;
  name?: string;
}

export interface UserDocument {
  _id: string;
  user: string;
  instagram: MetaCredentialInterface[];
  facebook: MetaCredentialInterface[];
  youtube: MetaCredentialInterface[];
  tiktok: MetaCredentialInterface[];
  updatedAt: Date;
  __v: number;
}

export interface InstagramUserInterface {
  _id: string;
  user_id: string;
  follows_count: number;
  followers_count: number;
  media_count: number;
  name: string;
  profile_picture_url: string;
  user: string;
  username: string;
  biography: string;
  __v: number;
}
interface FacebookProfile {
  id: string;
  key: string;
  name: string;
  profile_picture_url: string;
  tokenId: string;
}

export const useGetInstaUser = () => {
  const httpService = new apiClients<InstagramUserInterface>(
    "/insta/get-insta-user"
  );

  return useQuery<InstagramUserInterface[]>({
    queryKey: ["insta-user"],
    queryFn: httpService.get,
  });
};

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
  const queryClient = useQueryClient();

  const httpService = new apiClients<MetaCredentialInterface>(
    "/platform/token-save"
  );

  return useMutation({
    mutationFn: httpService.create,
    onSettled: (savedData, erro) => {
      if (savedData) {
        mutate({});

        // queryClient.setQueryData<UserDocument>(["platform"], (platforms) => [
        //   savedData,
        //   ...platforms,
        // ]);
      }
    },
  });
};

export const useConnectedMedia = () => {
  const httpService = new apiClients<FacebookProfile>(
    "/platform/connected-media"
  );
  return useQuery<FacebookProfile[]>({
    queryKey: ["connected-media"],
    queryFn: httpService.get,
  });
};

export const useDeleteInstaDetail = () => {
  const { refetch } = useConnectedMedia();
  const httpService = new apiClients("/insta/insta-delete");
  return useMutation({
    mutationFn: httpService.delete,
    onSuccess: () => {
      refetch();
    },
  });
};
