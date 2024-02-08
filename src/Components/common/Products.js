import React, { useState } from "react";
import { Typography, Button } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Data from "./Data.json";
import AspectRatio from "@mui/joy/AspectRatio";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import { makeStyles } from "@material-ui/core/styles";
// import Button from "@mui/joy/Button";
import "./font.css";
import { useNavigate } from "react-router-dom";
import Typo from "./MyComponents/Typo";
import Cards from "./MyComponents/Cards";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/ProductSlice";
import { color } from "@material-ui/system";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  Container: {
    display: "flex",
    flexWrap: "wrap",
    marginTop:"20px",
    gap: "1em",
  },
  cardAction: {
    alignItems: "center",
  },
  action2: {
    display: "grid",
    alignItems: "center",
    columnGap: "50px",
    gridTemplateColumns: "auto auto",
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
}));

export const Products = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const handleCard = (value) => {
    console.log(value);
    navigate(`/product/${value}`);
  };

  const dispatch = useDispatch();

  const [addedProducts, setAddedProducts] = useState([]);

  const addProduct = (productData) => {
    console.log(productData, "product");
    dispatch(addToCart(productData));

    setAddedProducts([...addedProducts, productData.id]);
    // navigate(`/cart`)
  };
  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>
      <Container maxWidth="lg">
        <h1 className="poppinsRegular text-center mt-5 mb-5">Product List</h1>
        <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen} style={{margin:"auto", display:"flex"}}>
        Add Product
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        style={{width:"105%"}}
      >
        <div style={{width:"500px"}}>
        <DialogTitle style={{background:"#eaf5ffe0", display:"flex",justifyContent:"center"}}>{"Add Products Details"}</DialogTitle>
        <DialogContent style={{background:"linear-gradient(45deg, black, #333272)",}}>
          <DialogContentText id="alert-dialog-slide-description">
          <form style={{marginTop:"30px"}}>
            <div className="mb-3">
              <h5 className="text-light">
                <strong>Product Title</strong>
              </h5>
              <input
                type="text"
                autoComplete="off"
                name="email"
                className="form-control form-control-lg wh-100"
                placeholder="Enter name"
              // onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <h5 className="text-light">
                <strong>Product Company</strong>
              </h5>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter company"
              // onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <h5 className="text-light">
                <strong>Product Description</strong>
              </h5>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter description"
              // onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <h5 className="text-light">
                <strong>Product Price</strong>
              </h5>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter price"
              // onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </form>
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{background:"linear-gradient(164deg, black, rgb(51, 50, 114))"}}>
      
              <button type="submit" className="btn btn-danger btn-lg w-100">
                Add
              </button>
            
        </DialogActions>
        </div>
      </Dialog>
    </React.Fragment>
        <div className={classes.Container}>
          {Data.map((result, index) => (
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
                  <Typo variant="des">{result.des}</Typo>
                  <Typo variant="des1">
                    (Only <b>7</b> left in stock!)
                  </Typo>
                </div>
              </div>

              <div className="bg-dark">
                <div className={classes.action2}>
                  <h3 className={classes.text2}>₹{result.price}</h3>

                  <Button
                    className={classes.textButton}
                    variant="contained"
                    size="medium"
                    onClick={() => addProduct(result)}
                    disabled={addedProducts.includes(result.id)}
                  >
                    Add to Cart{" "}
                    {/* {addedProducts.includes(result.id) ? 'Added to Cart' : 'Add to Cart'} */}
                  </Button>
                </div>
              </div>
            </Cards>
          ))}
        </div>
      </Container>
    </>
  );
};

