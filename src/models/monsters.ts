import condorUrl from "../assets/images/monsters/condor.png";
import dingoUrl from "../assets/images/monsters/dingo.png";
import waterFlanUrl from "../assets/images/monsters/waterFlan.jpg";

import { Location } from "./locations";
import { MonsterType } from "./monsterTypes";
import type { Monster } from "./types";

const monsters: Monster[] = [
  {
    name: "Condor",
    location: Location.BESAID,
    type: MonsterType.BIRD,
    imgUrl: condorUrl,
  },
  {
    name: "Dingo",
    location: Location.BESAID,
    type: MonsterType.WOLF,
    imgUrl: dingoUrl,
  },
  {
    name: "Flambos d'eau",
    location: Location.BESAID,
    type: MonsterType.FLAMBOS,
    imgUrl: waterFlanUrl,
  },
];

export default monsters;
