import { ToggleButton } from "@material-ui/lab";
import { ToggleButtonGroup } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    width: "100%",
    justifyContent: "space-between",
  },
  toggle: {
    fontFamily: `'Raleway', sans-serif`,
    fontSize: ".8rem",
    border: "1px solid rgba(0, 0, 0, 0.12)",
    borderRadius: "10px",
    "&.MuiToggleButtonGroup-groupedHorizontal:not(:last-child)": {
      borderRadius: "10px",
    },
    "&.MuiToggleButtonGroup-groupedHorizontal:not(:first-child)": {
      borderRadius: "10px",
      border: "1px solid rgba(0, 0, 0, 0.12)",
    },
    "&.Mui-selected": {
      borderRadius: "10px",
      background: "#000",
      color: "#fff",
    },
    "&.MuiToggleButton-root": {
      "&:hover": {
        background: "#000",
        color: "#fff",
      },
    },
  },
});

import React from "react";

const FilterListToggel = ({ Options, value, selectToggle }) => {
  const classes = useStyles();
  return (
    <div>
      <ToggleButtonGroup
        className={classes.root}
        value={value}
        onChange={selectToggle}
        exclusive
      >
        {Options.map(({ label, id, value }) => (
          <ToggleButton className={classes.toggle} key={id} value={value}>
            {label}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  );
};

export default FilterListToggel;
