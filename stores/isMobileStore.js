import { create } from "zustand";

const useIsMobileStore = create((set) => ({
  isMobile: true,
  setIsMobile: (active) => set((state) => ({ isMobile: active })),
}));

export default useIsMobileStore;
