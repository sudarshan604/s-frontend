import { create } from "zustand";
import useFacebookStore, { FacebookInterface } from "./metaStore";

export interface PageDataInterface {
  access_token: string;
  category: string;
  id: string;
  name: string;
}

export interface PageInterface {
  pages: PageDataInterface[];
  setPages: (pages: []) => void;
}

const useFaceBookPages = create<PageInterface>((set) => ({
  pages: [],
  setPages: (pages: PageDataInterface[]) => set({ pages }),
}));

export default useFaceBookPages;
