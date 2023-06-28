fetch("/orders/config/").then((result) => { return result.json(); })
.then((data) => {
  const stripe = Stripe(data.publicKey);
  document.querySelector("#submitBtn").addEventListener("click", () => {
    fetch("/orders/create-checkout-session/",{
        method: "POST",
        body:'[{"price": "price_1NMCoqBbL1wWy0xHQg7EtitO","quantity": 1}]'
    })
    .then((result) => { return result.json(); })
    .then((data) => {
      console.log(data);
      return stripe.redirectToCheckout({sessionId: data.sessionId})
    })
    .then((res) => {
      console.log(res);
    });
  });
});
