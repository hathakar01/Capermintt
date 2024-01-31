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


const useStyles = makeStyles((theme) => ({
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

        <Grid container spacing={4} style={{ marginTop: "20px" }}>
          {Data.map((result, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
          
              <Card className={classes.Card} sx={{ maxWidth: 100 }} onClick={()=>handleCard(result.id)}>
              {/* <NavLink to={`${result.id}`}> */}
                <CardActionArea>
               
                  <CardMedia
                    component="img"
                    height="200"
                    image={result.img[0]}
                    alt=""
                    style={{ borderRadius: "10px" }}
                  >
                    {/* <AspectRatio sx={{ minWidth: 100 }}>
                    <img
                      src={result.img}
                      loading="lazy"
                      alt=""
                    />
                  </AspectRatio> */}
                  </CardMedia>
                 
                  <CardContent>
                    <Typography  className={classes.text01} level="body-xs">{result.company}</Typography>

                    <Typography className={classes.text1} gutterBottom variant="h4" component="div">
                      {result.title}
                    </Typography>
                    <Typography
                      level="title-lg"
                      sx={{ mt: 1, fontWeight: "xl" }}
                      endDecorator={
                        <Chip
                          component="span"
                          size="sm"
                          variant="soft"
                          color="success"
                        >
                          Lowest price
                        </Chip>
                      }
                      className={classes.textDes}
                      
                    >
                      {result.des}
                    </Typography>
                    <Typography level="body-sm" >
                      (Only <b>7</b> left in stock!)
                    </Typography>
                  </CardContent>
                </CardActionArea>
                {/* </NavLink> */}
                

                <CardActions className="bg-dark">
                <Grid container spacing={2} alignItems="center" style={{padding:"10px"}}>
                  <Grid xs={4}>
                  <Typography variant="h5" className={classes.text2} style={{ marginLeft: "10px" }}>
                    ₹{result.price}
                  </Typography>
                  </Grid>
                  <Grid xs={2}>
                   
                  </Grid>
                  <Grid xs={6} style={{display:"grid"}}>
                  <Button variant="contained" size="medium" >
                    Add to Card
                  </Button>
                  </Grid>
                </Grid>
                </CardActions>

              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
