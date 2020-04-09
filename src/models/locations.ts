import { Location } from "./types";
import type { MainLocation, MainLocationKey } from "./types";

const locations: Record<MainLocationKey, MainLocation> = {
  [Location.BESAID]: {
    key: Location.BESAID,
    subLocations: [Location.BESAID_WATERFALL_WAY],
  },
  [Location.KILIKA]: {
    key: Location.KILIKA,
    subLocations: [Location.KILIKA_WOODS],
  },
  [Location.LUCA]: {
    key: Location.LUCA,
  },
  [Location.MI_IHEN_HIGHROAD]: {
    key: Location.MI_IHEN_HIGHROAD,
    subLocations: [Location.MI_IHEN_HIGHROAD_OLDROAD],
  },
  [Location.MUSHROOM_ROCK_ROAD]: {
    key: Location.MUSHROOM_ROCK_ROAD,
  },
  [Location.DJOSE]: {
    key: Location.DJOSE,
    subLocations: [Location.DJOSE_HIGHROAD, Location.MOONFLOW],
  },
  [Location.THUNDER_PLAINS]: {
    key: Location.THUNDER_PLAINS,
  },
  [Location.MACALANIA]: {
    key: Location.MACALANIA,
    subLocations: [Location.LAKE_MACALANIA, Location.MACALANIA_WOODS],
  },
  [Location.BIKANEL]: {
    key: Location.BIKANEL,
    subLocations: [Location.AIRSHIP, Location.CACTUAR_NATION, Location.HOME],
  },
  [Location.CALM_LANDS]: {
    key: Location.CALM_LANDS,
  },
  [Location.CAVERN_OF_THE_STOLEN_FAYTH]: {
    key: Location.CAVERN_OF_THE_STOLEN_FAYTH,
  },
  [Location.MONT_GAGAZET]: {
    key: Location.MONT_GAGAZET,
    subLocations: [Location.MONT_GAGAZET_CAVE, Location.MONT_GAGAZET_MOUNTAINS],
  },
  [Location.OMEGA_RUINS]: {
    key: Location.OMEGA_RUINS,
  },
  [Location.ZANARKAND]: {
    key: Location.ZANARKAND,
  },
  [Location.INSIDE_SIN]: {
    key: Location.INSIDE_SIN,
  },
};

export { locations };
