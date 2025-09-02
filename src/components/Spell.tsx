import type { TSpell } from "@/types";
import { Link } from "react-router";

type Props = {
  spell: TSpell;
};

export default function Spell({ spell }: Props) {
  return (
    <Link to={`/spells/${spell.index}`}>
      <div className="border rounded-lg px-4 py-2 cursor-pointer">
        <p className="font-semibold leading-tight">{spell.name}</p>
        <p className="text-sm font-semibold text-gray-600">
          Level: {spell.level}
        </p>
      </div>
    </Link>
  );
}
