import { MetaCredentialInterface } from "@/hooks/instaFetch";
import { useGoogleLogin } from "@react-oauth/google";
import { useMutation } from "@tanstack/react-query";
import apiClients from "./http-service";

export const useSaveYoutubeTokem = () => {
  const httpService = new apiClients<>("/platform/token-save");

  return useMutation({
    mutationFn: httpService.create,
    onSettled: (data, erro) => {
      if (data) {
      }
    },
  });
};

export const useLoginWithGoogle = () => {
  const { mutate } = useSaveYoutubeTokem();
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      mutate({
        code: codeResponse.code,
      });
    },
    flow: "auth-code",
    scope: "https://www.googleapis.com/auth/youtube.upload",
  });

  return { login };
};
