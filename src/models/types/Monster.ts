import type { Location } from "./Location";
import type { Species } from "./Species";
import type { MonsterKey } from "./MonsterKey";

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
}

export type { Monster, AreaSpecialMonster, SpeciesSpecialMonster };
