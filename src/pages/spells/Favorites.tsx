import { useFavoriteSpells } from "@/components/FavoriteSpellsProvider";
import Spell from "@/components/Spell";

export default function SpellFavoritesPage() {
  const { favorites } = useFavoriteSpells();

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="col-span-full">
        <h1 className="text-2xl font-bold">Favorite spells</h1>
      </div>
      {favorites.length < 1 ? (
        <p>No favorite spells found!</p>
      ) : (
        favorites.map((spell) => <Spell key={spell.index} spell={spell} />)
      )}
    </div>
  );
}
