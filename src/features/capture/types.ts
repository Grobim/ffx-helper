import type {
  Location,
  MonsterArenaMonster,
  MonsterArena,
  Monster,
  MonsterKey,
  SpecialSpecies,
  Species,
  SpeciesSpecialMonster,
} from "../../models";

interface CaptureState {
  monsters: MappedMonster[];
  monsterArenaMonsters: MappedMonsterArena[];
  speciesSpecialMonsters: MappedSpeciesSpecialMonster[];
  pendingCaptureSaves: CaptureMap;
  textFilter: string;
  locationFilter?: Location;
  speciesFilter?: Species;
  monsterAreaFilter?: MonsterKey;
  speciesMonsterFilter?: MonsterKey;
}

type CaptureMap = {
  [key in MonsterKey]?: number;
};

interface MappedMonster extends Monster {
  capturedCount: number;
  pendingCaptureCount: number;
}

interface MappedMonsterArena extends MonsterArenaMonster {
  monsterList: MonsterKey[];
  monsterArenas: MonsterArena;
}

interface MappedSpeciesSpecialMonster extends SpeciesSpecialMonster {
  monsterList: MonsterKey[];
  targetSpecies: SpecialSpecies;
}

export type { CaptureMap, CaptureState, MappedMonster, MappedMonsterArena };
