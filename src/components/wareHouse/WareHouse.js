import React, { useState } from "react";
import { CSVLink } from "react-csv";

import Single from "./single";
import Update from "./update";

const WareHouse = () => {
  const [open, setOpen] = useState(false);
  const [update, setUpdate] = useState(false);
  const [data, setData] = useState(null);
  const [store, setStore] = useState([
    {
      id: 1,
      name: "NoidaWare",
      location: "Noida sector 142 near",
      phone: 8130673113,
    },
    {
      id: 2,
      name: "DelhiWare",
      location: "Wazipur Delhi 110084",
      phone: 8130673112,
    },
    {
      id: 3,
      name: "GurguaoWare",
      location: "sector 108",
      phone: 8130673116,
    },
    {
      id: 4,
      name: "UPWare",
      location: "UP sector 142 near",
      phone: 8130673114,
    },
    {
      id: 5,
      name: "Himanchal",
      location: "HImanchal sector 142 near",
      phone: 8130673114,
    },
  ]);

  const hanldeOpen = (e, ...data) => {
    e.preventDefault();
    console.log(data);
    alert(data, "this is data");
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    alert("are You sure you want to delete");
    const newData = store.filter((v) => v.id != id);
    setStore(newData);
    console.log(newData, "newData");
  };
  const handleEdit = (e, data) => {
    e.preventDefault();
    setData(data);
    setUpdate(true);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setUpdate(false);
    setOpen(false);
  };

  return (
    <div className="container-fluid ">
      <div className="container-fluid mt-4 ">
        <p className="display-4 text-primary"> Ware House</p>
        <div className="container-fluid" style={{ textAlign: "end" }}>
          <button className="btn btn-primary m-auto" onClick={handleAdd}>
            Add WareHouse
          </button>
          <CSVLink
            data={store}
            className="btn btn-success ms-2"
            filename={"my-list.csv"}
            headers={["id", "name", "location", "phone"]}
          >
            Export to CSV
          </CSVLink>
       
        </div>
      </div>
      <div className="container table-responsive-sm mt-4">
        <table class="table table-striped table-hover ">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Location</th>
              <th>Phone-no</th>
              <th className="align-center">action</th>
            </tr>
          </thead>
          <tbody>
            {store.map(({ id, name, location, phone }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{location}</td>
                <td>{phone}</td>
                <td>
                  <div className="d-flex flex-row mb-3">
                    <div>
                      <button
                        type="button"
                        className="btn"
                        onClick={(e) => hanldeOpen(e, id)}
                      >
                        <i className="material-icons text-danger">view</i>
                      </button>
                    </div>
                    <div>
                      <button type="button" className="btn">
                        <i
                          className="material-icons text-warning"
                          onClick={(e) =>
                            handleEdit(e, { id, name, location, phone })
                          }
                        >
                          edit
                        </i>
                      </button>
                    </div>
                    <div>
                      <button type="button" className="btn">
                        <i
                          className="material-icons text-danger"
                          onClick={(e) => handleDelete(e, id)}
                        >
                          delete
                        </i>
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Single
        open={open}
        sendStore={setStore}
        arr={store}
        handleClose={handleClose}
      />
      <Update
        open={update}
        sendStore={setStore}
        data={data}
        arr={store}
        handleClose={handleClose}
      />
    </div>
  );
};

export default WareHouse;
