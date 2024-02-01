import React from "react";
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



const useStyles = makeStyles((theme) => ({
    
  Container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1em',
},  
cardAction:{
  // display: "flex",
    // padding: "8px",
    alignItems: "center",
},
action2: {
  display: 'grid',
  alignItems:"center",
  columnGap: '50px',
  gridTemplateColumns: 'auto auto',
  padding: '12px',
  fontSize: '30px',
},
CardMedia:{
  borderRadius: "10px",
  objectFit: "cover",
  height:"200px",
  width: "100%",
  display: "block",
    backgroundSize: "cover",
    verticalAlign: "middle",
},



    Card:{
      boxShadow: " 5px 8px 10px 0 rgba(3, 158, 255, 0.431)",
    },
    text1:{
        fontSize: 'clamp(8px, 5vw, 24px)',  //min, val, max 
    },
    text01:{
        fontSize: 'clamp(0.5rem, 1vw, 1.5rem)',  //min, val, max 
    },
    text2:{
        color:'white',
        fontSize: 'clamp(2vh, 25px, 5vw)',  //min, val, max 
    },
    textDes:{
        fontSize: 'clamp(10px, 1vw, 20px)',  //min, val, max 
    }
}));


export const Products = () => {

    const classes = useStyles();
    const navigate = useNavigate();
    const handleCard=(value)=>{
        // alert(value)
        console.log(value)
        navigate(`/product/${value}`);
    }

  return (
    <>
      <Container maxWidth="lg">
        {/* <Typography variant="h3" align="center" style={{ marginTop: "50px" }}>
          Product List
        </Typography> */}
        <h1 className="poppinsRegular text-center mt-5">Product List</h1>



        <div className={classes.Container}>

                {Data.map((result, index) => (
                    <Cards className={classes.card}  >


                      <div onClick={()=>handleCard(result.id)}>
                        <div >
                            <img src={result.img[0]} alt=""  className={classes.CardMedia}/>
                        </div>
                          <div style={{padding:"15px"}}>
                          <Typography  className={classes.text01} level="body-xs">{result.company}</Typography>
                          <Typo variant="title">{result.title}</Typo>
                          <Typo variant="des">{result.des}</Typo>
                          <Typo variant="des1">(Only <b>7</b> left in stock!)</Typo>
                          </div>
                      </div>
                        {/* <CardActionArea variant="action1" onClick={() => handleCard(result.id)}>
                            <CardMedia
                                component="img"
                                height="300"
                                image={result.img[0]}
                                alt="green iguana"
                                style={{ borderRadius: "5px" }}
                            />
                            <div>
                                <div className={classes.textTitle} >
                                    {result.title}
                                </div>

                                <Typo variant="tp01">Test Dat for Common component</Typo>
                                <div className={classes.textDes}>
                                    {result.des}
                                </div>
                            </div>
                        </CardActionArea> */}
                        <div className="bg-dark">
                        <div className={classes.action2}>
                            <h3 className={classes.text2}>
                                 ₹{result.price}
                            </h3>

                            <Button className={classes.textButton} variant="contained" size="medium">Add to Card</Button>

                        </div>
                        </div>
                        
                        {/* <div className={classes.cardAction}>
                            <div class={classes.gridContainer}>
                              <div className={classes.gridItem}>
                                 ₹{result.price}
                              </div>
                              
                              <div className={classes.gridItem} >
                              <Button variant="contained" size="medium" >
                                   Add to Card
                              </Button>
                              </div>
                            </div>
                        </div> */}
          
                    </Cards>
                ))}
            </div>

            

              
        
      </Container>
    </>
  );
};





