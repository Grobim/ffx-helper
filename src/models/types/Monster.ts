import type { MonsterArena } from "./MonsterArena";
import type { Species } from "./Species";
import type { MonsterKey } from "./MonsterKey";

interface Monster {
  key: MonsterKey;
  name: string;
  monsterArena: MonsterArena;
  species: Species;
  imgUrl: string;
}

interface MonsterArenaMonster extends Omit<Monster, "monsterArena"> {}

interface SpeciesSpecialMonster extends Omit<Monster, "monsterArena"> {
  requiredCaptures: number;
}

export type { Monster, MonsterArenaMonster, SpeciesSpecialMonster };
