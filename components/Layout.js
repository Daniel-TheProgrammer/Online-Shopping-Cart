import React from 'react';
import Head from 'next/head';
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Online Shopping Cart</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>Online Shopping Cart</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <footer>
        <Typography>All rights reserved. Online Shopping Cart.</Typography>
      </footer>
    </div>
  );
}
