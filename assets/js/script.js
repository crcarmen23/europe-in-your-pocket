var searchForm = document.getElementById("search-form")
// Chart.js module
const chartModule = (() => {
  // Functions related to Chart.js integration
})();
// const conversionUSDtoEUR = data.conversion_rates.EUR
// const baseUrl = 'https://v6.exchangeratesapi.io/latest';
// API integration modules
const currencyApiModule = (event) => {
  event.preventDefault()
  // console.log(document.getElementById("amount").value);
  const apiUrl = 'https://v6.exchangerate-api.com/v6';
  const APIkey = '6e2a72528ec1fefdb7cb82e0';
  // const url=`${apiUrl}/latest?access_key=${APIkey}&base=USD`
  // const url=`${apiUrl}/latest/${APIkey}/USD`
  // const APIkey = '6e2a72528ec1fefdb7cb82e0';
  // Functions for currency API integration
  fetch('https://v6.exchangerate-api.com/v6/6e2a72528ec1fefdb7cb82e0/latest/USD', {
    mode: 'cors',
    headers: {
      // 'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  })
    .then(response => response.json())
    .then(data => {
      //   // Process the data retrieved from the server
      console.log(data);
      console.log(data.conversion_rates.USD)
      console.log(data.conversion_rates.EUR)
      var input = document.getElementById("calculator-input").value
      console.log(input)
      const formatter = new Intl.NumberFormat('en-US', { 
        minimumFractionDigits: 2
      })
      
      document.getElementById("calculator-output").innerHTML = formatter.format(input*data.conversion_rates.EUR) + " Euros"
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
};
searchForm.addEventListener("submit", currencyApiModule)

// const flightsApiModule = (() => {
//   const flightApiUrl = "https://api.aviationstack.com/v1/flights";
//   const flightKey = "12e5b1703d9f0bd7eb3883bb358f97ae";

//   https://api.aviationstack.com/v1/flights?access_key=12e5b1703d9f0bd7eb3883bb358f97ae

//   fetch("https://api.aviationstack.com/v1/flights?access_key=12e5b1703d9f0bd7eb3883bb358f97ae")
//     .then(res => {
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//     })
//     .catch(error => {
//       console.error("Fetch error:", error);
//     });
//   // Functions for flights API integration
// })();

const hotelsApiModule = (() => {
  // Functions for hotels API integration
})();

// UI update modules
const currencyUIModule = (() => {
  // Functions to update the currency UI
})();

const flightsUIModule = (() => {
  // Functions to update the flights UI
})();

const hotelsUIModule = (() => {
  // Functions to update the hotels UI
})();

// Initialization
const init = () => {
  // Initialize event listeners and other setup
};

// Run initialization when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  init();
});