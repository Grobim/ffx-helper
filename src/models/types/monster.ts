import type { Location } from "./location";
import type { MonsterType } from "./monsterType";
import type { MonsterKey } from "./monsterKey";

interface Monster {
  key: MonsterKey;
  name: string;
  location: Location;
  type: MonsterType;
  imgUrl: string;
}

export type { Monster };
