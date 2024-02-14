import { Button, Card, Container, makeStyles } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import Typo from "../../common/MyComponents/Typo";
import { Loader } from "../../common/Loader";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    backgroundImage: 'url("/Image/order.jpg")',
    height: "600px",
    width: "100%",
    // filter: "blur(5px)",
    WebkitFilter: "blur(2px)",
    /* Center and scale the image nicely */
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  bgText: {
    backgroundColor: "rgb(0,0,0)", // Fallback color
    backgroundColor: "rgb(154 149 149 / 31%)", // Black w/opacity/see-through
    color: "white",
    // filter: "blur(5px)",
    fontWeight: "bold",
    border: "3px solid black",
    // display: "grid",
    // gridTemplateColumns: "auto auto auto",
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 2,
    width: "60%",
    padding: "20px",
    //textAlign: "center",
  },
  deletIcon: {
    height: "30px",
    width: "40px",
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
 
  ordercard: {
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    gap:"10px",
    margin:"10px"
  },
  text1: {
    fontSize: "clamp(8px, 5vw, 24px)", //min, val, max
  },
  text01: {
    fontSize: "clamp(0.5rem, 0.8vw, 1.5rem)", //min, val, max
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
    background: "#f63c3c",
    color: "white",
    width:"200px",
   
    
  },
}));

export const YourOrders = () => {
  const classes = useStyles();
  const [value, setValue] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://65c4700adae2304e92e29905.mockapi.io/p1/buyProduct")
      .then((res) => {
        setValue(res?.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id1) =>{
    console.log(id1, '---> id')
   
    axios.delete("https://65c4700adae2304e92e29905.mockapi.io/p1/buyProduct/" + id1)
    .then(res =>{
      alert("Order Cancel!")
      setLoading(false);
      //navigate('/product')
      window.location.reload();
    })
    .catch(error => {
      console.error(error);
    })
  }


  return (
    <div>
        {loading && <Loader />}
      <Container maxWidth="lg">
        <h3 className="text-center mt-5 mb-5">Your Orders</h3>

        <div className={classes.mainContainer}></div>
        <div className={classes.bgText}>
          {value.map((result, index) => (
            <Card variant="addCard" className={classes.ordercard}>
              <div style={{ width: "40px"}}>
                <img src="./Image/order1.png" alt="" style={{ width: "400%" }} />
              </div>
              <div className={classes.action2}>
               
                <h6 className={classes.text01} level="body-xs">
                  {result.company}
                </h6>
                <Typo variant="title">{result.name}</Typo>
                <h4 className={classes.text2}>₹{result.price}</h4>
              </div>
              <div className={classes.action2}>
              <Button
                    className={classes.textButton}
                    variant="contained"
                    size="medium"
                    onClick={() => handleDelete(result?.id)}
                  >
                    Cancel Oreder
                  </Button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
};

//     <div>
//   <div>
//     <img src="./Image/order1.png" alt="" style={{ width: "20%" }} />
//   </div>
//   <div className={classes.action2}>
//         {result.name}
//   </div>
//   <div className={classes.action2}>
//     <MdDeleteOutline
//       className={classes.deletIcon}
//       color="red"
//       //onClick={() => deleteUser(id)}
//     />
//   </div>
//   </div>
