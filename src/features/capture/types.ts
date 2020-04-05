import { Monster, MonsterKey } from "../../models";

interface CaptureState {
  monsters: MappedMonster[];
  pendingSave: CaptureMap;
  textFilter: string;
}

type CaptureMap = {
  [key in MonsterKey]?: number;
};

type Captured<T> = T & {
  capturedCount: number;
  pendingCaptureCount: number;
};

type MappedMonster = Captured<Monster>;

export type { Captured, CaptureMap, CaptureState, MappedMonster };
