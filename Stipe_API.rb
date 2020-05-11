# Stipe API - https://stripe.com/docs/api/
    # - uses form-encoded request bodies, returns JSON-encoded responses.
    # - API key used to authenticate the session determines whether the request is live or test mode. 
    # - Process consists of creating an object to track payment, collecting card info, and submitting the payment to Stripe for processing. PaymentIntent is the payment object used to track and handle all the states of the payment until it's completed. 

# PaymentIntents  - guides you throug process of collecting a payment from the customer. This can also be referenced later to see the history of payment attempts for a particular session. 
    # - After a PaymentIntent is created, attach a payment method and confirm to continue to payment. 
    # 'amount' & 'currency' - two required parameters. 

# Steps to set up stripe server-side: From: https://stripe.com/docs/payments/accept-a-payment
    # - 1.  Need a Stripe account
    # - 2. Then install Stripe libraries (available as a gem):
        
        sudo gem install Stipe

        # Or adding this line to Gemfile:

            gem 'stripe'

    # - 3. Create a PaymentIntent object. Note states that this should always be done server side to avoid malicious customers from manipulating this on the client. This Ex is Ruby:

        # Set your secret key. Remember to switch to your live secret key in production!
        # See your keys here: https://dashboard.stripe.com/account/apikeys
        Stripe.api_key = 'sk_test_4eC39HqLyjWDarjtT1zdp7dc'

        intent = Stripe::PaymentIntent.create({
            amount: 1099,
            currency: 'usd',
            # Verify your integration in this guide by including this parameter
            metadata: {integration_check: 'accept_a_payment'},
        })

        # Another different example:

        Stripe.api_key = 'sk_test_4eC39HqLyjWDarjtT1zdp7dc'

        intent = Stripe::PaymentIntent.create({
        amount: 1099,
        currency: 'usd',
        payment_method_types: ['card'],
        })

    # - 4. Collect card details with Stripe Elements. Elements are prebuilt UI components for collecting and validating card number, ZIP code, and exp date. 
        # ** Note that the address of the checkout page must be https:// rather than http:// for integration to work. 
        # First you must make the stripe script available in the head of the HTML file:

        <head>
            <title>Checkout</title>
            <script src="https://js.stripe.com/v3/"></script>
        </head>

        # Then create an instance of Elements with this JS on the checkout page: 

        # Set your publishable key: remember to change this to your live publishable key in production
        # See your keys here: https://dashboard.stripe.com/account/apikeys

        var stripe = Stripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
        var elements = stripe.elements();

        # Next you use the Elements on your payment page

        <form id="payment-form">
            <div id="card-element">
               # Elements will create input elements here 
            </div>

            # We'll put the error messages in this element
            <div id="card-errors" role="alert"></div>
            <button id="submit">Pay</button>
        </form>
        
        # Once the form has loaded, we create an instance of an Element and mount it to the Element container: 
            # Set up Stripe.js and Elements to use in checkout form
            var style = {
            base: {
                color: "#32325d",
            }
            };

            var card = elements.create("card", { style: style });
            card.mount("#card-element");

        # To help customers, add a change event on the card Element to display errors:

        card.addEventListener('change', ({error}) => {
            const displayError = document.getElementById('card-errors');
            if (error) {
              displayError.textContent = error.message;
            } else {
              displayError.textContent = '';
            }
          });


    # - 5. Submit the payment to Stripe - Ex of doing this in HTML and JS:

    var form = document.getElementById('payment-form');

    form.addEventListener('submit', function(ev) {
    ev.preventDefault();
    stripe.confirmCardPayment(clientSecret, {
        payment_method: {
        card: card,
        billing_details: {
            name: 'Jenny Rosen'
        }
        }
    }).then(function(result) {
        if (result.error) {
        # Show error to your customer (e.g., insufficient funds)
        console.log(result.error.message);
        } else {
        # The payment has been processed!
        if (result.paymentIntent.status === 'succeeded') {
            # Show a success message to your customer
            # There's a risk of the customer closing the window before callback
            # execution. Set up a webhook or plugin to listen for the
            # payment_intent.succeeded event that handles any business critical
            # post-payment actions.
        }
        }
    });
    });
