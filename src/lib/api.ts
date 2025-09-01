import type { TSpell } from "@/types";

const apiURL = "https://www.dnd5eapi.co/api/2014";

export function getSpells(): Promise<{
  count: Number;
  results: TSpell[];
}> {
  return fetch(`${apiURL}/spells`).then((res) => res.json());
}
