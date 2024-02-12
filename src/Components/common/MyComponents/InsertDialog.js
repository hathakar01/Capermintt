import React, { useEffect, useState } from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography, Button, Slide } from "@material-ui/core";
import { useDispatch } from "react-redux";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export const InsertDialog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [inputData, setInputData] = useState({
    title: "",
    company: "",
    des: "",
    price: "",
    img: "",
  });

  const [data, setData] = useState([]);
  const [value, setValue] = useState([]);

  useEffect(() => {
    axios
      .get("https://65c4700adae2304e92e29905.mockapi.io/p1/product")
      .then((res) => setValue(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://65c4700adae2304e92e29905.mockapi.io/p1/product/",
        inputData
      )
      .then((res) => {
        alert("Add the data success!");
        navigate("/product");
        setOpen(false);
      });
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        style={{
          margin: "auto",
          display: "flex",
          background: "linear-gradient(45deg, #00000078, white)",
        }}
      >
        Add Product
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        style={{ width: "105%" }}
      >
        <div style={{ width: "500px" }}>
          <DialogTitle
            style={{
              background: "#eaf5ffe0",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {"Add Products Details"}
          </DialogTitle>
          <DialogContent
            style={{
              background: "linear-gradient(45deg, black, #333272)",
              padding: "40px",
            }}
          >
            <DialogContentText id="alert-dialog-slide-description">
              <form onSubmit={handleSubmit} style={{ marginTop: "30px" }}>
                <div className="mb-3">
                  <h5 className="text-light">
                    <strong>Product Title</strong>
                  </h5>
                  <input
                    type="text"
                    autoComplete="off"
                    name="title"
                    className="form-control form-control-lg wh-100"
                    placeholder="Enter name"
                    required
                    onChange={(e) =>
                      setInputData({ ...inputData, title: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <h5 className="text-light">
                    <strong>Product Company</strong>
                  </h5>
                  <input
                    type="text"
                    name="company"
                    className="form-control form-control-lg"
                    placeholder="Enter company"
                    required
                    onChange={(e) =>
                      setInputData({ ...inputData, company: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <h5 className="text-light">
                    <strong>Product Description</strong>
                  </h5>
                  <input
                    type="text"
                    name="des"
                    required
                    className="form-control form-control-lg"
                    placeholder="Enter description"
                    onChange={(e) =>
                      setInputData({ ...inputData, des: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <h5 className="text-light">
                    <strong>Product Price</strong>
                  </h5>
                  <input
                    type="number"
                    name="price"
                    className="form-control form-control-lg"
                    placeholder="Enter price"
                    required
                    onChange={(e) =>
                      setInputData({ ...inputData, price: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <h5 className="text-light">
                    <strong>Product Image</strong>
                  </h5>
                  <input
                    type="text"
                    name="img"
                    className="form-control form-control-lg"
                    placeholder="Enter Img path"
                    required
                    onChange={(e) =>
                      setInputData({ ...inputData, img: [e.target.value] })
                    }
                  />
                </div>

                <DialogActions>
                  <button type="submit" className="btn btn-danger btn-lg w-100">
                    Add
                  </button>
                </DialogActions>
              </form>
            </DialogContentText>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
};
