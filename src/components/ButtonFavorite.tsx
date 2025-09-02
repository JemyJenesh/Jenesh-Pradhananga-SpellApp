import { useFavoriteSpells } from "@/components/FavoriteSpellsProvider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { TSpell } from "@/types";
import { StarIcon } from "lucide-react";

type Props = {
  spell: TSpell;
};

export default function ButtonFavorite({ spell }: Props) {
  const { favorites, toggleFavorite } = useFavoriteSpells();
  const isFavorite = favorites.find((fav) => fav.index === spell.index);

  const onClick = () => {
    toggleFavorite(spell);
  };

  return (
    <Button
      variant="secondary"
      size="icon"
      className="size-8"
      onClick={onClick}
    >
      <StarIcon
        className={cn({
          "fill-primary stroke-primary": isFavorite,
        })}
      />
    </Button>
  );
}
