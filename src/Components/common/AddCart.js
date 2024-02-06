import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Button } from "@material-ui/core";
import {
  FaCartArrowDown,
  FaRegPlusSquare,
  FaRegMinusSquare,
} from "react-icons/fa";
import Container from "@material-ui/core/Container";
import { useNavigate, useParams } from "react-router-dom";

import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import { MdDeleteOutline } from "react-icons/md";
import { makeStyles } from "@material-ui/core/styles";
import { deleteProduct } from "../../store/slices/ProductSlice";
import Typo from "./MyComponents/Typo";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "2em",
  },
  card: {
    flex: "1 0 4rem",
    margin: "25px",
    boxShadow: " 0px 0px 10px 2px rgb(18 17 17 / 25%)",
    background: "transparent",
    background: "#75bfce4d;",
  },
  title: {
    fontSize: "clamp(30px, 4vw , 50px)",
  },
  textButton: {
    fontSize: "clamp(8px, 1vw , 25px)",
  },
  CardMedia: {
    borderRadius: "10px",
    objectFit: "cover",
    height: "200px",
    width: "25%",
    display: "block",
    backgroundSize: "cover",
    verticalAlign: "middle",

    "@media only screen and (max-width: 900px)": {
      height: "250px",
      width: "100%",
    },
  },
  container: {
    display: "grid",
    gridTemplateColumns: "auto",
    columnGap: "50px",
    gap: "10px",
    alignItems: "center",
    justifyItems: "start",
    justifyContent: "end",
    alignContent: "center",
  },
  action2: {
    display: "grid",
    alignItems: "center",
    columnGap: "50px",
    gridTemplateRows: "auto auto",
    padding: "12px",
    fontSize: "30px",
    alignItems: "end",
  },
  text2: {
    color: "black",
    fontSize: "clamp(2vh, 25px, 5vw)", //min, val, max
    textAlign: "center",
    display: "flex",
  },
}));

const AddCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();

  const data = useSelector((state) => state.products);

  console.log(data, "data");
  const deleteUser = (id) => {
    dispatch(deleteProduct(id));
  };
  const handleCard = (value) => {
    // alert(value)
    console.log(value);
    navigate(`/product/${value}`);
  };

  return (
    <Container maxWidth="lg">
      <Button size="small" onClick={() => navigate(-1)}>
        <KeyboardArrowLeft />
        Back
      </Button>
      <div className={classes.Container}>
        <h1 className="poppinsRegular text-center mt-2 mb-5">
          <FaCartArrowDown color="green" /> List
        </h1>
        {data.map((product, id) => (
          <Card variant="addCard" className={classes.card} key={id}>
            <div className={classes.mainContainer}>
              <img
                src={product.img[0]}
                alt="abc"
                className={classes.CardMedia}
              />
              <div className={classes.container}>
                <Typo variant="des">{product.company}</Typo>
                <Typo variant="title">{product.title}</Typo>
                <Typo variant="des">{product.des}</Typo>

                <h3 variant="price">₹{product.price}</h3>
              </div>
              <div className={classes.action2}></div>
              <div className={classes.action2}>
                <div className={classes.text2}>
                  <Button>
                    <FaRegPlusSquare />
                  </Button>
                  <h3 className={classes.text2}>1</h3>
                  <Button>
                    <FaRegMinusSquare />
                  </Button>
                </div>

                <Button
                  className={classes.textButton}
                  variant="contained"
                  size="medium"
                  style={{ backgroundColor: "#e43131cf", color: "white" }}
                >
                  Buy Now
                </Button>
              </div>
              <div className={classes.action2}>
                <button className="btn btn-lg" onClick={() => deleteUser(id)}>
                  <MdDeleteOutline color="red" />
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default AddCart;
