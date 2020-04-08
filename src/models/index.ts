import { MonsterArena, Species } from "./types";

const monsterArenas = Object.keys(MonsterArena);
const speciesList = Object.keys(Species);

export * from "./monsters";
export * from "./types";
export { monsterArenas, speciesList };
