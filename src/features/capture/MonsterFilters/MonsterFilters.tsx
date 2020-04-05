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
import clsx from "clsx";
import React, { ChangeEvent, useState } from "react";

import { locations, speciesList } from "../../../models";
import type { Location, Species } from "../../../models";

import { useTextFilter, useLocationFilter, useSpeciesFilter } from "..";

import useStyles from "./MonsterFilters.style";

function MonsterFilters() {
  const styles = useStyles();

  const [isExpanded, setIsExpanded] = useState(false);

  const [textFilter, setTextFilter] = useTextFilter();
  const [locationFilter, setLocationFilter] = useLocationFilter();
  const [speciesFilter, setSpeciesFilter] = useSpeciesFilter();

  const hasFilter = Boolean(locationFilter) || Boolean(speciesFilter);

  function handleSearchInputChange(event: ChangeEvent<HTMLInputElement>) {
    setTextFilter(event.target.value);
  }

  function handleExpandClick() {
    setIsExpanded(!isExpanded);
  }

  function handleLocationChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setLocationFilter(event.target.value as Location);
  }

  function handleSpeciesChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setSpeciesFilter(event.target.value as Species);
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
          className={clsx(styles.expand, { [styles.hasFilter]: hasFilter })}
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
              id="locationSelect"
              select
              fullWidth
              value={locationFilter || ""}
              onChange={handleLocationChange}
              label="Monster Arena"
              variant="outlined"
            >
              <MenuItem key="" value="">
                &nbsp;
              </MenuItem>
              {locations.map((location) => (
                <MenuItem key={location} value={location}>
                  {location}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={5} lg={4}>
            <TextField
              id="locationSelect"
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
