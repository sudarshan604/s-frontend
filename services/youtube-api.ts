import { useGoogleLogin } from "@react-oauth/google";

export const useLoginWithGoogle = () => {
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => console.log(codeResponse),
    flow: "auth-code",
    scope: "https://www.googleapis.com/auth/youtube.readonly",
  });

  return { login };
};
