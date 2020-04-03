import { Location } from "./locations";
import { MonsterType } from "./monsterTypes";

interface Monster {
  name: string;
  location: Location;
  type: MonsterType;
  imgUrl: string;
}

export type { Monster };
