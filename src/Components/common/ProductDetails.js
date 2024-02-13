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
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Data from "./Data.json";
import CarouselView from "./CarouselView";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
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

export const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const selectedProduct = Data?.filter((item) => item.id == id);
  const id1 = Number(id);
  console.log(id1, "id");
  // //  console.log(Data , 'data')
  console.log(selectedProduct);

  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      {/* <Typography
            variant="h3"
            align="center"
            style={{ marginBottom: "20px" }}
          >
          
          </Typography> */}
      <Button size="small" onClick={() => navigate(-1)}>
        <KeyboardArrowLeft />
        Back
      </Button>
      {selectedProduct ? (
        <Grid
          container
          spacing={0}
          style={{
            padding: "30px",
            marginTop: "20px",
            // border: "solid 2px red",
            //background: "linear-gradient(45deg, #000000c7, transparent)",
          }}
        >
          <Grid xs={8}>
            <CarouselView />
            {/* <img
            src={selectedProduct[0].img}
            alt=""
            style={{ width: "80%", height:"60vh" , borderRadius: "20px" }}
          /> */}
          </Grid>
          <Grid xs={4} style={{ display: "grid" }}>
            <Card className={classes.Card} sx={{ maxWidth: 100 }}>
              {/* <NavLink to={`${result.id}`}> */}
              <CardActionArea>
                <CardContent>
                  <Typography className={classes.text01} level="body-xs">
                    {selectedProduct[0].company}
                  </Typography>

                  <Typography
                    className={classes.text1}
                    gutterBottom
                    variant="h4"
                    component="div"
                  >
                    {selectedProduct[0].title}
                  </Typography>
                  <Typography
                    level="title-lg"
                    sx={{ mt: 1, fontWeight: "xl" }}
                    className={classes.textDes}
                  >
                    {selectedProduct[0].des}
                  </Typography>
                  <Typography
                    variant="h5"
                    className={classes.text2}
                    style={{ marginLeft: "10px" }}
                  >
                    ₹{selectedProduct[0].price}
                  </Typography>
                </CardContent>
              </CardActionArea>
              {/* </NavLink> */}

              <CardActions style={{ marginTop: "450px" }}>
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  style={{ padding: "10px" }}
                >
                  <Grid xs={6} style={{ display: "grid" }}>
                    <Button variant="contained" size="medium">
                      Add to Card
                    </Button>
                  </Grid>
                  {/* <Grid xs></Grid> */}
                  <Grid xs={6} style={{ display: "grid" }}>
                    <Button
                      variant="contained"
                      size="medium"
                      style={{ backgroundColor: "#e43131cf", color: "white" }}
                    >
                      Buy Now
                    </Button>
                  </Grid>
                </Grid>
              </CardActions>
            </Card>

            {/* <Typography variant="h4" style={{ marginTop: "20px" }}>
          {selectedProduct[0].title}
         </Typography>
         <Typography level="body-xs">{selectedProduct[0].company}</Typography>
           <Typography variant="subtitle1" style={{ marginTop: "10px" }}>
             {selectedProduct[0].des}
           </Typography>
           <Typography variant="h5" style={{ marginTop: "10px" }}>
             Price: ₹{selectedProduct[0].price}
           </Typography>

           <Grid container alignItems="center" style={{padding:"10px"}}>
           <Grid xs={6} style={{display:"grid"}}>
           <Button variant="contained" size="medium" style={{height:"50px", backgroundColor:"#e43131cf", color:"white"}} >
            Add to Card
          </Button>
           </Grid>
           <Grid xs={6} style={{display:"grid"}}>
           <Button variant="contained" size="medium" style={{height:"50px", backgroundColor:"#e43131cf", color:"white"}} >
            Buy Now
          </Button>  
          </Grid>
            </Grid> */}
          </Grid>
        </Grid>
      ) : (
        // <div>
        //   <Typography
        //     variant="h3"
        //     align="center"
        //     style={{ marginBottom: "20px" }}
        //   >
        //     Product Details
        //   </Typography>
        //   <img
        //     src={selectedProduct[0].img}
        //     alt=""
        //     style={{ width: "80%", height:"60vh" , borderRadius: "20px" }}
        //   />
        //   <Typography variant="h4" style={{ marginTop: "20px" }}>
        //     {selectedProduct[0].title}
        //   </Typography>
        //   <Typography variant="subtitle1" style={{ marginTop: "10px" }}>
        //     {selectedProduct[0].des}
        //   </Typography>
        //   <Typography variant="h5" style={{ marginTop: "10px" }}>
        //     Price: ₹{selectedProduct[0].price}
        //   </Typography>
        // </div>
        <Typography variant="h5" align="center" style={{ marginTop: "50px" }}>
          Product not found.
        </Typography>
      )}
    </Container>
  );
};
