enum Species {
  ADAMANTOISE = "ADAMANTOISE",
  ARMOR = "ARMOR",
  BASILISK = "BASILISK",
  BEHEMOTH = "BEHEMOTH",
  BIRD = "BIRD",
  BLADE = "BLADE",
  BOMB = "BOMB",
  CACTUAR = "CACTUAR",
  CHIMERA = "CHIMERA",
  COEURL = "COEURL",
  DINOFISH = "DINOFISH",
  DOOMSTONE = "DOOMSTONE",
  DRAKE = "DRAKE",
  ELEMENTAL = "ELEMENTAL",
  EVIL_EYE = "EVIL_EYE",
  FLAN = "FLAN",
  FUNGUS = "FUNGUS",
  HAIZHE = "HAIZHE",
  HELM = "HELM",
  IMP = "IMP",
  IRON_GIANT = "IRON_GIANT",
  LARVA = "LARVA",
  LUPINE = "LUPINE",
  MALBORO = "MALBORO",
  OCHU = "OCHU",
  OGRE = "OGRE",
  PLANT = "PLANT",
  REPTILE = "REPTILE",
  REVENANT = "REVENANT",
  ROC = "ROC",
  RUMINANT = "RUMINANT",
  SPELLSPINNER = "SPELLSPINNER",
  TONBERRY = "TONBERRY",
  UNKNOWN = "UNKNOWN",
  WASP = "WASP",
  WORM = "WORM",
}

type SpecialSpecies =
  | Species.LUPINE
  | Species.REPTILE
  | Species.BIRD
  | Species.WASP
  | Species.IMP
  | Species.EVIL_EYE
  | Species.FLAN
  | Species.ELEMENTAL
  | Species.HELM
  | Species.DRAKE
  | Species.FUNGUS
  | Species.BOMB
  | Species.RUMINANT
  | Species.IRON_GIANT;

export type { SpecialSpecies };
export { Species };
