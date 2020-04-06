import React, { ChangeEvent } from "react";
import clsx from "clsx";

import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

import { speciesList } from "../../../models";
import type { MonsterKey, Species } from "../../../models";

import {
  useCheckedAreaMonsters,
  useCheckedSpeciesMonsters,
  useSpeciesFilter,
  useAreaMonsterFilter,
  useSpeciesMonsterFilter,
} from "..";

import useStyles from "./ExpandedFilters.styles";

function ExpandedFilters() {
  const classes = useStyles();

  const checkedAreaMonsters = useCheckedAreaMonsters();
  const checkedSpeciesMonsters = useCheckedSpeciesMonsters();

  const [speciesFilter, setSpeciesFilter] = useSpeciesFilter();
  const [areaMonsterFilter, setAreaMonsterFilter] = useAreaMonsterFilter();
  const [
    speciesMonsterFilter,
    setSpeciesMonsterFilter,
  ] = useSpeciesMonsterFilter();

  const selectedAreaMonster = checkedAreaMonsters.find(
    (checkedMonster) => checkedMonster.key === areaMonsterFilter
  );
  const selectedSpeciesMonster = checkedSpeciesMonsters.find(
    (checkedMonster) => checkedMonster.key === speciesMonsterFilter
  );

  const isSelectedAreaMonsterUnlocked =
    selectedAreaMonster && selectedAreaMonster.isUnlocked;
  const isSelectedSpeciesMonsterUnlocked =
    selectedSpeciesMonster && selectedSpeciesMonster.isUnlocked;
  function handleSpeciesChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setSpeciesFilter(event.target.value as Species);
  }

  function handleAreaMonsterChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setAreaMonsterFilter(event.target.value as MonsterKey);
  }

  function handleSpeciesMonsterChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setSpeciesMonsterFilter(event.target.value as MonsterKey);
  }

  return (
    <Grid
      container
      className={classes.otherFilters}
      spacing={1}
      justify="space-between"
    >
      <Grid item xs={12} sm={6} md={5} lg={4}>
        <TextField
          id="areaMonsterSelect"
          select
          fullWidth
          value={areaMonsterFilter || ""}
          onChange={handleAreaMonsterChange}
          label="Area Monster"
          variant="outlined"
          InputProps={{
            className: clsx({
              [classes.selectItemSuccess]: isSelectedAreaMonsterUnlocked,
            }),
          }}
        >
          <MenuItem key="" value="">
            &nbsp;
          </MenuItem>
          {checkedAreaMonsters.map((monster) => (
            <MenuItem
              key={monster.key}
              value={monster.key}
              className={clsx({
                [classes.selectItemSuccess]: monster.isUnlocked,
              })}
            >
              {monster.name}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={6} md={5} lg={4}>
        <TextField
          id="speciesMonsterSelect"
          select
          fullWidth
          value={speciesMonsterFilter || ""}
          onChange={handleSpeciesMonsterChange}
          label="Species Monster"
          variant="outlined"
          InputProps={{
            className: clsx({
              [classes.selectItemSuccess]: isSelectedSpeciesMonsterUnlocked,
            }),
          }}
        >
          <MenuItem key="" value="">
            &nbsp;
          </MenuItem>
          {checkedSpeciesMonsters.map((monster) => (
            <MenuItem
              key={monster.key}
              value={monster.key}
              className={clsx({
                [classes.selectItemSuccess]: monster.isUnlocked,
              })}
            >
              {monster.name}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={6} md={5} lg={4}>
        <TextField
          id="speciesSelect"
          select
          fullWidth
          value={speciesFilter || ""}
          onChange={handleSpeciesChange}
          label="Species"
          variant="outlined"
        >
          <MenuItem key="" value="">
            &nbsp;
          </MenuItem>
          {speciesList.map((species) => (
            <MenuItem key={species} value={species}>
              {species}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
    </Grid>
  );
}

export default ExpandedFilters;
