import React, { useRef } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Update({ open, arr, sendStore, data, handleClose }) {
  const userInput = useRef(null);
  const locationInput = useRef(null);
  const phoneNumber = useRef(null);
  console.log(data, "dataa ");

  const handleSubmit = (e) => {
    e.preventDefault();
    arr.forEach((v) => {
      console.log(v, "forEach Data");
      if (v.id === data.id) {
        v.name = userInput?.current?.value || v.name;
        v.location = locationInput?.current?.value || v.location;
        v.phoner = phoneNumber?.current?.value || v.phone;
      }
    });
    console.log(arr, "afterupdate");
    userInput.current.value = "";
    locationInput.current.value = "";
    phoneNumber.current.value = "";
    sendStore(arr);
    handleClose();
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Update WareHouse"}</DialogTitle>
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
                    placeholder={data?.name}
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
                    placeholder={data?.location}
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
                    placeholder={data?.phone}
                    name="phone"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
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

export default Update;
