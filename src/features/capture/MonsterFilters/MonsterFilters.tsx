import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import React, { ChangeEvent } from "react";

import { useTextFilter } from "..";

import useStyles from "./MonsterFilters.style";

function MonsterFilters() {
  const styles = useStyles();

  const [textFilter, setTextFilter] = useTextFilter();

  function handleSearchInput(event: ChangeEvent<HTMLInputElement>) {
    setTextFilter(event.target.value);
  }

  return (
    <Paper className={styles.root}>
      <SearchIcon className={styles.searchIcon} />
      <InputBase
        className={styles.input}
        onChange={handleSearchInput}
        placeholder="Search"
        value={textFilter}
      />
    </Paper>
  );
}

export default MonsterFilters;
