import { create } from "zustand";
import { persist } from "zustand/middleware";
type SettingsState = {
  language: string;
  direction: string;
  changeLanguage: (language: string) => void;
};
export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      language: "ar",
      direction: "rtl",
      changeLanguage: (language) => {
        set({ language: language });
        if (language === "en-US") {
          set({ direction: "ltr" });
        } else {
          set({ direction: "rtl" });
        }
      },
    }),
    {
      // storage: localStorage,
      name: "settings", // name of the item in the storage (must be unique)
    }
  )
);
