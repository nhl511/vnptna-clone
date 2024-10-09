import { create } from "zustand";

export const useStore = create<any>((set) => ({
  isPersonal: true,
  token: "",
  isShowFile: false,
  setIsPersonal: (state: boolean) => set({ isPersonal: state }),
  setToken: (state: string) => set({ token: state }),
  setIsShowFile: (state: boolean) => set({ isShowFile: state }),
}));
