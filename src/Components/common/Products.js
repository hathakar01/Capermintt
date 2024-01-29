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


const useStyles = makeStyles((theme) => ({
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
        fontSize: 'clamp(2vh, 20px, 5vw)',  //min, val, max 
    }
}));


export const Products = () => {

    const classes = useStyles();

  return (
    <>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" style={{ marginTop: "50px" }}>
          Product List
        </Typography>
        <Grid container spacing={4} style={{ marginTop: "20px" }}>
          {Data.map((result, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ maxWidth: 100 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={result.img}
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
                    <Typography  className={classes.text01} level="body-xs">Bluetooth</Typography>

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

                

                <CardActions className="bg-dark">
                <Grid container spacing={2} alignItems="center" style={{padding:"10px"}}>
                  <Grid xs={4}>
                  <Typography variant="h5" className={classes.text2} style={{ marginLeft: "10px" }}>
                    ₹{result.price}
                  </Typography>
                  </Grid>
                  <Grid xs>
                   
                  </Grid>
                  <Grid xs={6}>
                  <Button variant="contained" size="medium">
                    Add to Card
                  </Button>
                  </Grid>
                </Grid>
                  {/* <Typography variant="h5" className="text-white">
                    ₹{result.price}
                  </Typography>
            

                  <Button variant="contained" size="medium">
                    Add to Card
                  </Button> */}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

{
  /* <CardActions style={{ background:"black"}}>
<Typography variant="h5" className="text-white" style={{marginRight:"80px", marginLeft:"10px"}} >
₹{result.price}
</Typography>
<Button variant="contained" size="meduim" >
 Add to cart
 <AddShoppingCartIcon  color="danger"/>
</Button>

</CardActions> */
}
