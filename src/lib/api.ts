import type { TSpell, TSpellDetail } from "@/types";

const apiURL = "https://www.dnd5eapi.co/api/2014";

export function getSpells(): Promise<{
  count: number;
  results: TSpell[];
}> {
  return fetch(`${apiURL}/spells`).then((res) => res.json());
}

export function getSpell(id: string): Promise<TSpellDetail> {
  return fetch(`${apiURL}/spells/${id}`).then((res) => res.json());
}
