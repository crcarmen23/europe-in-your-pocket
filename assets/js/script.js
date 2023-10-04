var searchForm = document.getElementById ("search-form")
// Chart.js module
const chartModule = (() => {
    // Functions related to Chart.js integration
  })();
  
  // API integration modules
  const currencyApiModule = (event) => {
    event.preventDefault()
    console.log(document.getElementById("amount").value);
    const apiUrl = 'https://v6.exchangerate-api.com/v6/6e2a72528ec1fefdb7cb82e0/latest/USD';
    const APIkey = '6e2a72528ec1fefdb7cb82e0';
    // Functions for currency API integration
    fetch('https://v6.exchangerate-api.com/v6/6e2a72528ec1fefdb7cb82e0/latest/USD')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Process the data retrieved from the server
    console.log(data);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
  };
  
  const dropdownList = document.getElementById('dropList');

  fetch('https://v6.exchangerate-api.com/v6/6e2a72528ec1fefdb7cb82e0/latest/USD')
    .then(response => response.json())
    .then(data => {
      populateDropdown(data);
    });
    function populateDropdown(data) {
      console.log(data);
      };
    

  searchForm.addEventListener("submit", currencyApiModule)

  const flightsApiModule = (() => {
    // Functions for flights API integration
  })();
  
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
  