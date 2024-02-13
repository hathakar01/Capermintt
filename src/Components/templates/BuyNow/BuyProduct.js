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
  tableTd: {
    width: "40%",
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
}));

export const BuyProduct = ({}) => {
  const classes = useStyles();
  const { id } = useParams();
  const [value, setValue] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    axios
      .get(`https://65c4700adae2304e92e29905.mockapi.io/p1/product/${id}`)
      .then((res) => {
        setValue(res?.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleBuyProduct = (buyData) => {
    console.log(buyData, "--> BuyData");
  };

  console.log(value, "--->Buy");
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
              <img src={value.img} alt="" className={classes.CardMedia} />
            </div>
            <div className={classes.mainDiv}>
              <table
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
                      style={{ background: "transparent" }}
                    ></textarea>
                  </td>
                </tr>
                <tr>
                  <td>Your Order :</td>
                  <td>
                    <h6 className={classes.text01}>Delived by  </h6>
                  </td>
                </tr>
              </table>
            </div>


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

{
  /*}
<div className='Container bg-light h-100'>
{value ? (
  <Cards className={classes.Card} sx={{ maxWidth: 100 }}>

  <div>
    <div>
      <img
        src={value.img}
        alt=""
        className={classes.CardMedia}
      />
    </div>
    <div style={{ padding: "15px" }}>
      <Typography className={classes.text01} level="body-xs">
        {value.company}
      </Typography>
      <Typo variant="title"> {value.title}   </Typo>
      <div style={{ height: "70px" }}>
        <Typo variant="des">Hyy</Typo>
      </div>
      <Typo variant="des1">
        (Only <b>7</b> left in stock!)
      </Typo>
    </div>
  </div>

  <div className="bg-dark">
    <div className={classes.action2}>
      <h3 className={classes.text2}>600</h3>

      <Button
        className={classes.textButton}
        variant="contained"
        size="medium"
        
      >
        Buy Now{" "}
       
      </Button>
    </div>
  </div>
</Cards>
) : (
    <Typography variant="h5" align="center" style={{ marginTop: "50px" }}>
Product not found.
</Typography>
)}
</div>
*/
}
