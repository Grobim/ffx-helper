import { Location, Species } from "./types";

const locations = Object.keys(Location);
const speciesList = Object.keys(Species);

export * from "./types";
export * from "./monsters";
export { locations, speciesList };
