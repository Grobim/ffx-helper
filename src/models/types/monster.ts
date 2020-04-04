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

export type { Monster };
