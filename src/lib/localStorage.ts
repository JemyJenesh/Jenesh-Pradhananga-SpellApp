import type { TSpell } from "@/types";

const KEY = "favorites";

export const spellLocalStorage = {
  getFavorites: (): TSpell[] => {
    const data = localStorage.getItem(KEY);

    if (data) {
      return JSON.parse(data);
    }

    return [];
  },

  setFavorites: (favorites: TSpell[]) => {
    localStorage.setItem(KEY, JSON.stringify(favorites));
  },
};
