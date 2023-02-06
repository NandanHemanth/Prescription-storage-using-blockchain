import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";

export default function AddTxnForm({ open, handleClose }) {
  const [state, setState] = useState({
    DoctorID: "",
    receiver: "",
    amount: "",
  });
 

  const handleSubmit = async () => {
    handleClose();
    console.log(state);
    const response = await axios.post(
      "http://localhost:5000/add_transaction",
      state
    );
    console.log(response.data);
    alert(response.data.message);
  };

  const handleChange = (evt) => {
    setState({
      ...state,
      [evt.target.name]: evt.target.value,
    });
  };
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle></DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please Enter Information Carefully.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name="DoctorID"
            label="Doctor ID"
            type="text"
            fullWidth
            variant="outlined"
            value={state.DoctorID}
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="PatientID"
            label="Patient ID"
            type="text"
            fullWidth
            variant="outlined"
            value={state.PatientID}
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="Prescription"
            label="Prescription"
            type="text"
            fullWidth
            variant="outlined"
            value={state.prescription}
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="Label"
            label="Label"
            type="text"
            fullWidth
            variant="outlined"
            value={state.Label}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSubmit}>
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
