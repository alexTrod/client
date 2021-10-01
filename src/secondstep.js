import logo from './logo.svg';
import {Grommet, Box, Main, Header} from 'grommet';
import React from "react";
import ReactDOM from "react-dom"

//https://github.com/Luehang/react-paypal-button-v2

const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });

function SecondStep() {
  const createOrder = (data, actions) =>{
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "0.01",
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture();
  };

  return (
    <Box>
    <Header>

    </Header>
   
      <Box align="center">
    <PayPalButton
      createOrder={(data, actions) => createOrder(data, actions)}
      onApprove={(data, actions) => onApprove(data, actions)}
    />
     </Box>
        </Box>
  );
}

export default SecondStep;
