import { useGoogleLogin } from "@react-oauth/google";
import { useMutation, useQuery } from "@tanstack/react-query";
import apiClients from "./http-service";
import { useGetUserPlatForm } from "@/utils/Auth";
import { toast } from "react-toastify";

export interface YoutubeVideoInterface {
  channelId: string;
  channelTitle: string;
  description: string;
  playlistId: string;
  publishedAt: string;
  resourceId: string;
  thumbnails: string;
  title: string;
  user: string;
  videoOwnerChannelId: string;
  videoOwnerChannelTitle: string;
  __v: number;
}

export const useGetYoutubeContent = () => {
  const httpService = new apiClients<YoutubeVideoInterface>("/yt/yt-content");

  return useQuery<YoutubeVideoInterface[]>({
    queryKey: ["yt-video"],
    queryFn: httpService.get,
  });
};

export const useSaveYoutubeVideo = () => {
  const httpService = new apiClients("/yt/yt-save-content");
  const { refetch } = useGetUserPlatForm();

  return useMutation({
    mutationFn: httpService.create,
    onSettled: (data, erro) => {
      if (data) {
        refetch();
      }
    },
  });
};

export const useSaveYoutubeToken = () => {
  const httpService = new apiClients<any>("/yt/yt-token");
  const { mutate } = useSaveYoutubeVideo();

  return useMutation({
    mutationFn: httpService.create,
    onSuccess: () => {
      mutate({});
    },
    onError: (error) => {
      console.error("Error saving YouTube token:", error);
    },
  });
};

export const useLoginWithGoogle = () => {
  const { refetch } = useGetUserPlatForm();

  const { mutate } = useSaveYoutubeToken();
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      refetch();
      mutate({
        code: codeResponse.code,
        platform: "youtube",
      });
      toast.success("successfully connect youtube");
    },
    onError: (err) => {
      console.log("err=", err);
      toast.error("error connecting");
    },
    flow: "auth-code",
    scope:
      "https://www.googleapis.com/auth/youtube.upload https://www.googleapis.com/auth/youtube.readonly https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/youtubepartner https://www.googleapis.com/auth/youtube.force-ssl",
  });

  return { login };
};
