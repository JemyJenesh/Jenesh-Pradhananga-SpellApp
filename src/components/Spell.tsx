import type { TSpell } from "@/types";

type Props = {
  spell: TSpell;
};

export default function Spell({ spell }: Props) {
  return (
    <div>
      <p>
        {spell.name} ({spell.level})
      </p>
    </div>
  );
}
