import type {
  AreaSpecialMonster,
  Location,
  Monster,
  MonsterKey,
  SpecialSpecies,
  Species,
  SpeciesSpecialMonster,
} from "../../models";

interface CaptureState {
  monsters: MappedMonster[];
  areaSpecialMonsters: MappedAreaSpecialMonster[];
  speciesSpecialMonsters: MappedSpeciesSpecialMonster[];
  pendingCaptureSaves: CaptureMap;
  textFilter: string;
  locationFilter?: Location;
  speciesFilter?: Species;
  areaMonsterFilter?: MonsterKey;
  speciesMonsterFilter?: MonsterKey;
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
  location: Location;
}

interface MappedSpeciesSpecialMonster extends SpeciesSpecialMonster {
  monsterList: MonsterKey[];
  targetSpecies: SpecialSpecies;
}

export type {
  CaptureMap,
  CaptureState,
  MappedMonster,
  MappedAreaSpecialMonster,
};
