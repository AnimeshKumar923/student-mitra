import React from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';

const SignupForm = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        Sign Up for an Account
      </Header>
      <Form size='large'>
        {/* Add form fields for signup */}
        <Button color='teal' fluid size='large'>
          Sign Up
        </Button>
      </Form>
      <Message>
        Already have an account? <a href='#'>Log In</a>
      </Message>
    </Grid.Column>
  </Grid>
);

export default SignupForm;
