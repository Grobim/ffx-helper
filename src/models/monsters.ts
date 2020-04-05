// TODO
// Floating death pic

import achelousUrl from "../assets/images/monsters/achelous.jpg";
import adamantoiseUrl from "../assets/images/monsters/adamantoise.png";
import aerogueUrl from "../assets/images/monsters/aerogue.jpg";
import alcyoneUrl from "../assets/images/monsters/alcyone.png";
import ahrimanUrl from "../assets/images/monsters/ahriman.png";
import anacondaurUrl from "../assets/images/monsters/anacondaur.jpg";
import bandersnatchUrl from "../assets/images/monsters/bandersnatch.jpg";
import bashuraUrl from "../assets/images/monsters/bashura.png";
import basiliskUrl from "../assets/images/monsters/basilisk.png";
import barbatosUrl from "../assets/images/monsters/barbatos.png";
import behemothUrl from "../assets/images/monsters/behemoth.png";
import behemothKingUrl from "../assets/images/monsters/behemothKing.jpg";
import biteBugUrl from "../assets/images/monsters/biteBug.png";
import blackElementUrl from "../assets/images/monsters/blackElement.gif";
import blueElementUrl from "../assets/images/monsters/blueElement.png";
import bombUrl from "../assets/images/monsters/bomb.png";
import buerUrl from "../assets/images/monsters/buer.gif";
import bunyipUrl from "../assets/images/monsters/bunyip.png";
import cactuarUrl from "../assets/images/monsters/cactuar.png";
import chimeraUrl from "../assets/images/monsters/chimera.png";
import chimeraBrainUrl from "../assets/images/monsters/chimeraBrain.jpg";
import coeurlUrl from "../assets/images/monsters/coeurl.png";
import condorUrl from "../assets/images/monsters/condor.png";
import darkElementUrl from "../assets/images/monsters/darkElement.png";
import darkFlanUrl from "../assets/images/monsters/darkFlan.jpg";
import demonolithUrl from "../assets/images/monsters/demonolith.png";
import dingoUrl from "../assets/images/monsters/dingo.png";
import dinonixUrl from "../assets/images/monsters/dinonix.png";
import dualHornUrl from "../assets/images/monsters/dualHorn.png";
import epaajUrl from "../assets/images/monsters/epaaj.jpg";
import evilEyeUrl from "../assets/images/monsters/evilEye.png";
import exorayUrl from "../assets/images/monsters/exoray.jpg";
import flameFlanUrl from "../assets/images/monsters/flameFlan.jpg";
import floatingEyeUrl from "../assets/images/monsters/floatingEye.png";
import funguarUrl from "../assets/images/monsters/funguar.png";
import gandarewaUrl from "../assets/images/monsters/gandarewa.jpg";
import garmUrl from "../assets/images/monsters/garm.jpg";
import garudaUrl from "../assets/images/monsters/garuda.png";
import geminiUrl from "../assets/images/monsters/gemini.png";
import ghostUrl from "../assets/images/monsters/ghost.png";
import goldElementUrl from "../assets/images/monsters/goldElement.png";
import gratUrl from "../assets/images/monsters/grat.jpg";
import greatMalboroUrl from "../assets/images/monsters/greatMalboro.png";
import grenadeUrl from "../assets/images/monsters/grenade.jpg";
import grendelUrl from "../assets/images/monsters/grendel.jpg";
import halmaUrl from "../assets/images/monsters/halma.jpg";
import iceFlanUrl from "../assets/images/monsters/iceFlan.jpg";
import impUrl from "../assets/images/monsters/imp.jpg";
import iguionUrl from "../assets/images/monsters/iguion.jpg";
import ipiriaUrl from "../assets/images/monsters/ipiria.jpg";
import ironGiantUrl from "../assets/images/monsters/ironGiant.png";
import killerBeeUrl from "../assets/images/monsters/killerBee.png";
import kusariqquUrl from "../assets/images/monsters/kusariqqu.jpg";
import lamashtuUrl from "../assets/images/monsters/lamashtu.jpg";
import larvaUrl from "../assets/images/monsters/larva.png";
import macheaUrl from "../assets/images/monsters/machea.jpg";
import maelspikeUrl from "../assets/images/monsters/maelspike.jpg";
import mafdetUrl from "../assets/images/monsters/mafdet.jpg";
import malboroUrl from "../assets/images/monsters/malboro.png";
import mandragoraUrl from "../assets/images/monsters/mandragora.png";
import masterCoeurlUrl from "../assets/images/monsters/masterCoeurl.jpg";
import masterTonberryUrl from "../assets/images/monsters/masterTonberry.jpg";
import melusineUrl from "../assets/images/monsters/melusine.jpg";
import miIhenFangUrl from "../assets/images/monsters/miIhenFang.png";
import murussuUrl from "../assets/images/monsters/murussu.jpg";
import mushussuUrl from "../assets/images/monsters/mushussu.jpg";
import nebirosUrl from "../assets/images/monsters/nebiros.jpg";
import nidhoggUrl from "../assets/images/monsters/nidhogg.jpg";
import ochuUrl from "../assets/images/monsters/ochu.jpg";
import ogreUrl from "../assets/images/monsters/ogre.jpg";
import puroborosUrl from "../assets/images/monsters/puroboros.jpg";
import qactuarUrl from "../assets/images/monsters/qactuar.png";
import ragoraUrl from "../assets/images/monsters/ragora.png";
import raldoUrl from "../assets/images/monsters/raldo.jpg";
import raptorUrl from "../assets/images/monsters/raptor.jpg";
import redElementUrl from "../assets/images/monsters/redElement.jpg";
import sandWolfUrl from "../assets/images/monsters/sandWolf.jpg";
import sandWormUrl from "../assets/images/monsters/sandWorm.png";
import shredUrl from "../assets/images/monsters/shred.jpg";
import simurghUrl from "../assets/images/monsters/simurgh.jpg";
import skollUrl from "../assets/images/monsters/skoll.jpg";
import snowFlanUrl from "../assets/images/monsters/snowFlan.jpg";
import snowWolfUrl from "../assets/images/monsters/snowWolf.jpg";
import spiritUrl from "../assets/images/monsters/spirit.jpg";
import splasherUrl from "../assets/images/monsters/splasher.jpg";
import tonberryUrl from "../assets/images/monsters/tonberry.png";
import thornUrl from "../assets/images/monsters/thorn.jpg";
import thunderFlanUrl from "../assets/images/monsters/thunderFlan.jpg";
import valahaUrl from "../assets/images/monsters/valaha.jpg";
import varunaUrl from "../assets/images/monsters/varuna.jpg";
import vouivreUrl from "../assets/images/monsters/vouivre.png";
import waspUrl from "../assets/images/monsters/wasp.jpg";
import waterFlanUrl from "../assets/images/monsters/waterFlan.jpg";
import whiteElementUrl from "../assets/images/monsters/whiteElement.jpg";
import wraithUrl from "../assets/images/monsters/wraith.jpg";
import xiphosUrl from "../assets/images/monsters/xiphos.jpg";
import yellowElementUrl from "../assets/images/monsters/yellowElement.jpg";
import yowieUrl from "../assets/images/monsters/yowie.jpg";
import zaurusUrl from "../assets/images/monsters/zaurus.jpg";
import zuUrl from "../assets/images/monsters/zu.jpg";

import { Location, Monster, MonsterKey, Species } from "./types";

const monsters: Monster[] = [
  {
    key: MonsterKey.ACHELOUS,
    name: "Achelus",
    location: Location.MONT_GAGAZET,
    species: Species.HAIZHE,
    imgUrl: achelousUrl,
  },
  {
    key: MonsterKey.ADAMANTOISE,
    name: "Adamankhelone",
    location: Location.INSIDE_SIN,
    species: Species.ADAMANTOISE,
    imgUrl: adamantoiseUrl,
  },
  {
    key: MonsterKey.AEROGUE,
    name: "Aroj",
    location: Location.THUNDER_PLAINS,
    species: Species.IMP,
    imgUrl: aerogueUrl,
  },
  {
    key: MonsterKey.AHRIMAN,
    name: "Ahriman",
    location: Location.MONT_GAGAZET,
    species: Species.EVIL_EYE,
    imgUrl: ahrimanUrl,
  },
  {
    key: MonsterKey.ALCYONE,
    name: "Alcyon",
    location: Location.BIKANEL,
    species: Species.BIRD,
    imgUrl: alcyoneUrl,
  },
  {
    key: MonsterKey.ANACONDAUR,
    name: "Vipère-méduse",
    location: Location.CALM_LANDS,
    species: Species.BASILISK,
    imgUrl: anacondaurUrl,
  },
  {
    key: MonsterKey.BANDERSNATCH,
    name: "Bandersnatch",
    location: Location.MONT_GAGAZET,
    species: Species.LUPINE,
    imgUrl: bandersnatchUrl,
  },
  {
    key: MonsterKey.BASHURA,
    name: "Asherah",
    location: Location.MONT_GAGAZET,
    species: Species.OGRE,
    imgUrl: bashuraUrl,
  },
  {
    key: MonsterKey.BASILISK,
    name: "Basilisk",
    location: Location.DJOSE_ROAD,
    species: Species.BASILISK,
    imgUrl: basiliskUrl,
  },
  {
    key: MonsterKey.BARBATOS,
    name: "Barbatos",
    location: Location.INSIDE_SIN,
    species: Species.ARMOR,
    imgUrl: barbatosUrl,
  },
  {
    key: MonsterKey.BEHEMOTH,
    name: "Behemoth",
    location: Location.MONT_GAGAZET,
    species: Species.BEHEMOTH,
    imgUrl: behemothUrl,
  },
  {
    key: MonsterKey.BEHEMOTH_KING,
    name: "Méga Behemoth",
    location: Location.INSIDE_SIN,
    species: Species.BEHEMOTH,
    imgUrl: behemothKingUrl,
  },
  {
    key: MonsterKey.BITE_BUG,
    name: "Elmidea",
    location: Location.DJOSE_ROAD,
    species: Species.WASP,
    imgUrl: biteBugUrl,
  },
  {
    key: MonsterKey.BLACK_ELEMENT,
    name: "Élémentaire noir",
    location: Location.OMEGA_DUNGEON,
    species: Species.ELEMENTAL,
    imgUrl: blackElementUrl,
  },
  {
    key: MonsterKey.BLUE_ELEMENT,
    name: "Élémentaire bleu",
    location: Location.MACALANIA,
    species: Species.ELEMENTAL,
    imgUrl: blueElementUrl,
  },
  {
    key: MonsterKey.BOMB,
    name: "Bombo",
    location: Location.MI_IHEN_HIGHROAD,
    species: Species.BOMB,
    imgUrl: bombUrl,
  },
  {
    key: MonsterKey.BUER,
    name: "Buer",
    location: Location.THUNDER_PLAINS,
    species: Species.EVIL_EYE,
    imgUrl: buerUrl,
  },
  {
    key: MonsterKey.BUNYIP,
    name: "Bunyips",
    location: Location.DJOSE_ROAD,
    species: Species.HELM,
    imgUrl: bunyipUrl,
  },
  {
    key: MonsterKey.CACTUAR,
    name: "Pampa",
    location: Location.BIKANEL,
    species: Species.CACTUAR,
    imgUrl: cactuarUrl,
  },
  {
    key: MonsterKey.CHIMERA,
    name: "Chimaira",
    location: Location.MACALANIA,
    species: Species.CHIMERA,
    imgUrl: chimeraUrl,
  },
  {
    key: MonsterKey.CHIMERA_BRAIN,
    name: "Kimaira",
    location: Location.CALM_LANDS,
    species: Species.CHIMERA,
    imgUrl: chimeraBrainUrl,
  },
  {
    key: MonsterKey.COEURL,
    name: "Couguar",
    location: Location.CALM_LANDS,
    species: Species.COEURL,
    imgUrl: coeurlUrl,
  },
  {
    key: MonsterKey.CONDOR,
    name: "Condor",
    location: Location.BESAID,
    species: Species.BIRD,
    imgUrl: condorUrl,
  },
  {
    key: MonsterKey.DARK_ELEMENT,
    name: "Élémentaire obscur",
    location: Location.STOLEN_FAYTH_CAVERN,
    species: Species.ELEMENTAL,
    imgUrl: darkElementUrl,
  },
  {
    key: MonsterKey.DARK_FLAN,
    name: "Flambos obscur",
    location: Location.MONT_GAGAZET,
    species: Species.FLAN,
    imgUrl: darkFlanUrl,
  },
  {
    key: MonsterKey.DEMONOLITH,
    name: "Démonolithe",
    location: Location.INSIDE_SIN,
    species: Species.DOOMSTONE,
    imgUrl: demonolithUrl,
  },
  {
    key: MonsterKey.DINGO,
    name: "Dingo",
    location: Location.BESAID,
    species: Species.LUPINE,
    imgUrl: dingoUrl,
  },
  {
    key: MonsterKey.DINONIX,
    name: "Dinoyix",
    location: Location.KILIKA,
    species: Species.REPTILE,
    imgUrl: dinonixUrl,
  },
  {
    key: MonsterKey.DUAL_HORN,
    name: "Bicorne",
    location: Location.MI_IHEN_HIGHROAD,
    species: Species.RUMINANT,
    imgUrl: dualHornUrl,
  },
  {
    key: MonsterKey.EPAAJ,
    name: "Epehj",
    location: Location.STOLEN_FAYTH_CAVERN,
    species: Species.BLADE,
    imgUrl: epaajUrl,
  },
  {
    key: MonsterKey.EVIL_EYE,
    name: "Oeil démoniaque",
    location: Location.MACALANIA,
    species: Species.EVIL_EYE,
    imgUrl: evilEyeUrl,
  },
  {
    key: MonsterKey.EXORAY,
    name: "Exoray",
    location: Location.INSIDE_SIN,
    species: Species.FUNGUS,
    imgUrl: exorayUrl,
  },
  {
    key: MonsterKey.FLAME_FLAN,
    name: "Flambos de feu",
    location: Location.CALM_LANDS,
    species: Species.FLAN,
    imgUrl: flameFlanUrl,
  },
  {
    key: MonsterKey.FLOATING_DEATH,
    name: "Oeil de la mort",
    location: Location.OMEGA_DUNGEON,
    species: Species.EVIL_EYE,
    imgUrl: ahrimanUrl,
  },
  {
    key: MonsterKey.FLOATING_EYE,
    name: "Oeil flottant",
    location: Location.MI_IHEN_HIGHROAD,
    species: Species.EVIL_EYE,
    imgUrl: floatingEyeUrl,
  },
  {
    key: MonsterKey.FUNGUAR,
    name: "Fungus",
    location: Location.MUSHROOM_ROCK_ROAD,
    species: Species.FUNGUS,
    imgUrl: funguarUrl,
  },
  {
    key: MonsterKey.GANDAREWA,
    name: "Gandharva",
    location: Location.MUSHROOM_ROCK_ROAD,
    species: Species.IMP,
    imgUrl: gandarewaUrl,
  },
  {
    key: MonsterKey.GARM,
    name: "Garoum",
    location: Location.DJOSE_ROAD,
    species: Species.LUPINE,
    imgUrl: garmUrl,
  },
  {
    key: MonsterKey.GARUDA,
    name: "Garuda",
    location: Location.MUSHROOM_ROCK_ROAD,
    species: Species.ROC,
    imgUrl: garudaUrl,
  },
  {
    key: MonsterKey.GEMINI_CLUB,
    name: "Gemini (club)",
    location: Location.INSIDE_SIN,
    species: Species.IRON_GIANT,
    imgUrl: geminiUrl,
  },
  {
    key: MonsterKey.GEMINI_SWORD,
    name: "Gemini (sword)",
    location: Location.INSIDE_SIN,
    species: Species.IRON_GIANT,
    imgUrl: geminiUrl,
  },
  {
    key: MonsterKey.GHOST,
    name: "Fantôme",
    location: Location.STOLEN_FAYTH_CAVERN,
    species: Species.REVENANT,
    imgUrl: ghostUrl,
  },
  {
    key: MonsterKey.GOLD_ELEMENT,
    name: "Élémentaire or",
    location: Location.THUNDER_PLAINS,
    species: Species.ELEMENTAL,
    imgUrl: goldElementUrl,
  },
  {
    key: MonsterKey.GRAT,
    name: "Orchida",
    location: Location.MONT_GAGAZET,
    species: Species.PLANT,
    imgUrl: gratUrl,
  },
  {
    key: MonsterKey.GREAT_MALBORO,
    name: "Morbol",
    location: Location.INSIDE_SIN,
    species: Species.MALBORO,
    imgUrl: greatMalboroUrl,
  },
  {
    key: MonsterKey.GRENADE,
    name: "Grenada",
    location: Location.MONT_GAGAZET,
    species: Species.BOMB,
    imgUrl: grenadeUrl,
  },
  {
    key: MonsterKey.GRENDEL,
    name: "Grendel",
    location: Location.MONT_GAGAZET,
    species: Species.RUMINANT,
    imgUrl: grendelUrl,
  },
  {
    key: MonsterKey.HALMA,
    name: "Haarma",
    location: Location.OMEGA_DUNGEON,
    species: Species.HELM,
    imgUrl: halmaUrl,
  },
  {
    key: MonsterKey.ICE_FLAN,
    name: "Flambos de glace",
    location: Location.MACALANIA,
    species: Species.FLAN,
    imgUrl: iceFlanUrl,
  },
  {
    key: MonsterKey.IMP,
    name: "Galkimasera",
    location: Location.STOLEN_FAYTH_CAVERN,
    species: Species.IMP,
    imgUrl: impUrl,
  },
  {
    key: MonsterKey.IGUION,
    name: "Iguanor",
    location: Location.MACALANIA,
    species: Species.REPTILE,
    imgUrl: iguionUrl,
  },
  {
    key: MonsterKey.QACTUAR,
    name: "Pampa ?",
    location: Location.THUNDER_PLAINS,
    species: Species.CACTUAR,
    imgUrl: qactuarUrl,
  },
  {
    key: MonsterKey.KILLER_BEE,
    name: "Abeille tueuse",
    location: Location.KILIKA,
    species: Species.WASP,
    imgUrl: killerBeeUrl,
  },
  {
    key: MonsterKey.KUSARIQQU,
    name: "Kusarique",
    location: Location.THUNDER_PLAINS,
    species: Species.DRAKE,
    imgUrl: kusariqquUrl,
  },
  {
    key: MonsterKey.IPIRIA,
    name: "Ipiria",
    location: Location.MI_IHEN_HIGHROAD,
    species: Species.REPTILE,
    imgUrl: ipiriaUrl,
  },
  {
    key: MonsterKey.IRON_GIANT,
    name: "Ekarissor",
    location: Location.THUNDER_PLAINS,
    species: Species.IRON_GIANT,
    imgUrl: ironGiantUrl,
  },
  {
    key: MonsterKey.LAMASHTU,
    name: "Lamashtu",
    location: Location.MUSHROOM_ROCK_ROAD,
    species: Species.DRAKE,
    imgUrl: lamashtuUrl,
  },
  {
    key: MonsterKey.LARVA,
    name: "Larva",
    location: Location.THUNDER_PLAINS,
    species: Species.LARVA,
    imgUrl: larvaUrl,
  },
  {
    key: MonsterKey.MACHEA,
    name: "Métillé",
    location: Location.OMEGA_DUNGEON,
    species: Species.BLADE,
    imgUrl: macheaUrl,
  },
  {
    key: MonsterKey.MAELSPIKE,
    name: "Barracuda cornu",
    location: Location.MONT_GAGAZET,
    species: Species.DINOFISH,
    imgUrl: maelspikeUrl,
  },
  {
    key: MonsterKey.MAFDET,
    name: "Mafut",
    location: Location.MACALANIA,
    species: Species.HELM,
    imgUrl: mafdetUrl,
  },
  {
    key: MonsterKey.MALBORO,
    name: "Xylomid",
    location: Location.CALM_LANDS,
    species: Species.MALBORO,
    imgUrl: malboroUrl,
  },
  {
    key: MonsterKey.MANDRAGORA,
    name: "Mandragore",
    location: Location.MONT_GAGAZET,
    species: Species.OCHU,
    imgUrl: mandragoraUrl,
  },
  {
    key: MonsterKey.MASTER_COEURL,
    name: "Maître Couguar",
    location: Location.OMEGA_DUNGEON,
    species: Species.COEURL,
    imgUrl: masterCoeurlUrl,
  },
  {
    key: MonsterKey.MASTER_TONBERRY,
    name: "Tomberry Nion",
    location: Location.OMEGA_DUNGEON,
    species: Species.TONBERRY,
    imgUrl: masterTonberryUrl,
  },
  {
    key: MonsterKey.MELUSINE,
    name: "Mélusine",
    location: Location.THUNDER_PLAINS,
    species: Species.REPTILE,
    imgUrl: melusineUrl,
  },
  {
    key: MonsterKey.MI_IHEN_FANG,
    name: "Chien de Mi'ihen",
    location: Location.MI_IHEN_HIGHROAD,
    species: Species.LUPINE,
    imgUrl: miIhenFangUrl,
  },
  {
    key: MonsterKey.MURUSSU,
    name: "Mulfus",
    location: Location.MACALANIA,
    species: Species.HELM,
    imgUrl: murussuUrl,
  },
  {
    key: MonsterKey.MUSHUSSU,
    name: "Mushussu",
    location: Location.BIKANEL,
    species: Species.DRAKE,
    imgUrl: mushussuUrl,
  },
  {
    key: MonsterKey.NEBIROS,
    name: "Nebiros",
    location: Location.CALM_LANDS,
    species: Species.WASP,
    imgUrl: nebirosUrl,
  },
  {
    key: MonsterKey.NIDHOGG,
    name: "Nidhog",
    location: Location.STOLEN_FAYTH_CAVERN,
    species: Species.DRAKE,
    imgUrl: nidhoggUrl,
  },
  {
    key: MonsterKey.OCHU,
    name: "Ochu",
    location: Location.DJOSE_ROAD,
    species: Species.OCHU,
    imgUrl: ochuUrl,
  },
  {
    key: MonsterKey.OGRE,
    name: "Ogre",
    location: Location.CALM_LANDS,
    species: Species.OGRE,
    imgUrl: ogreUrl,
  },
  {
    key: MonsterKey.PUROBOROS,
    name: "Pyrobolse",
    location: Location.OMEGA_DUNGEON,
    species: Species.BOMB,
    imgUrl: puroborosUrl,
  },
  {
    key: MonsterKey.RAGORA,
    name: "Balsamine",
    location: Location.KILIKA,
    species: Species.PLANT,
    imgUrl: ragoraUrl,
  },
  {
    key: MonsterKey.RALDO,
    name: "Cujo",
    location: Location.MI_IHEN_HIGHROAD,
    species: Species.HELM,
    imgUrl: raldoUrl,
  },
  {
    key: MonsterKey.RAPTOR,
    name: "Raptour",
    location: Location.MUSHROOM_ROCK_ROAD,
    species: Species.REPTILE,
    imgUrl: raptorUrl,
  },
  {
    key: MonsterKey.RED_ELEMENT,
    name: "Élémentaire rouge",
    location: Location.MUSHROOM_ROCK_ROAD,
    species: Species.ELEMENTAL,
    imgUrl: redElementUrl,
  },
  {
    key: MonsterKey.SAND_WOLF,
    name: "Loup des sables",
    location: Location.BIKANEL,
    species: Species.LUPINE,
    imgUrl: sandWolfUrl,
  },
  {
    key: MonsterKey.SAND_WORM,
    name: "Ver des sables",
    location: Location.BIKANEL,
    species: Species.WORM,
    imgUrl: sandWormUrl,
  },
  {
    key: MonsterKey.SHRED,
    name: "Shred",
    location: Location.CALM_LANDS,
    species: Species.HELM,
    imgUrl: shredUrl,
  },
  {
    key: MonsterKey.SIMURGH,
    name: "Simurgh",
    location: Location.DJOSE_ROAD,
    species: Species.BIRD,
    imgUrl: simurghUrl,
  },
  {
    key: MonsterKey.SKOLL,
    name: "Lycaon",
    location: Location.CALM_LANDS,
    species: Species.LUPINE,
    imgUrl: skollUrl,
  },
  {
    key: MonsterKey.SNOW_FLAN,
    name: "Flambos de neige",
    location: Location.DJOSE_ROAD,
    species: Species.FLAN,
    imgUrl: snowFlanUrl,
  },
  {
    key: MonsterKey.SNOW_WOLF,
    name: "Loup des neiges",
    location: Location.MACALANIA,
    species: Species.LUPINE,
    imgUrl: snowWolfUrl,
  },
  {
    key: MonsterKey.SPIRIT,
    name: "Esprit",
    location: Location.OMEGA_DUNGEON,
    species: Species.LARVA,
    imgUrl: spiritUrl,
  },
  {
    key: MonsterKey.SPLASHER,
    name: "Serrasalmus",
    location: Location.MONT_GAGAZET,
    species: Species.UNKNOWN,
    imgUrl: splasherUrl,
  },
  {
    key: MonsterKey.TONBERRY,
    name: "Tomberry",
    location: Location.STOLEN_FAYTH_CAVERN,
    species: Species.TONBERRY,
    imgUrl: tonberryUrl,
  },
  {
    key: MonsterKey.THORN,
    name: "Thorn",
    location: Location.STOLEN_FAYTH_CAVERN,
    species: Species.FUNGUS,
    imgUrl: thornUrl,
  },
  {
    key: MonsterKey.THUNDER_FLAN,
    name: "Flambos de foudre",
    location: Location.MUSHROOM_ROCK_ROAD,
    species: Species.FLAN,
    imgUrl: thunderFlanUrl,
  },
  {
    key: MonsterKey.VALAHA,
    name: "Varaha",
    location: Location.STOLEN_FAYTH_CAVERN,
    species: Species.RUMINANT,
    imgUrl: valahaUrl,
  },
  {
    key: MonsterKey.VARUNA,
    name: "Varuna",
    location: Location.OMEGA_DUNGEON,
    species: Species.SPELLSPINNER,
    imgUrl: varunaUrl,
  },
  {
    key: MonsterKey.VOUIVRE,
    name: "Vouivre",
    location: Location.MI_IHEN_HIGHROAD,
    species: Species.DRAKE,
    imgUrl: vouivreUrl,
  },
  {
    key: MonsterKey.WASP,
    name: "Guêpe",
    location: Location.MACALANIA,
    species: Species.WASP,
    imgUrl: waspUrl,
  },
  {
    key: MonsterKey.WATER_FLAN,
    name: "Flambos d'eau",
    location: Location.BESAID,
    species: Species.FLAN,
    imgUrl: waterFlanUrl,
  },
  {
    key: MonsterKey.WHITE_ELEMENT,
    name: "Élémentaire blanc",
    location: Location.MI_IHEN_HIGHROAD,
    species: Species.FLAN,
    imgUrl: whiteElementUrl,
  },
  {
    key: MonsterKey.WRAITH,
    name: "Spectre",
    location: Location.INSIDE_SIN,
    species: Species.REVENANT,
    imgUrl: wraithUrl,
  },
  {
    key: MonsterKey.XIPHOS,
    name: "Koospos",
    location: Location.MACALANIA,
    species: Species.BLADE,
    imgUrl: xiphosUrl,
  },
  {
    key: MonsterKey.YELLOW_ELEMENT,
    name: "Élémentaire jaune",
    location: Location.KILIKA,
    species: Species.ELEMENTAL,
    imgUrl: yellowElementUrl,
  },
  {
    key: MonsterKey.YOWIE,
    name: "Yowie",
    location: Location.STOLEN_FAYTH_CAVERN,
    species: Species.REPTILE,
    imgUrl: yowieUrl,
  },
  {
    key: MonsterKey.ZAURUS,
    name: "Zaurus",
    location: Location.OMEGA_DUNGEON,
    species: Species.REPTILE,
    imgUrl: zaurusUrl,
  },
  {
    key: MonsterKey.ZU,
    name: "Zu",
    location: Location.BIKANEL,
    species: Species.ROC,
    imgUrl: zuUrl,
  },
];

export default monsters;
