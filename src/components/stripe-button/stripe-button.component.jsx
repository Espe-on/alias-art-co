import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_51HGMPrFgHgP1aaUMZOkuMXxjr7WJPt9feL1O5n8rK6tP5t0hHLGtJdEbbpCguiLiRNXyCPFwWWstwjiuGYzrfMVb00YMorcrNO";

  const onToken= token => {
      console.log(token);
      alert("Payment Successful")
  }

  return (
      <StripeCheckout
          label="Pay Now"
          name="Alias-Art-Co"
          billingAddress
          shippingAddress
          currency="GBP"
          description={`Your total is £${price}`}
          amount={priceForStripe}
          panelLabel="Pay Now"
          token={onToken}
          stripeKey={publishableKey}
      />
  )
};

export default StripeCheckoutButton;
