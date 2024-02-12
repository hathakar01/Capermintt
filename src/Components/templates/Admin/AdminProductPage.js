import React, { useEffect, useState } from "react";
import { Typography, Button } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
// import Button from "@mui/joy/Button";
import "../../common/font.css";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import Slide from "@mui/material/Slide";
import axios from "axios";
import Typo from "../../common/MyComponents/Typo";
import Cards from "../../common/MyComponents/Cards";

import { UpdateDialog } from "../../common/MyComponents/UpdateDialog";
import { InsertDialog } from "../../common/MyComponents/InsertDialog";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  Container: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "20px",
    gap: "1em",
  },
  cardAction: {
    alignItems: "center",
  },
  action2: {
    display: "grid",
    alignItems: "center",
    columnGap: "10px",
    gridTemplateColumns: "auto auto auto",
    padding: "12px",
    fontSize: "30px",
  },
  CardMedia: {
    borderRadius: "10px",
    objectFit: "cover",
    height: "200px",
    width: "100%",
    display: "block",
    backgroundSize: "cover",
    verticalAlign: "middle",
  },

  Card: {
    boxShadow: " 5px 8px 10px 0 rgba(3, 158, 255, 0.431)",
  },
  text1: {
    fontSize: "clamp(8px, 5vw, 24px)", //min, val, max
  },
  text01: {
    fontSize: "clamp(0.5rem, 1vw, 1.5rem)", //min, val, max
  },
  text2: {
    color: "white",
    fontSize: "clamp(2vh, 25px, 5vw)", //min, val, max
  },
  textDes: {
    fontSize: "clamp(10px, 1vw, 20px)", //min, val, max
  },
  textButton: {
    background: "#f63c3c",
    color: "white",
  },
}));

export const AdminProductPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [value, setValue] = useState([]);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editProductData, setEditProductData] = useState(null);
  const [inputData, setInputData] = useState({
    title: "",
    company: "",
    des: "",
    price: "",
    img: "",
  });

  const handleCard = (product) => {
    console.log(product);
    navigate(`/product/${product}`);
  };

  // handle edit dialog
  const handleEditDialog = (value) => {
    setEditProductData(value);
    setIsEditDialogOpen(true);
  };

  useEffect(() => {
    axios
      .get("https://65c4700adae2304e92e29905.mockapi.io/p1/product")
      .then((res) => setValue(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Container maxWidth="lg">
        <h1 className="poppinsRegular text-center mt-5 mb-5">Product List</h1>
        <React.Fragment>
          <InsertDialog />
        </React.Fragment>
        <div className={classes.Container}>
          {value.map((result, index) => (
            <Cards variant="card" className={classes.card}>
              <div onClick={() => handleCard(result.id)}>
                <div>
                  <img
                    src={result.img[0]}
                    alt=""
                    className={classes.CardMedia}
                  />
                </div>
                <div style={{ padding: "15px" }}>
                  <Typography className={classes.text01} level="body-xs">
                    {result.company}
                  </Typography>
                  <Typo variant="title">{result.title}</Typo>
                  <div style={{ height: "70px" }}>
                    <Typo variant="des">{result.des}</Typo>
                  </div>
                  <Typo variant="des1">
                    (Only <b>7</b> left in stock!)
                  </Typo>
                </div>
              </div>

              <div className="bg-dark">
                <div className={classes.action2}>
                  <h3 className={classes.text2}>₹{result.price}</h3>
                  <Button
                    variant="contained"
                    size="medium"
                    onClick={() => handleEditDialog(result)}
                  >
                    {/* <Link to={`/updated/${result.id}`}>Edit</Link> */}
                    Edit
                  </Button>

                  <Button
                    className={classes.textButton}
                    variant="contained"
                    size="medium"
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </Cards>
          ))}
          {isEditDialogOpen && (
            <UpdateDialog
              open={isEditDialogOpen}
              close={setIsEditDialogOpen}
              editProductData={editProductData}
            />
          )}
          {/* <EditDialog
            open={isEditDialogOpen}
            close={setIsEditDialogOpen}
            editProductData={editProductData}
          /> */}
        </div>
      </Container>
    </>
  );
};
