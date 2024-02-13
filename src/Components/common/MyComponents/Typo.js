import { makeStyles } from '@material-ui/core'
import React from 'react'


const useStyle = makeStyles((theme) => ({
    
    title:{
        color:"blue",
        fontSize: 'clamp(8px, 5vw, 24px)',  //min, val, max 
        lineHeight: "1.235",
        letterSpacing: "0.00735em",
        // fontWeight:400
    },
    des:{
        color:"black",
        fontSize: 'clamp(10px, 1vw, 20px)',  //min, val, max 
        lineHeight: "1.5",
        letterSpacing: "0.00938em",
        fontWeight:400
    },
    des1:{
        color:"red",
        fontSize:18,
        // margin:0
    }
}))


const Typo = ({children, variant}) => {


    // console.log(children);
    const classes = useStyle()

  return (
    <>
        <h4 className={variant === "des" ? classes.des : variant === "title"? classes.title : classes.des1}>{children} </h4>
        {/* <h5 className={variant === "des1" ? classes.des1 : classes.des}> {children}</h5> */}
        
        
        
    </>
  )
}   

export default Typo
