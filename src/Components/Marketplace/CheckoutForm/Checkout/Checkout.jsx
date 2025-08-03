import React, { useState } from 'react';
import { CssBaseline, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';

import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import useStyles from './styles';

const steps = ['Shipping address', 'Payment details'];

const Checkout = ({ cart, onCompleteCheckout, order, error }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [shippingData, setShippingData] = useState({});
  const classes = useStyles();
  const history = useHistory(); 

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const handleShippingSubmit = (data) => {
    setShippingData(data);
    nextStep();
  };

  const handlePaymentSubmit = async () => {
    await onCompleteCheckout(cart.id);
    nextStep();
  };

  const Confirmation = () => (
    order ? (
      <>
        <div>
          <Typography variant="h5">Thank you for your purchase!</Typography>
          <Divider className={classes.divider} />
          <Typography variant="subtitle2">Order ID: {order.id}</Typography>
        </div>
        <br />
        <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
      </>
    ) : (
      <div className={classes.spinner}>
        <CircularProgress />
      </div>
    )
  );

  if (error) {
    return (
      <>
        <Typography variant="h5">Error: {error}</Typography>
        <br />
        <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
      </>
    );
  }

  const Form = () => (
    activeStep === 0 ? (
      <AddressForm
        cart={cart}
        nextStep={nextStep}
        onSubmit={handleShippingSubmit}
      />
    ) : (
      <PaymentForm
        cart={cart}
        backStep={backStep}
        shippingData={shippingData}
        onSubmit={handlePaymentSubmit}
      />
    )
  );

  return (
    <>
      <CssBaseline />
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">Checkout</Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : <Form />}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;