import { spellLocalStorage } from "@/lib/localStorage";
import type { TSpell } from "@/types";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";

type Context = {
  favorites: TSpell[];
  toggleFavorite: (id: TSpell) => void;
};

const favoriteSpellsContext = createContext<Context>({
  favorites: [],
  toggleFavorite: () => {},
});

export function FavoriteSpellsProvider({ children }: PropsWithChildren) {
  const [favorites, setFavorites] = useState<TSpell[]>([]);

  const toggleFavorite = (spell: TSpell) => {
    if (favorites.find((fav) => fav.index === spell.index)) {
      const newFavorites = favorites.filter((fav) => fav.index === spell.index);

      setFavorites(newFavorites);
      spellLocalStorage.setFavorites(newFavorites);
    } else {
      const newFavorites = [...favorites, spell];

      setFavorites(newFavorites);
      spellLocalStorage.setFavorites(newFavorites);
    }
  };

  useEffect(() => {
    const data = spellLocalStorage.getFavorites();

    setFavorites(data);
  }, []);

  return (
    <favoriteSpellsContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </favoriteSpellsContext.Provider>
  );
}

export const useFavoriteSpells = () => useContext(favoriteSpellsContext);
