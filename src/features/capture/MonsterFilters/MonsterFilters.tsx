import React, { ChangeEvent, useState } from "react";
import clsx from "clsx";

import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import FilterListIcon from "@material-ui/icons/FilterList";
import SearchIcon from "@material-ui/icons/Search";

import {
  useTextFilter,
  useSpeciesFilter,
  useAreaMonsterFilter,
  useSpeciesMonsterFilter,
} from "..";

import ExpandedFilters from "./ExpandedFilters";

import useStyles from "./MonsterFilters.styles";

function MonsterFilters() {
  const classes = useStyles();

  const [isExpanded, setIsExpanded] = useState(false);

  const [textFilter, setTextFilter] = useTextFilter();
  const [speciesFilter] = useSpeciesFilter();
  const [areaMonsterFilter] = useAreaMonsterFilter();
  const [speciesMonsterFilter] = useSpeciesMonsterFilter();

  const hasAdditionnalFilter =
    Boolean(speciesFilter) ||
    Boolean(areaMonsterFilter) ||
    Boolean(speciesMonsterFilter);

  function handleSearchInputChange(event: ChangeEvent<HTMLInputElement>) {
    setTextFilter(event.target.value);
  }

  function handleExpandClick() {
    setIsExpanded(!isExpanded);
  }

  return (
    <Paper className={classes.root}>
      <div className={classes.searchBar}>
        <SearchIcon className={classes.search} />
        <InputBase
          value={textFilter}
          className={classes.input}
          onChange={handleSearchInputChange}
          placeholder="Search"
        />
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton
          className={clsx(classes.expand, {
            [classes.hasFilter]: hasAdditionnalFilter,
          })}
          onClick={handleExpandClick}
        >
          <FilterListIcon />
        </IconButton>
      </div>
      <Collapse in={isExpanded} timeout="auto">
        <ExpandedFilters />
      </Collapse>
    </Paper>
  );
}

export default MonsterFilters;
