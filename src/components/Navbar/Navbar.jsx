import React from 'react'
import {AppBar, Toolbar, IconButton, Badge, Typography, Button } from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import {Search} from '@material-ui/icons';
import {AccountCircle} from '@material-ui/icons';

import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/logo.png';
import useStyles from './styles' ;

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

 
    
  return (
    <>
        <AppBar position="fixed" className={classes.appBar} color="inherit">
            <Toolbar>
                <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                    <img src={logo} alt="aesthetic nutrition" height="60px"  className={classes.image} />
                    

                </Typography>
                
                
                {location.pathname === '/' && (
                <IconButton component={Link} to="" aria-label="search" color="inherit">
                    <Search />
                </IconButton>
                )}
                <IconButton component={Link} to="" aria-label="search" color="inherit">
                    <AccountCircle />
                </IconButton>

                {location.pathname === '/' && (
                    <div className={classes.button}>
                <IconButton component={Link} to="/cart" aria-labe="show cart items" color="inherit">
                    <Badge badgeContent = { totalItems } color="secondary">
                        
                        <ShoppingCart />
                    </Badge>
                </IconButton>
            
                </div>
                )}
                
            </Toolbar>
        </AppBar>  
    </>
  )
}

export default Navbar