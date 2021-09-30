import logo from './logo.svg';
import './App.css';
import React, {View} from 'react';
import {Grommet, Box, Text, Button, Header, Main, Heading} from 'grommet';

function Choice() {
  return (
    <View>
      <Header>

      </Header>
      <Box pad="large" align="center" justify="center">
        <Box pad ="large" justify="center">
          <Heading level="2">
            Get your ticket for the XXX here !             
          </Heading>         
        </Box>
        <Box gap="large">
          <Button color="black" label="Online Ticket" />
          <Button color="black" label="Physical Ticket" />
        </Box>
        <Box pad="small">
          <Heading color="#ff7979"level="5" justify="center"> 
            IMPORTANT : YOU WON'T BE ABLE TO SWITCH FROM ONLINE TO PHYSICAL OR PHYSICAL TO ONLINE
          </Heading>
        </Box>
      </Box>
      </View>
  );
}

export default Choice;
