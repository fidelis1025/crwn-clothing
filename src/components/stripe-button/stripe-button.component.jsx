import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const PriceForStripe = price * 100;
  const publishableKey =
    "pk_test_51MURBfJG0Xav6rs6k3n5YWm1lFTWxKwU0I14NzCG6DiAVO06bdN6iMIm84D2nVMo5Gb1Vaa7nB3JPYnX41VZrWiK00LWGTlDPJ";


    const onToken=token =>{
        alert ('Payment Successful')
    } 

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={PriceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
