import React from "react";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles(() => {
  return {
    root: {
      padding: 5,
    },
  };
});

function Chain() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <InsertLinkIcon />
    </div>
  );
}

export default Chain;
