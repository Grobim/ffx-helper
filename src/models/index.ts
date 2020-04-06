import { Location, Monster, MonsterKey, Species } from "./types";

const locations = Object.keys(Location);
const speciesList = Object.keys(Species);

export type { Monster, Location, MonsterKey, Species };
export { areaSpecialMonsters, monsters } from "./monsters";
export { locations, speciesList };
