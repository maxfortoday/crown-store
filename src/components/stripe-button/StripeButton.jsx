import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({price}) => {
 const priceForStripe = price * 100;
 const publishbleKey = 'pk_test_DqY7aG7z7lxepVuGnht1mZyz00eFNWdMlP';

 const onToken = token => {
  console.log(token);
  alert('Payment successfull')
 }

 return (
  <StripeCheckout 
   label="Pay Now"
   name="crown store Ltd."
   billingAddress
   shippingAddress
   image='https://svgshare.com/i/CUz.svg'
   description={`Your total is $${price}`}
   amount={priceForStripe}
   panelLabel='Pay Now'
   token={onToken}
   stripeKey={publishbleKey}
  />
 )
}

export default StripeButton
