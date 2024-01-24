import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { Container,Box,Toolbar,Typography, List, ListItem, Drawer, AppBar, IconButton } from "@material-ui/core"

import { makeStyles } from "@material-ui/core/styles"

import DehazeIcon from '@material-ui/icons/Dehaze'

import HomeIcon from '@material-ui/icons/Home'
import PersonIcon from '@material-ui/icons/Person'
import ContactPageIcon from '@mui/icons-material/ContactPage';

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2)
        
    },
    title:{
        marginRight: "auto",
    },
    drawer:{
        width: 300,
        marginTop:40,
        
    },
    iconeAlign:{
        marginLeft:160
    },
    ListItem :{
        marginTop: "10px"
    },
    content: {
        padding: theme.spacing(9)
    }
}))

export const Drawers = () => {

    const classes = useStyles();
    const [opens, setOpens] = useState(false);

    return (
        <Container className={classes.root}>
            <Drawer open={opens} onClose={() => setOpens(false)} >
                <Box display="flex" p={4} mt={5} justifyContent="space-between" fontWeight={500} >
                    <Typography style={{ background:"#ebebed"}}>
                        <Box m={4} fontWeight="fontWeightBold" style={{fontSize:22, marginLeft:'50px', marginTop:'50px'}}>
                            Hello Capermint
                        </Box>
                        <Box fontWeight="fontWeightBold" ml={4} fontSize={14} style={{fontSize:12, marginLeft:'56px', marginTop:'5px'}}>
                            hathakar2002@gmail.com
                        </Box>
                    </Typography>
                </Box>

                {/* <Box pl={1} ml={1} type="paragraph" bgcolor="#ebebeb" color="inherit">
                    <Typography style={{padding:"20px"}}>
                        <Box fontWeight="fontWeightBold">
                            Bonus Details
                        </Box>
                        <Box fontSize={12} mt={1}>
                           Get More Details
                        </Box>
                    </Typography>
                </Box> */}

                <List className={classes.drawer} >
                    <ListItem button className={classes.ListItem}>
                        <HomeIcon style={{ width:20, height:30}}/>
                        <Box type="paragraph" color="inherit" style={{fontSize:15}} >
                        <NavLink to="/">Home</NavLink>
                        </Box>
                    </ListItem>

                    <ListItem button>
                        <PersonIcon style={{ width:20, height:30}}/>
                        <Box  type="paragraph" color="inherit"  style={{fontSize:15}}>
                        <Link to="/about">About</Link>
                        </Box>
                    </ListItem>

                    <ListItem button>
                        <ContactPageIcon style={{ width:20, height:30}}/>
                        
                        <Box type="paragraph" color="inherit"  style={{fontSize:15}}>
                        <Link to="/contact">Contact</Link>
                        </Box>
                    </ListItem>

                   
                    
                </List>
            </Drawer>

            <AppBar style={{background: '#2E3B55'}}>
                <Toolbar>
                <IconButton edge="start"
                        className={classes.menuButton}
                        
                        color="inherit"
                        onClick={() => setOpens(true)}
                    >
                        <DehazeIcon style={{ width:20, height:30}}/>
                    </IconButton>   
                    <Typography type="title" color="inherit" style={{flex :1, fontSize:20}}>
                        Capermint
                    </Typography>
                   
                </Toolbar>
            </AppBar>
        </Container>
    )
}

