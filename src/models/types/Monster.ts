import type { Location } from "./Location";
import type { MonsterArena } from "./MonsterArena";
import type { Species } from "./Species";
import type { MonsterKey } from "./MonsterKey";

interface Monster {
  key: MonsterKey;
  name: string;
  monsterArena: MonsterArena;
  species: Species;
  imgUrl: string;
  locations: Location[];
}

interface MonsterArenaMonster
  extends Omit<Monster, "monsterArena" | "locations"> {}

interface SpeciesSpecialMonster
  extends Omit<Monster, "monsterArena" | "locations"> {
  requiredCaptures: number;
}

export type { Monster, MonsterArenaMonster, SpeciesSpecialMonster };
