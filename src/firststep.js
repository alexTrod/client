import logo from './logo.svg';
import './App.css';
import React from 'react';
import {FormField, Form, TextInput, Box, Text, Button, Header, Main, Heading} from 'grommet';
import {Link} from "react-router-dom";

function FirstStep(props) {
    const [value, setValue] = React.useState({});
    return (
        <Main>
        <Header>

        </Header>
        <Box pad="large" align="center" justify="center">
            <Box pad ="small" justify="center">
            <Heading level="5">
                We need some information about you ...       
            </Heading>         
            </Box>
            <Box> {/**form */}
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
            { props.physical ? 
            <>
                <Box pad ="small" justify="center">
                <Heading level="5">
                    What spot would you like ?        
                </Heading>         
                </Box>
                <Box gap="large"> {/**form */}
                </Box>
            </>  
            : <></>}
            <Box pad="small">
                <Link to="/payment">
                    <Button label="Go to payment"
                    ></Button>
                </Link>
            </Box>
        </Box>
        </Main>
    );
    }

export default FirstStep;
