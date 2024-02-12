import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Typography, Button, Slide } from "@material-ui/core";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const UpdateDialog = ({ open, close, editProductData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const id = editProductData.id;

  const [inputData, setInputData] = useState([]);

  useEffect(() => {
    if (editProductData) {
      setInputData({
        id: editProductData?.id,
        title: editProductData?.title || "",
        company: editProductData?.company || "",
        des: editProductData?.des || "",
        price: editProductData?.price || "",
        img: editProductData?.img || "",
      });
    }
  }, [editProductData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(id, "iddddd");
    axios
      .put(
        `https://65c4700adae2304e92e29905.mockapi.io/p1/product/${id}`,
        inputData
      )
      .then((res) => {
        alert("Data Updated success!");
        navigate("/product");
        close(false);
      });
  };

  const handleDialogClose = () => {
    close(false);
  };
  console.log(editProductData, "----> editProductData");

  return (
    <>
      {/* <Button variant="contained" size="medium" onClick={handleClickOpen}>
        Edit{" "}
      </Button>
         */}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
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
            {"Update Products Details"}
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
                    <strong>Product ID :</strong>
                  </h5>
                  <input
                    type="number"
                    autoComplete="off"
                    name="id"
                    value={inputData.id}
                    className="form-control form-control-lg wh-100"
                    placeholder="Enter name"
                    disabled
                  />
                </div>
                <div className="mb-3">
                  <h5 className="text-light">
                    <strong>Product Title</strong>
                  </h5>
                  <input
                    type="text"
                    autoComplete="off"
                    name="title"
                    defaultValue={"test"}
                    value={inputData.title}
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
                    value={inputData.company}
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
                    value={inputData.des}
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
                    value={inputData.price}
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
                    value={inputData.img}
                    placeholder="Enter Img path"
                    required
                    onChange={(e) =>
                      setInputData({ ...inputData, img: [e.target.value] })
                    }
                  />
                </div>

                <DialogActions>
                  <button
                    onClick={handleDialogClose}
                    type="submit"
                    className="btn btn-danger btn-lg w-100"
                  >
                    close
                  </button>
                  <button type="submit" className="btn btn-danger btn-lg w-100">
                    Update
                  </button>
                </DialogActions>
              </form>
            </DialogContentText>
          </DialogContent>
        </div>
      </Dialog>
    </>
  );
};
