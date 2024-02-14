import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "../../common/MyComponents/Cards";
import { Button, Container, Typography, makeStyles } from "@material-ui/core";
import Typo from "../../common/MyComponents/Typo";
import { Loader } from "../../common/Loader";

const useStyles = makeStyles((theme) => ({
  Container: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "20px",
    justifyContent: "center",
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
    borderRadius: "400px 0px 400px 0px",
    objectFit: "cover",
    height: "300px",
    width: "100%",
    display: "block",
    backgroundSize: "cover",
    verticalAlign: "middle",
  },

  Card1: {
    boxShadow: "0 4px 14px 9px rgba(0,0,0,0.2)",
  },
  text1: {
    fontSize: "clamp(8px, 5vw, 24px)", //min, val, max
  },
  text01: {
    fontSize: "clamp(0.5rem, 1vw, 1.5rem)", //min, val, max
    marginTop: "10px",
  },
  text2: {
    color: "black",
    fontSize: "clamp(2vh, 20px, 5vw)", //min, val, max
  },
  textDes: {
    fontSize: "clamp(10px, 1vw, 20px)", //min, val, max
  },
  textButton: {
    width: "200px",
    background: "#ff4f4f",
    color: "white",
    "&:hover": {
      color: "red",
    },
  },
  listName: {
    display: "flex",
    alignItems: "center",
  },
  btn: {
    display: "flex",
    justifyContent: "center",
    margin: "20px",
  },
  date: {
    width: "100%",
    padding: "8px",
    border: "1px solid black",
    borderRadius: "4px",
  },
  mainDiv: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    padding: "30px",
  },
  container1: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px",
    width: "400px",
    // marginTop: "30px",
    padding: "10px",
    background: "transparent",
    backdropFilter: "blur(10px)",
  },
}));

export const BuyProduct = ({}) => {
  const classes = useStyles();
  const { id } = useParams();
  const [value, setValue] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deliveryDates, setDeliveryDates] = useState([]);

  useEffect(() => {
    axios
      .get(`https://65c4700adae2304e92e29905.mockapi.io/p1/product/${id}`)
      .then((res) => {
        setValue(res?.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const today = new Date();
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const deliveryDate = new Date(today);
      deliveryDate.setDate(today.getDate() + i);
      dates.push(deliveryDate.toDateString());
    }
    setDeliveryDates(dates[6]);
  }, []);

  const handleBuyProduct = (buyData) => {
    console.log(deliveryDates, "---Date");
    objBuyProduct.address = buyData.address;
    console.log(objBuyProduct, "BuyNow");
    axios
      .post(
        "https://65c4700adae2304e92e29905.mockapi.io/p1/buyProduct",
        objBuyProduct
      )
      .then((res) => {
        alert("Ordered Delived success!");
        //navigate("/product");
        setLoading(false);
      });
    // console.log(buyData.address, "--> Address");
    //console.log(buyData, "--> BuyData");
  };

  const objBuyProduct = {
    date: deliveryDates,
    id: id,
    name: value.title,
    company: value.company,
    price: value.price,
  };
  // console.log(objBuyProduct, '--BuyObject--');

  const handleSubmit = (event, value) => {
    event.preventDefault();
    //console.log(value.address, "--->submit");
  };

  return (
    <Container maxWidth="lg">
      <h1 className="poppinsRegular text-center mt-5 mb-5">
        Buy Product Details
      </h1>
      {loading && <Loader />}
      <div className={classes.Container}>
        {value ? (
          <Cards variant="buyCard" className={classes.Card1}>
            <div>
              <img
                src={value.img && value?.img[0]}
                alt=""
                className={classes.CardMedia}
              />
            </div>
            <form onSubmit={handleSubmit}>
              <div className={classes.mainDiv}>
                <div className={classes.container1}>
                  <div className={classes.listName}>
                    <Typography variant="subtitle1">
                      Product Company:
                    </Typography>
                  </div>
                  <div>
                    <h6 className={classes.text01} level="body-xs">
                      {value.company}
                    </h6>
                  </div>
                </div>
                <div className={classes.container1}>
                  <div className={classes.listName}>
                    <Typography variant="subtitle1">Product Name:</Typography>
                  </div>
                  <div>
                    <Typo variant="title">{value.title}</Typo>
                  </div>
                </div>
                <div className={classes.container1}>
                  <div className={classes.listName}>
                    <Typography variant="subtitle1">Product Price:</Typography>
                  </div>
                  <div>
                    <h4 className={classes.text2}>₹{value.price}</h4>
                  </div>
                </div>
                <div className={classes.container1}>
                  <div className={classes.listName}>
                    <Typography variant="subtitle1">
                      Product Quentity:
                    </Typography>
                  </div>
                  <div>
                    <Typo variant="des1">1</Typo>
                  </div>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className={classes.container1}>
                    <div className={classes.listName}>
                      <Typography variant="subtitle1">Address :</Typography>
                    </div>
                    <div>
                      <textarea
                        name="address"
                        rows="2"
                        cols="22"
                        onChange={(e) =>
                          setValue({ ...value, address: e.target.value })
                        }
                        style={{ background: "transparent" }}
                      ></textarea>
                    </div>
                  </div>
                </form>
                <div className={classes.container1}>
                  <div className={classes.listName}>
                    <Typography variant="subtitle1">Your Order :</Typography>
                  </div>
                  <div>
                    <p className={classes.text01}>
                      Delived by <b>{deliveryDates}</b>{" "}
                    </p>
                  </div>
                </div>
              </div>
              {/* <Typography variant="subtitle1" className={classes.text01}>
                      Product Name:
                    </Typography>
                    <Typography variant="subtitle1" className={classes.text01}>
                      Product Price:
                    </Typography>
                    <Typography variant="subtitle1" className={classes.text01}>
                      Product Quantity:
                    </Typography>
                    <Typography variant="subtitle1" className={classes.text01}>
                      Address:
                    </Typography>
                    <Typography variant="subtitle1" className={classes.text01}>
                      Your Order:
                    </Typography>
             
                  <div style={{display:"flex"}}>
                   
                    

                    
                    <Typography variant="body1">{value.title}</Typography>

                   
                    <Typography variant="body1">₹{value.price}</Typography>

                   
                    <Typography variant="body1">1</Typography>

                   
                    <textarea
                      name="address"
                      rows="2"
                      cols="30"
                      onChange={(e) =>
                        setValue({ ...value, address: e.target.value })
                      }
                      style={{ background: "transparent" }}
                    ></textarea>

                  
                    <Typography variant="body1">
                      Delivered by: <b>{deliveryDates}</b>
                    </Typography> */}

              {/* <table
                  style={{
                    width: "400px",
                    marginTop: "30px",
                    padding: "10px",
                    background: "transparent",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <tr>
                    <td className={classes.tableTd}>Product Comapny : </td>
                    <td>
                      <h6 className={classes.text01} level="body-xs">
                        {value.company}
                      </h6>
                    </td>
                  </tr>
                  <tr>
                    <td>Product Name :</td>
                    <td>
                      <Typo variant="title">{value.title}</Typo>
                    </td>
                  </tr>
                  <tr>
                    <td>Product Price :</td>
                    <td>
                      <h4 className={classes.text2}>₹{value.price}</h4>
                    </td>
                  </tr>
                  <tr>
                    <td>Product Quentity :</td>
                    <td>
                      <Typo variant="des1">1</Typo>
                    </td>
                  </tr>
                  <tr>
                    <td>Address</td>
                    <td>
                      <textarea
                        name="address"
                        rows="2"
                        cols="30"
                        onChange={(e) =>
                          setValue({ ...value, address: e.target.value })}
                        style={{ background: "transparent" }}
                      ></textarea>
                    </td>
                  </tr>
                  <tr>
                    <td>Your Order :</td>
                    <td>
                      <p className={classes.text01}>
                        Delived by <b>{deliveryDates}</b>{" "}
                      </p>
                    </td>
                  </tr>
                </table> */}

              <div className={classes.btn}>
                <Button
                  className={classes.textButton}
                  variant="contained"
                  size="large"
                  onClick={() => handleBuyProduct(value)}
                >
                  Buy Now
                </Button>
              </div>
            </form>
          </Cards>
        ) : (
          <Typography variant="h5" align="center" style={{ marginTop: "50px" }}>
            Product not found.
          </Typography>
        )}
      </div>
    </Container>
  );
};
