import { Location, Monster, MonsterKey, Species } from "./types";
import monsters from "./monsters";

const locations = Object.keys(Location);
const speciesList = Object.keys(Species);

export type { Monster, Location, MonsterKey, Species };

export { monsters, locations, speciesList };
