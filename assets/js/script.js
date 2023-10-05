
const currencyApiUrl = 'https://v6.exchangerate-api.com/v6';
const currencyAPIkey = '6e2a72528ec1fefdb7cb82e0';

var searchForm = document.getElementById("search-form")

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
    const cachedResponse = await cache.match(`${currencyApiUrl}/${currencyAPIkey}/codes`);

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
      const response = await fetch(`${currencyApiUrl}/${currencyAPIkey}/codes`);

      // Store the fetched data in the cache
      cache.put(`${currencyApiUrl}/${currencyAPIkey}/codes`, response.clone());
      
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

// const conversionUSDtoEUR = data.conversion_rates.EUR
// const baseUrl = 'https://v6.exchangeratesapi.io/latest';
// API integration modules
const currencyApiModule = (event) => {
  event.preventDefault()
  // console.log(document.getElementById("amount").value);  

  // Functions for currency API integration
  var currencyIn = document.getElementById('dropListInput').value
  var currencyOut = document.getElementById('dropListOutput').value
  var input = document.getElementById("calculator-input").value
  //console.log(currencyIn)
  //console.log(currencyOut)
  fetch(`${currencyApiUrl}/${currencyAPIkey}/pair/${currencyIn}/${currencyOut}/${input}`, {
    mode: 'cors',
    headers: {
      // 'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  })
    .then(response => response.json())
    .then(data => {
      //   // Process the data retrieved from the server
      //console.log(data);
      //console.log(input)
      document.getElementById("calculator-output").innerHTML = data.conversion_result.toFixed(2) + ' ' + currencyOut
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
};
searchForm.addEventListener("submit", currencyApiModule)


//functions to make weather data display


// Initialization
const init = () => {
  // Initialize event listeners and other setup
};

// Run initialization when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  init();

});

