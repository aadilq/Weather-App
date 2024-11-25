// Add event listener to the button to trigger the weather fetch
document.getElementById('search-button').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    if (city) {
      getWeather(city);
    }
  });
  

  async function getWeather(city) {
    const apiKey = '02a525a4e8b799adb6014aa4a5352ba0';  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      // Send request to the weather API
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`City not found: ${response.statusText}`);
      }
  
      const data = await response.json();
      displayWeather(data);  // Display the weather data if successful
  
    } catch (error) {
      displayError(error.message);  // Display error message
    }
  }
  
  // Function to display the fetched weather data
  function displayWeather(data) {
    // Make the weather info section visible
    
    // Update the DOM with the weather data
    document.getElementById('city-name').textContent = data.name;
    document.getElementById('weather-description').textContent = data.weather[0].description;
    document.getElementById('temperature').textContent = `Temperature: ${data.main.temp} °C`;
    document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`; // Display additional weather detail
  }
  
  // Function to display error messages to the user
  function displayError(message) {
    alert(message);  // Show an alert with the error message
    document.querySelector('.weather-info').style.display = 'none';  // Hide weather info section
  }