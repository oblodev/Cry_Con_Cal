const currencyEl_one = document.getElementById("currency-one");
const currencyEl_two = document.getElementById("currency-two");
const amountEl_one = document.getElementById("amount-one");
const amountEl_two = document.getElementById("amount-two");

const rateEl = document.getElementById("rate");
//const swap = document.getElementById("swap");

function cryptoResponse() {
  const currency_one = currencyEl_one.value;

  fetch(
    `http://api.coinlayer.com/api/live?access_key=e386d4f97b7f34c0b7bfb372a1c941f7#`
  )
    .then((res) => res.json())
    .then((data) => {
      const crypto = data.rates[currency_one];

      //console.log(currency_one);
      //console.log(crypto);
      //amountEl_two.value = (amountEl_one.value * crypto).toFixed(2);

      function fiatResponse() {
        fetch(
          `https://v6.exchangerate-api.com/v6/4b1fd31631c11d3ad2b157e2/latest/USD`
        )
          .then((res2) => res2.json())
          .then((data2) => {
            const currency_two = currencyEl_two.value;
            //console.log(currency_two);
            const fiat_rate = data2.conversion_rates[currency_two];

            if (currency_two != "USD") {
              amountEl_two.value =
                amountEl_one.value * (crypto * fiat_rate).toFixed(2);
            } else {
              amountEl_two.value = (amountEl_one.value * crypto).toFixed(2);
            }
            //amountEl_two.value = (amountEl_one.value * crypto).toFixed(2);
            //console.log(amountEl_two.value * rate);
          });
      }

      fiatResponse();
    });
}

currencyEl_one.addEventListener("change", cryptoResponse);
amountEl_one.addEventListener("input", cryptoResponse);
currencyEl_two.addEventListener("change", cryptoResponse);

cryptoResponse();
