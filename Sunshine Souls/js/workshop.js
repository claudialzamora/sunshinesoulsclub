document.getElementById('purchase-btn1').addEventListener('click', function() {
    var stripe = Stripe('your-publishable-key-here');

    stripe.redirectToCheckout({
        sessionId: 'your-session-id-for-workshop1-here'
    }).then(function (result) {
        if (result.error) {
            alert(result.error.message);
        }
    });
});

document.getElementById('purchase-btn2').addEventListener('click', function() {
    var stripe = Stripe('your-publishable-key-here');

    stripe.redirectToCheckout({
        sessionId: 'your-session-id-for-workshop2-here'
    }).then(function (result) {
        if (result.error) {
            alert(result.error.message);
        }
    });
});
