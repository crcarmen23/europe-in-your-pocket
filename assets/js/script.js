const apiUrl = "https://v6.exchangerate-api.com/v6";
const APIkey = "6e2a72528ec1fefdb7cb82e0";

<<<<<<< HEAD
const apiUrl = 'https://v6.exchangerate-api.com/v6';
const APIkey = '6e2a72528ec1fefdb7cb82e0';

var searchForm = document.getElementById("search-form")

// // Chart.js module
// const chartModule = (() => {
//   // Functions related to Chart.js integration
// })();
const cacheName = 'my-data-cache';
window.onload = async () => {
  await getCodes();
};

// Function to fetch data and populate the dropdown
async function getCodes() {
  try {
    // Open the cache
    const cache = await caches.open(cacheName);

    // Check if the data is in the cache
    const cachedResponse = await cache.match(`${apiUrl}/${APIkey}/codes`);

    if (cachedResponse) {
      console.log('Using cached response')
      // If data is found in the cache, use it
      const data = await cachedResponse.json();
      
      var codes = []
      dropListInput = document.getElementById('dropListInput')
      dropListOutput = document.getElementById('dropListOutput')

      codes = data.supported_codes
      for (let i = 0; i < data.supported_codes.length; i++) {
        //console.log(codes[i][1])
        var optionIn = document.createElement("option");
        optionIn.value = codes[i][0];
        optionIn.text = codes[i][1];
        dropListInput.appendChild(optionIn);

        var optionOut = document.createElement("option");
        optionOut.value = codes[i][0];
        optionOut.text = codes[i][1];
        dropListOutput.appendChild(optionOut);
      }
    } else {
      console.log('Data not found in cache. Fetching and caching now...');

      // Fetch the data from the server
      const response = await fetch(`${apiUrl}/${APIkey}/codes`);

      // Store the fetched data in the cache
      cache.put(`${apiUrl}/${APIkey}/codes`, response.clone());
      
      const data = await response.json();

      // Populate the dropdown with the fetched data
      var codes = []
      dropListInput = document.getElementById('dropListInput')
      dropListOutput = document.getElementById('dropListOutput')

      // Clear existing options
      dropListInput.innerHTML = '';      
      dropListOutput.innerHTML = '';

      codes = data.supported_codes
      for (let i = 0; i < data.supported_codes.length; i++) {
        //console.log(codes[i][1])
        var optionIn = document.createElement("option");
        optionIn.value = codes[i][0];
        optionIn.text = codes[i][1];
        dropListInput.appendChild(optionIn);

        var optionOut = document.createElement("option");
        optionOut.value = codes[i][0];
        optionOut.text = codes[i][1];
        dropListOutput.appendChild(optionOut);
      }
    }
  } catch (error) {
    console.error('Error getting data from cache or server:', error);
  }
}
/*
async function getCodes() {

  var codes = []

  dropListInput = document.getElementById('dropListInput')
  dropListOutput = document.getElementById('dropListOutput')
=======
var searchForm = document.getElementById("search-form");

window.onload = getCodes;
var codes = [];
function getCodes() {
  dropListInput = document.getElementById("dropListInput");
  dropListOutput = document.getElementById("dropListOutput");
>>>>>>> c74e242ef288d83e82a4928878a4d7c62b53a873

  fetch(`${apiUrl}/${APIkey}/codes`, {
    mode: "cors",
    headers: {
      // 'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*",
    },
  })
<<<<<<< HEAD
    .then(response)
    .then(data => {
=======
    .then((response) => response.json())
    .then((data) => {
>>>>>>> c74e242ef288d83e82a4928878a4d7c62b53a873
      //Process the data retrieved from the server
      //console.log(data);
      codes = data.supported_codes;
      for (let i = 0; i < data.supported_codes.length; i++) {
        //console.log(codes[i][1])
        var optionIn = document.createElement("option");
        optionIn.value = codes[i][0];
        optionIn.text = codes[i][1];
        dropListInput.appendChild(optionIn);

        var optionOut = document.createElement("option");
        optionOut.value = codes[i][0];
        optionOut.text = codes[i][1];
        dropListOutput.appendChild(optionOut);
      }
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}
<<<<<<< HEAD
*/
=======
>>>>>>> c74e242ef288d83e82a4928878a4d7c62b53a873

// const conversionUSDtoEUR = data.conversion_rates.EUR
// const baseUrl = 'https://v6.exchangeratesapi.io/latest';
// API integration modules
const currencyApiModule = (event) => {
  event.preventDefault();
  // console.log(document.getElementById("amount").value);
  // const url=`${apiUrl}/latest?access_key=${APIkey}&base=USD`
  // const url=`${apiUrl}/latest/${APIkey}/USD`
  // const APIkey = '6e2a72528ec1fefdb7cb82e0';
  // Functions for currency API integration
<<<<<<< HEAD
  var currencyIn = document.getElementById('dropListInput').value
  var currencyOut = document.getElementById('dropListOutput').value
  var input = document.getElementById("calculator-input").value
  //console.log(currencyIn)
  //console.log(currencyOut)
=======
  var currencyIn = document.getElementById("dropListInput").value;
  var currencyOut = document.getElementById("dropListOutput").value;
  var input = document.getElementById("calculator-input").value;
  console.log(currencyIn);
  console.log(currencyOut);
>>>>>>> c74e242ef288d83e82a4928878a4d7c62b53a873
  fetch(`${apiUrl}/${APIkey}/pair/${currencyIn}/${currencyOut}/${input}`, {
    mode: "cors",
    headers: {
      // 'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      //   // Process the data retrieved from the server
      //console.log(data);
      //console.log(input)
      document.getElementById("calculator-output").innerHTML =
        data.conversion_result.toFixed(2) + " " + currencyOut;
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
};
<<<<<<< HEAD
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
=======
searchForm.addEventListener("submit", currencyApiModule);
>>>>>>> c74e242ef288d83e82a4928878a4d7c62b53a873

const hotelsApiModule = (() => {
  // Functions for hotels API integration
  const url =
    "https://hotels-com-provider.p.rapidapi.com/v2/meta/convert/slug-id?slug=ho219115";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "6eb4b4c13bmshfee3d464e5fa587p106a74jsn4cc33a147548",
      "X-RapidAPI-Host": "hotels-com-provider.p.rapidapi.com",
    },
  };

  fetch(url, options)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
})();

// UI update modules
const currencyUIModule = (() => {
  // Functions to update the currency UI
})();

const hotelsUIModule = (() => {
  // Functions to update the hotels UI
})();

// Initialization
const init = () => {
  // Initialize event listeners and other setup
};

// Run initialization when the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  init();
});
