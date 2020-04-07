import React from "react";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";

function Settings() {
  return (
    <div className="Settings">
      <Typography variant="h4" noWrap gutterBottom>
        Settings
      </Typography>
      <FormControlLabel label="Dark Mode" control={<Switch />} />
    </div>
  );
}

export default Settings;
