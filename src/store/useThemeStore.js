import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("chat") || "red",
  setTheme: (theme) => {
    Storage.setItem("chat-theme", theme);
    set({ theme });
  },
}));
