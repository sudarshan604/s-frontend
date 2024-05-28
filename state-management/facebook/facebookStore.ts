import { create } from "zustand";

export interface FacebookInterface {
  accessToken: string;
  userId: string;
  platform: string;
  setFacebookCredentials: (
    accessToken: string,
    userId: string,
    platform: string
  ) => void;
}

const useFacebookStore = create<FacebookInterface>((set) => ({
  accessToken: "",
  userId: "",
  platform: "",
  setFacebookCredentials: (accessToken, userId, socialMedia) =>
    set({ accessToken, userId, platform: socialMedia }),
}));

export default useFacebookStore;
