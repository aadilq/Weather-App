
# Weather App

This is an iteration of a Weather App that I made using HTML, CSS, and JavaScript. The Application takes in a City and returns to the User Weather conditions at the current moment (Sunny, Rainy, or Cloudy), The Degrees in Celsius, and Humidity Percentage

- For the Skeleton of the Page, it was made using HTML and various Div boxes. An HTML input type was used to take in the name of the City that User put in and a Button that was connected to a JavaScript Function to go and Retrieve the Information. 

- The Styling of the Page was made by using regular CSS. 

- The JavaScript was used to add a function so that whenever the user clicks the button, it takes in the City that user inputs and ouputs the current Weather conditions, the Degrees in Celsius, and the Humidity Percentage. 

- The API being used to retrieve the Current Weather Data is from Open Weather Map. 

I had added an event listener to the button to trigger the weather fetch if there is a city in our input form. If it is a valid city, then we feed the city in to our Asynchronous Function to fetch the Weather Data. I wanted to use Asynchronous Function to learn more about How to run an initial API call and then other tasks in the background using await and catch. 





## Screenshots

![](https://github.com/aadilq/Weather-App/blob/main/Screenshot%202024-11-25%20at%209.14.51%20PM.png)
## Color Reference

| Color             | rgba                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Bodt | #1F2F41 |
| .container - Background-Color  | #D1C0BC |
| h1 | #333 | 
| #search-button - Background-Color | #3498db | 
| #search-button:hover - Background-Color | #2980b9 | 



## Authors

- [@aadilq](https://github.com/aadilq)


## API Reference


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `apiKey` | `string` | **Required**. Your API key |

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `url` | `string` | **Required**. https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric|




## Documentation

[Open Weather Map](https://openweathermap.org/api)


