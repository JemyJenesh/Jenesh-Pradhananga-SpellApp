import ButtonFavorite from "@/components/ButtonFavorite";
import type { TSpell } from "@/types";
import { Link } from "react-router";

type Props = {
  spell: TSpell;
};

export default function Spell({ spell }: Props) {
  return (
    <div className="flex border rounded-lg px-4 py-2 ">
      <Link to={`/spells/${spell.index}`} className="flex-1 cursor-pointer">
        <p className="font-semibold leading-tight">{spell.name}</p>
        <p className="text-sm font-semibold text-gray-600">
          Level: {spell.level}
        </p>
      </Link>
      <ButtonFavorite spell={spell} />
    </div>
  );
}
