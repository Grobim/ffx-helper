import { Monster } from "../../models";

interface CaptureState {
  monsters: MappedMonster[];
}

type Captured<T> = T & {
  capturedCount: number;
  pendingCaptureCount: number;
};

type MappedMonster = Captured<Monster>;

export type { Captured, CaptureState, MappedMonster };
