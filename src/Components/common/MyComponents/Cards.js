import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({

    card: {
        // gap: '3em',
        //flexWrap: 'wrap',
        //flex : '1 0 8rem',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: '0.3s',
        width: '30%',
        // maxWidth: 100,
        '&:hover': {
            boxShadow: '0 10px 20px 0 rgba(0,0,0,0.2)',
        },
    },

    addToCart :{
        flex : '1 0 8rem',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        // display:"grid",
        transition: '0.3s',
        width: '50%',
        // maxWidth: 100,
        '&:hover': {
            boxShadow: '0 10px 20px 0 rgba(0,0,0,0.2)',
        },
    },

    '@media only screen and (max-width: 960px)' :{
        card :{
           flexGrow: 0,
           maxWidth: "50%",
           flexBasis: "48%",
       }},
       '@media only screen and (max-width: 680px)' :{
        card :{
           flexGrow: 0,
           maxWidth: "100%",
           flexBasis: "100%",
       }},
})

const Cards = ({ children, variant }) => {
    const classes = useStyles()
    return (
        <div className={variant === "card" ? classes.card : variant === "addToCart"}>{children}</div>
    )
}

export default Cards