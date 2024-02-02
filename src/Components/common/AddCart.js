import React from 'react'
import { useSelector } from 'react-redux'
import Data from "./Data.json";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  CardActionArea,
  CardActions,
  Button,
} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { useNavigate, useParams } from "react-router-dom";
import CarouselView from "./CarouselView";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  Card: {
    boxShadow: " 0px 0px 60px 0px rgb(18 17 17 / 38%)",
    background: "transparent",
  },
  text1: {
    fontSize: "clamp(8px, 5vw, 24px)", //min, val, max
  },
  text01: {
    fontSize: "clamp(0.5rem, 1vw, 1.5rem)", //min, val, max
  },
  text2: {
    color: "black",
    fontSize: "clamp(2vh, 25px, 5vw)", //min, val, max
  },
  textDes: {
    fontSize: "clamp(10px, 1vw, 20px)", //min, val, max
  },
}));



const AddCart = () => {

    const data = useSelector((state) =>{
        return state.products;
    })

     console.log(data)
    //  const { id } = useParams();
    const selectedProduct = Data?.filter((item) => item.id == data);
    const id1 = Number(data);
    console.log(id1, "id");
    console.log(selectedProduct[0], 'add')

    const classes = useStyles();

  return (

    <>

{selectedProduct[0] ? (
  <div>
    <img src={selectedProduct[0].img[0]}></img>
        <h1>{selectedProduct[0].title}</h1>
  </div>
       
      ) : (
      
        <Typography variant="h5" align="center" style={{ marginTop: "50px" }}>
          Product not found.
        </Typography>
      )}
    </>
      // data.map((product, id) => {
      //   return <li>
      //       {product}
      //   </li>
      // })
    
  )
}

export default AddCart
