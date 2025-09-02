import { spellLocalStorage } from "@/lib/localStorage";
import type { TSpell } from "@/types";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";
import { toast } from "sonner";

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
      const newFavorites = favorites.filter((fav) => fav.index !== spell.index);

      setFavorites(newFavorites);
      spellLocalStorage.setFavorites(newFavorites);

      toast.success("Removed to favorites.");
    } else {
      const newFavorites = [...favorites, spell];

      setFavorites(newFavorites);
      spellLocalStorage.setFavorites(newFavorites);

      toast.success("Added to favorites.");
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
