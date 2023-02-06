import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import { Card, Grid, Typography } from "@mui/material";

const useStyle = makeStyles(() => {
  return {
    block: {
      padding: 10,
      background: "#AFDCEB",
      borderRadius: 30,
    },
    row: {
      paddingBottom: 2,
    },
    head: {
      width: "100px",
      display: "inline-block",
    },
  };
});



export default function Block({ block }) {
  const classes = useStyle();
  return (
    <Box sx={{ minWidth: 375, padding: 0.5,
      backgroundColor: '#ffffff',
      '&:hover': {
        backgroundColor: "#4f5384",
        borderRadius: 7,
        opacity: [0.9, 0.8, 0.7]},
         }}>
      <div className={classes.block}>
        {console.log(block)}
        <Grid>
          <div className={classes.head}>
            <Typography sx={{color: "#4f5384",fontStyle: "CourierBold",fontWeight:1000}}>Block:</Typography>
          </div>
          <input
            type="text"
            style={{ width: "250px",color: "#4f5384" }}
            value={`# ${block.index}`}
            readOnly
          />
        </Grid>
        <br />
        <Grid>
          <div className={classes.head}>
            <Typography sx={{color: "#4f5384",fontStyle: "Courier-Bold",fontWeight:1000}}>Timestamp:</Typography>
          </div>
          <input
            type="text"
            style={{ width: "250px", color: "#4f5384" }}
            value={block.timestamp}
            readOnly
          />
        </Grid>
        <br />
        <Grid>
          <div className={classes.head}>
            <Typography sx={{color: "#4f5384",fontStyle: "Courier-Bold",fontWeight:1000}}>Data:</Typography>
          </div>
          <textarea
            type="text"
            style={{ width: "250px",color: "#4f5384" }}
            rows={8}
            value={JSON.stringify(block.transactions)}
            readOnly
          />
        </Grid>
        <br />
        <Grid>
          <div className={classes.head}>
            <Typography sx={{color: "#4f5384",fontStyle: "Courier-Bold",fontWeight:1000}}>Previous:</Typography>
          </div>
          <input
            type="text"
            style={{ width: "250px",color: "#4f5384" }}
            value={block.previous_hash}
            readOnly
          />
        </Grid>
        <br />
        <Grid>
          <div className={classes.head}>
            <Typography sx={{color: "#4f5384",fontStyle: "Courier-Bold",fontWeight:1000}}>Hash:</Typography>
          </div>
          <input
            type="text"
            style={{ width: "250px",color: "#4f5384",borderColor:"#ffffff" }}
            value={block.hash}
            readOnly
          />
        </Grid>
        <br />
        <br />
      </div>
    </Box>
  );
}
