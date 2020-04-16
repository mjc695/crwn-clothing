import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100 //converting to cents for stripe
  const publishableKey = 'pk_test_fs64tGxWSJSuVnHIoejpKfcI000scOD13N'

  const onToken = token => {
    console.log(token)
    alert('Payment Successful')
  }

  return (
    <div>
      <StripeCheckout
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`Your total is $${price}`}
        amoount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
      />
    </div>
  )
}


export default StripeCheckoutButton
