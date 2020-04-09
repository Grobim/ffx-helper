import React, { ChangeEvent } from "react";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";

import { triggerUserSettingsUpdate, useSyncedUserSettings } from "..";
import { useDispatch } from "react-redux";

function Settings() {
  const dispatch = useDispatch();

  const userSettings = useSyncedUserSettings();
  const darkMode = userSettings.darkMode || false;

  function handleDarkModeChange(_: ChangeEvent, value: boolean) {
    dispatch(triggerUserSettingsUpdate({ darkMode: value }));
  }

  return (
    <div className="Settings">
      <Typography variant="h4" noWrap gutterBottom>
        Settings
      </Typography>
      <FormControlLabel
        label="Dark Mode"
        control={<Switch checked={darkMode} onChange={handleDarkModeChange} />}
      />
    </div>
  );
}

export default Settings;
