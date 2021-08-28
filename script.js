const currencyEl_one = document.getElementById("currency-one");
const currencyEl_two = document.getElementById("currency-two");
const amountEl_one = document.getElementById("amount-one");
const amountEl_two = document.getElementById("amount-two");

const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;

  fetch(
    `http://api.coinlayer.com/api/live?access_key=e386d4f97b7f34c0b7bfb372a1c941f7#`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log(data.target);
      console.log(typeof data.target);
      const crypto_one = data.rates[currency_one];
      console.log(crypto_one);
      rateEl.innerText = crypto_one;
    });

  fetch(
    `https://v6.exchangerate-api.com/v6/4b1fd31631c11d3ad2b157e2/latest/USD`
  )
    .then((res2) => res2.json())
    .then((data2) => {
      console.log(data2);
    });
  //

  // rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

  // amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
}
calculate();
