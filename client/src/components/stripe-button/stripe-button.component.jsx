import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishbleKey = 'pk_test_DqY7aG7z7lxepVuGnht1mZyz00eFNWdMlP';
 
  const onToken = token => {
   axios({
     url: 'payment',
     method: 'post',
     data: {
       amount: priceForStripe,
       token
     }
   }).then(response => {
     alert('Payment succesful')
   }).catch(error => {
     console.log('Payment error', JSON.parse(error));
     alert('There was an issue with your payment');
   })
  }
 
  return (
   <StripeCheckout 
    label="Pay Now"
    name="crown store Ltd."
    billingAddress
    shippingAddress
    // image='https://svgshare.com/i/CUz.svg'
    description={`Your total is $${price}`}
    amount={priceForStripe}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey={publishbleKey}
   />
  )
 }

export default StripeCheckoutButton;
