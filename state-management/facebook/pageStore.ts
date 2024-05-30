import { create } from "zustand";

export interface PageDataInterface {
  access_token: string;
  category: string;
  id: string;
  name: string;
}

export interface PageInterface {
  pages: PageDataInterface[];
  selectedPageId: string;
  setSelectedPageID: (id: string) => void;
  setPages: (pages: []) => void;
}

const useFaceBookPages = create<PageInterface>((set) => ({
  pages: [],
  selectedPageId: "",
  setPages: (pages: PageDataInterface[]) => set({ pages }),
  setSelectedPageID: (id: string) => set({ selectedPageId: id }),
}));

export default useFaceBookPages;
