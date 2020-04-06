import type { Monster, MonsterKey, Location, Species } from "../../models";

interface CaptureState {
  monsters: MappedMonster[];
  pendingCaptureSaves: CaptureMap;
  textFilter: string;
  locationFilter?: Location;
  speciesFilter?: Species;
}

type CaptureMap = {
  [key in MonsterKey]?: number;
};

interface MappedMonster extends Monster {
  capturedCount: number;
  pendingCaptureCount: number;
}

export type { CaptureMap, CaptureState, MappedMonster };
