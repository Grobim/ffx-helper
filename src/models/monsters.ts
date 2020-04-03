import condorUrl from "../assets/images/monsters/condor.png";
import dingoUrl from "../assets/images/monsters/dingo.png";
import waterFlanUrl from "../assets/images/monsters/waterFlan.jpg";

import { Location, Monster, MonsterType, MonsterKey } from "./types";

const monsters: Monster[] = [
  {
    key: MonsterKey.CONDOR,
    name: "Condor",
    location: Location.BESAID,
    type: MonsterType.BIRD,
    imgUrl: condorUrl,
  },
  {
    key: MonsterKey.DINGO,
    name: "Dingo",
    location: Location.BESAID,
    type: MonsterType.WOLF,
    imgUrl: dingoUrl,
  },
  {
    key: MonsterKey.WATER_FLAN,
    name: "Flambos d'eau",
    location: Location.BESAID,
    type: MonsterType.FLAMBOS,
    imgUrl: waterFlanUrl,
  },
];

export default monsters;
