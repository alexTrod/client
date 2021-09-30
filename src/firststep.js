import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Grommet, FormField, Form, TextInput, Box, Text, Button, Header, Main, Heading} from 'grommet';


function FirstStep() {
    const [value, setValue] = React.useState({});

  return (
    <Main>
      <Header>

      </Header>
      <Box pad="large" align="center" justify="center">
        <Box pad ="large" justify="center">
          <Heading level="5">
            We need some information about you          
          </Heading>         
        </Box>
        <Box gap="large"> {/**form */}
        <Form
            value={value}
            onChange={nextValue => setValue(nextValue)}
            onReset={() => setValue({})}
            onSubmit={({ value }) => {}}
            >
            <FormField name="Name" htmlFor="text-input-id" label="Name">
                <TextInput id="text-input-email" name="name" />
            </FormField>        
            <FormField name="Email" htmlFor="text-input-id" label="Email">
                <TextInput id="text-input-email" name="email" />
            </FormField>        
        </Form>
        </Box>
        <Box pad ="large" justify="center">
          <Heading level="5">
            What spot would you like (physical)         
          </Heading>         
        </Box>
        <Box gap="large"> {/**form */}
        </Box>
        <Box pad="small">
            <Button label="Submit"
            ></Button>
        </Box>
      </Box>
      </Main>
  );
}

export default FirstStep;
