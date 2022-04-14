import React from 'react';
import head from 'next/head';
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';
import useStyles from '../utils/styles';

export default function Layout({ children }) {
    const classes = useStyles();
    return (
      <div>
        <Head>
          <title>Online-shopping Cart</title>  
        </Head> 
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <Typography>Online-shopping Cart</Typography>
          </Toolbar>      
        </AppBar> 
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
            <Typography>All rights reserved. @2022</Typography>
        </footer>
      </div>
    );
}
