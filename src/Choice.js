import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Grommet, Heading, Button, Box, Main, Header} from 'grommet';
import {Link} from "react-router-dom";


function Choice() {

  return (
   <Box>
        <Header>

</Header>
<Box pad="large" align="center" justify="center">
  <Box pad ="large" justify="center">
    <Heading level="2">
      Get your ticket for the XXX here !             
    </Heading>         
  </Box>
  <Box gap="large">
    <Link to="/information">
      <Button color="black" label="Online Ticket" />
    </Link>
    <Link to="/information">
      <Button color="black" label="Physical Ticket" />
    </Link>
  </Box>
  <Box pad="small" >
    <Heading color="#ff7979"level="5" justify="center"> 
      IMPORTANT : YOU WON'T BE ABLE TO SWITCH FROM ONLINE TO PHYSICAL OR PHYSICAL TO ONLINE
    </Heading>
  </Box>
</Box>
    </Box>
  );
}

export default Choice;
