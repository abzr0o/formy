import { StateCreator, create } from "zustand";
import { persist } from "zustand/middleware";
type LoginState = {
  login: () => void;
  isLoggedIn: boolean;
  logout: () => void;
};
export const useLoginStore = create<LoginState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      login: () => set({ isLoggedIn: true }),
      logout: () => set({ isLoggedIn: false }),
    }),
    {
      // storage: localStorage,
      name: "auth", // name of the item in the storage (must be unique)
    }
  )
);
