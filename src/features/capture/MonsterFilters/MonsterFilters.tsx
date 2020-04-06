import React, { ChangeEvent, useState } from "react";
import clsx from "clsx";

import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import FilterListIcon from "@material-ui/icons/FilterList";
import SearchIcon from "@material-ui/icons/Search";

import { speciesList } from "../../../models";
import type { MonsterKey, Species } from "../../../models";

import {
  useCheckedAreaMonsters,
  useTextFilter,
  useSpeciesFilter,
  useAreaMonsterFilter,
} from "..";

import useStyles from "./MonsterFilters.style";

function MonsterFilters() {
  const styles = useStyles();

  const checkedAreaMonsters = useCheckedAreaMonsters();

  const [isExpanded, setIsExpanded] = useState(true);

  const [textFilter, setTextFilter] = useTextFilter();
  const [speciesFilter, setSpeciesFilter] = useSpeciesFilter();
  const [areaMonsterFilter, setAreaMonsterFilter] = useAreaMonsterFilter();

  const selectedAreaMonster = checkedAreaMonsters.find(
    (checkedMonster) => checkedMonster.key === areaMonsterFilter
  );

  const isSelectedAreaMonsterUnlocked =
    selectedAreaMonster && selectedAreaMonster.isUnlocked;

  const hasAdditionnalFilter =
    Boolean(speciesFilter) || Boolean(areaMonsterFilter);

  function handleSearchInputChange(event: ChangeEvent<HTMLInputElement>) {
    setTextFilter(event.target.value);
  }

  function handleExpandClick() {
    setIsExpanded(!isExpanded);
  }

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

  return (
    <Paper className={styles.root}>
      <div className={styles.searchBar}>
        <SearchIcon className={clsx(styles.search)} />
        <InputBase
          value={textFilter}
          className={styles.input}
          onChange={handleSearchInputChange}
          placeholder="Search"
        />
        <Divider className={styles.divider} orientation="vertical" />
        <IconButton
          className={clsx(styles.expand, {
            [styles.hasFilter]: hasAdditionnalFilter,
          })}
          onClick={handleExpandClick}
        >
          <FilterListIcon />
        </IconButton>
      </div>
      <Collapse in={isExpanded} timeout="auto">
        <Grid
          container
          className={styles.otherFilters}
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
                  [styles.selectItemSuccess]: isSelectedAreaMonsterUnlocked,
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
                    [styles.selectItemSuccess]: monster.isUnlocked,
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
      </Collapse>
    </Paper>
  );
}

export default MonsterFilters;
