import React, { Children } from 'react';
import Head from 'next/head';
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';

export default function Layout({Children}) {
  return (
    <div>
        //Header Section
        <Head>
            <title>Online Shopping Cart</title>
        </Head>
        <AppBar position="static">
            <Toolbar>
                <Typography>Online Shopping Cart</Typography>
            </Toolbar>
        </AppBar>
        //Main Section
        <Container>
            {Children}
        </Container>
    </div>
  )
}
