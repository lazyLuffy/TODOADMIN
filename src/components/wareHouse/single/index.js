import React, { useRef } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Single({ open,arr,sendStore, handleClose }) {
  console.log(sendStore, "sendSored");
  console.log(arr,'arrayData')

  const userInput = useRef(null)
  const locationInput = useRef(null)
  const phoneNumber = useRef(null)

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(userInput!='' || locationInput!='' || phoneNumber!=''){
      arr.push({
        id:userInput?.current?.value,
        name:userInput?.current?.value,
        location:locationInput?.current?.value,
        phone:phoneNumber?.current.value
      })
      sendStore(arr)
      alert('Added new WareHouse')
    }
    handleClose()
  }

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Add Warehouse"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <div className="container-fluid">
            <form onSubmit={handleSubmit}>
              <div className="mb-3 mt-3">
                <label for="text" className="form-label">
                  Name:
                </label>
                <input
                ref={userInput}
                  type="text"
                  className="form-control"
                  id="text"
                  placeholder="Enter Name"
                  name="name"
                />
              </div>
              <div className="mb-3">
                <label for="location" className="form-label">
                  Location:
                </label>
                <input
                ref={locationInput}
                  type="text"
                  className="form-control"
                  id="location"
                  placeholder="Enter Locaton"
                  name="location"
                />
              </div>
              <div className="mb-3">
                <label for="phone" className="form-label">
                  phone:
                </label>
                <input
                ref={phoneNumber}
                  type="number"
                  className="form-control"
                  id="phone"
                  placeholder="Enter Phone"
                  name="phone"
                />
              </div>
              <button type='submit' className="btn btn-primary">
                Submit
              </button>
            </form>
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Single;
