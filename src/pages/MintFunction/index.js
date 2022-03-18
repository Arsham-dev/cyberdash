import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import { useState } from "react";
import useStyles from "./styles/index.styles";

const MintFunction = () => {
  const [alignment, setAlignment] = useState("left");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ToggleButtonGroup value={alignment} exclusive onChange={handleChange}>
        <ToggleButton value="left">
          {/* <FormatAlignLeftIcon fontSize="small" /> */}
          asdadsas
        </ToggleButton>
        <ToggleButton value="center">
          {/* <FormatAlignCenterIcon fontSize="small" /> */}
          asdsad
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};
export default MintFunction;
