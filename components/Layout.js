import React from 'react';
import Head from 'next/head';
import { AppBar, Toolbar, Typography, Container, Link, createMuiTheme, ThemeProvider, CssBaseline, } from '@material-ui/core';
import useStyles from '../utils/styles';

export default function Layout({title, description, children }) {
  const theme = createMuiTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
    },
    palette: {
      type: 'light',
      primary: {
        main: '#f0c000',
      },
      secondary:{
        main: '#208080',
      },
    },
  });
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Online Shopping Cart</title>
      </Head>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>Online Shopping Cart</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All rights reserved. @2022</Typography>
      </footer>
      </ThemeProvider>
    </div>
  );
}
