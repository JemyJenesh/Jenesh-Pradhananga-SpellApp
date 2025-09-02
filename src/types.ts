export type TSpell = {
  index: string;
  name: string;
  level: number;
  url: string;
};

export type Damage = {
  damage_type: DamageType;
  damage_at_slot_level: Record<string, string>;
};

export type DamageType = {
  index: string;
  name: string;
  url: string;
};

export type Class = {
  index: string;
  name: string;
  url: string;
};

export type TSpellDetail = {
  index: string;
  name: string;
  desc: string[];
  higher_level: string[];
  range: string;
  components: string[];
  material: string;
  ritual: boolean;
  duration: string;
  concentration: boolean;
  casting_time: string;
  level: number;
  attack_type: string;
  damage?: Damage;
  school: Class;
  classes: Class[];
  subclasses: Class[];
  url: string;
  updated_at: string;
};
