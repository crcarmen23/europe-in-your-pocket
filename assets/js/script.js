const flightApiUrl = "https://api.aviationstack.com/v1/flights";
const flightKey = "12e5b1703d9f0bd7eb3883bb358f97ae";


fetch("https://api.aviationstack.com/v1/flights")
   .then(res => {
        return res.json();
   })
   .then(data => {
     console.log(data);
   })
   .catch(error => {
     console.error("Fetch error:", error);
   });