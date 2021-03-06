import React, { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import clsx from "clsx";
import map from "lodash/map";

import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

import { locations, speciesList } from "../../../models";
import type { Location, MonsterKey, Species } from "../../../models";

import {
  toggleCapturedFilter,
  setCapturedFilterCount,
  useAreaMonsterFilter,
  useCapturedFilter,
  useCheckedAreaMonsters,
  useCheckedSpeciesMonsters,
  useLocationFilter,
  useSpeciesFilter,
  useSpeciesMonsterFilter,
} from "..";

import useStyles from "./ExpandableFilters.styles";

function ExpandableFilters() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const checkedAreaMonsters = useCheckedAreaMonsters();
  const checkedSpeciesMonsters = useCheckedSpeciesMonsters();

  const [speciesFilter, setSpeciesFilter] = useSpeciesFilter();
  const [areaMonsterFilter, setAreaMonsterFilter] = useAreaMonsterFilter();
  const [
    speciesMonsterFilter,
    setSpeciesMonsterFilter,
  ] = useSpeciesMonsterFilter();
  const [locationFilter, setLocationFilter] = useLocationFilter();
  const capturedFilter = useCapturedFilter();

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

  function handleLocationChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setLocationFilter(event.target.value as Location);
  }

  function handleCapturedFilterChange() {
    dispatch(toggleCapturedFilter());
  }

  function handleCapturedCountChange(event: ChangeEvent<HTMLInputElement>) {
    dispatch(setCapturedFilterCount(event.target.valueAsNumber));
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
              <span className={classes.selectOptionLabel}>{monster.name}</span>
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
              <span className={classes.selectOptionLabel}>{monster.name}</span>
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
              <span className={classes.selectOptionLabel}>{species}</span>
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={6} md={5} lg={4}>
        <TextField
          id="locationSelect"
          select
          fullWidth
          value={locationFilter || ""}
          onChange={handleLocationChange}
          label="Location"
          variant="outlined"
        >
          <MenuItem key="" value="">
            &nbsp;
          </MenuItem>
          {map(locations, (mainLocation) => [
            <MenuItem key={mainLocation.key} value={mainLocation.key}>
              <span className={classes.selectOptionLabel}>
                {mainLocation.key}
              </span>
            </MenuItem>,
            ...((mainLocation.subLocations &&
              mainLocation.subLocations.map((subLocation) => (
                <MenuItem
                  key={subLocation}
                  value={subLocation}
                  className={classes.subLocationItem}
                >
                  <span className={classes.selectOptionLabel}>
                    {subLocation}
                  </span>
                </MenuItem>
              ))) ||
              []),
          ])}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={6} md={5} lg={4}>
        <div className={classes.capturedFilterContainer}>
          <FormControlLabel
            label="Remove captured"
            control={
              <Checkbox
                name="Filter captured"
                checked={capturedFilter.isActive}
                onChange={handleCapturedFilterChange}
              />
            }
          />
          <TextField
            id="capturedFilterCount"
            label="Count"
            type="number"
            disabled={!capturedFilter.isActive}
            value={capturedFilter.count}
            onChange={handleCapturedCountChange}
            inputProps={{
              min: 1,
              max: 10,
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
      </Grid>
    </Grid>
  );
}

export default ExpandableFilters;
