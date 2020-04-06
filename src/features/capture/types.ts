import type {
  AreaSpecialMonster,
  Location,
  Monster,
  MonsterKey,
  Species,
} from "../../models";

interface CaptureState {
  monsters: MappedMonster[];
  areaSpecialMonsters: (MappedAreaSpecialMonster & { location: Location })[];
  pendingCaptureSaves: CaptureMap;
  textFilter: string;
  locationFilter?: Location;
  speciesFilter?: Species;
  areaMonsterFilter?: MonsterKey;
}

type CaptureMap = {
  [key in MonsterKey]?: number;
};

interface MappedMonster extends Monster {
  capturedCount: number;
  pendingCaptureCount: number;
}

interface MappedAreaSpecialMonster extends AreaSpecialMonster {
  monsterList: MonsterKey[];
}

export type {
  CaptureMap,
  CaptureState,
  MappedMonster,
  MappedAreaSpecialMonster,
};
