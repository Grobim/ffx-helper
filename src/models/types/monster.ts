import type { Location } from "./location";
import type { Species } from "./monsterType";
import type { MonsterKey } from "./monsterKey";

interface Monster {
  key: MonsterKey;
  name: string;
  location: Location;
  species: Species;
  imgUrl: string;
}

interface AreaSpecialMonster extends Omit<Monster, "location"> {}

interface SpeciesSpecialMonster extends Omit<Monster, "location"> {
  requiredCaptures: number;
  targetSpecies: Species;
}

export type { Monster, AreaSpecialMonster, SpeciesSpecialMonster };
