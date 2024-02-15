import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Button, Typography } from "@material-ui/core";
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
import {
  addToCart,
  buyNow,
  deleteProduct,
} from "../../store/slices/ProductSlice";
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
    marginRight: "auto",
  },
  action2: {
    display: "grid",
    alignItems: "center",
    columnGap: "50px",
    gridTemplateRows: "auto auto",
    padding: "12px",
    fontSize: "30px",
    alignItems: "end",
    marginRight: "30px",
  },

  deletIcon: {
    height: "30px",
    width: "40px",
  },
  text2: {
    color: "black",
    fontSize: "clamp(2vh, 25px, 5vw)", //min, val, max
    textAlign: "center",
    display: "flex",
  },
  total: {
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
    margin: "40px",
  },
}));

const AddCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();

  const data = useSelector((state) => state.products);
  console.log(data);
  // State to track quantity for each product
  const [quantities, setQuantities] = useState({});

  const deleteUser = (id) => {
    dispatch(deleteProduct(id));
  };

  const handleIncrement = (id) => {
    setQuantities((prevState) => ({
      ...prevState,
      [id]: (prevState[id] || 0) + 1,
    }));
    dispatch(buyNow({ id, quantity: quantities[id] + 1 }));
  };

  console.log(quantities, "---qty");

  const handleDecrement = (id) => {
    if (quantities[id] > 1) {
      setQuantities((prevState) => ({
        ...prevState,
        [id]: prevState[id] - 1,
      }));
      dispatch(buyNow({ id, qty: quantities[id] - 1 }));
    }
  };

  const calculateNewPrice = (product) => {
    const oldPrice = product.price;
    const quantity = quantities[product.id] || 1;
    const totalPrice = oldPrice * quantity;
    return totalPrice;
  };

  const handleBuyProduct = (product) => {
    //navigate(`/buy/${product.id}`);
    //const quantity = quantities[product.id] || 1;
    navigate(`/buy/${product?.id}`);
    console.log(data);
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
                src={product.img && product.img[0]}
                alt="abc"
                className={classes.CardMedia}
              />
              <div className={classes.container}>
                <Typography variant="body1">{product.company}</Typography>
                <Typography variant="h5">{product.title}</Typography>
                <Typography variant="body1">{product.des}</Typography>
                <Typography variant="h6">₹{product.price}</Typography>
                {/* {product.price * (quantities[product.id] || 1)} */}
                <Typography variant="h6">
                  <b>Total Price:</b> ₹{calculateNewPrice(product)}
                </Typography>
              </div>

              <div className={classes.action2}>
                <div className={classes.text2}>
                  <Button onClick={() => handleDecrement(product.id)}>
                    <FaRegMinusSquare />
                  </Button>
                  <Typography className={classes.text2}>
                    {quantities[product.id] || 1}
                  </Typography>
                  <Button onClick={() => handleIncrement(product.id)}>
                    <FaRegPlusSquare />
                  </Button>
                </div>

                <Button
                  className={classes.textButton}
                  variant="contained"
                  size="medium"
                  style={{ backgroundColor: "#e43131cf", color: "white" }}
                  onClick={() => handleBuyProduct(product)}
                >
                  Buy Now
                </Button>
              </div>
              <div className={classes.action2}>
                <MdDeleteOutline
                  className={classes.deletIcon}
                  color="red"
                  onClick={() => deleteUser(id)}
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default AddCart;
